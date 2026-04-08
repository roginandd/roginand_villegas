import { useLayoutEffect, useRef, useState } from "react";
import { about } from "../../data/portfolioData";
import CodeLine from "../ui/CodeLine";
import SectionShell from "../ui/SectionShell";

function tokenizeCommentParts(parts) {
  return parts.flatMap(({ className, text }) =>
    text
      .split(/(\s+)/)
      .filter(Boolean)
      .map((token) => ({ className, text: token })),
  );
}

function trimCommentTokens(tokens) {
  let start = 0;
  let end = tokens.length;

  while (start < end && /^\s+$/.test(tokens[start].text)) {
    start += 1;
  }

  while (end > start && /^\s+$/.test(tokens[end - 1].text)) {
    end -= 1;
  }

  return tokens.slice(start, end);
}

function combineAdjacentTokens(tokens) {
  return trimCommentTokens(tokens).reduce((combined, token) => {
    const previousToken = combined[combined.length - 1];

    if (previousToken && previousToken.className === token.className) {
      previousToken.text += token.text;
      return combined;
    }

    combined.push({ ...token });
    return combined;
  }, []);
}

function splitTokenToFit(token, maxWidth, measureText) {
  const pieces = [];
  let currentText = "";

  for (const character of token.text) {
    const nextText = currentText + character;

    if (currentText && measureText(nextText) > maxWidth) {
      pieces.push({ ...token, text: currentText });
      currentText = character;
      continue;
    }

    currentText = nextText;
  }

  if (currentText) {
    pieces.push({ ...token, text: currentText });
  }

  return pieces;
}

function wrapCommentParts(parts, maxWidth, measureText) {
  const tokens = tokenizeCommentParts(parts);
  const lines = [];
  let currentLine = [];
  let currentText = "";

  const pushCurrentLine = () => {
    const nextLine = combineAdjacentTokens(currentLine);

    if (nextLine.length) {
      lines.push(nextLine);
    }

    currentLine = [];
    currentText = "";
  };

  for (const token of tokens) {
    const isWhitespace = /^\s+$/.test(token.text);

    if (!currentLine.length && isWhitespace) {
      continue;
    }

    if (!isWhitespace && measureText(token.text) > maxWidth) {
      if (currentLine.length) {
        pushCurrentLine();
      }

      for (const piece of splitTokenToFit(token, maxWidth, measureText)) {
        const candidateText = currentText + piece.text;

        if (currentLine.length && measureText(candidateText) > maxWidth) {
          pushCurrentLine();
        }

        currentLine.push(piece);
        currentText += piece.text;
      }

      continue;
    }

    const candidateText = currentText + token.text;

    if (currentLine.length && measureText(candidateText) > maxWidth) {
      pushCurrentLine();

      if (isWhitespace) {
        continue;
      }
    }

    currentLine.push(token);
    currentText += token.text;
  }

  if (currentLine.length) {
    pushCurrentLine();
  }

  return lines.length ? lines : [combineAdjacentTokens(tokens)];
}

function WrappedCommentLine({ parts }) {
  const wrapperRef = useRef(null);
  const measureRef = useRef(null);
  const sourceKey = parts
    .map(({ className = "", text }) => `${className}:${text}`)
    .join("\u241f");
  const [lines, setLines] = useState(() => [
    combineAdjacentTokens(tokenizeCommentParts(parts)),
  ]);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const measureNode = measureRef.current;

    if (!wrapper || !measureNode) {
      return undefined;
    }

    const measureText = (value) => {
      measureNode.textContent = value;
      return measureNode.getBoundingClientRect().width;
    };

    let frameId = 0;

    const updateLines = () => {
      const prefixWidth = measureText(" * ");
      const availableWidth = wrapper.clientWidth - prefixWidth;

      if (availableWidth <= 0) {
        return;
      }

      const nextLines = wrapCommentParts(parts, availableWidth, measureText);
      const nextSignature = JSON.stringify(nextLines);

      setLines((currentLines) =>
        JSON.stringify(currentLines) === nextSignature
          ? currentLines
          : nextLines,
      );
    };

    const scheduleUpdate = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(updateLines);
    };

    scheduleUpdate();

    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => {
            scheduleUpdate();
          });

    resizeObserver?.observe(wrapper);

    if (!resizeObserver) {
      window.addEventListener("resize", scheduleUpdate);
    }

    const fontsReady = document.fonts?.ready;

    fontsReady?.then(() => {
      scheduleUpdate();
    });

    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver?.disconnect();

      if (!resizeObserver) {
        window.removeEventListener("resize", scheduleUpdate);
      }
    };
  }, [sourceKey]);

  return (
    <div ref={wrapperRef} className="space-y-0">
      {lines.map((line, lineIndex) => (
        <CodeLine key={`${sourceKey}-${lineIndex}`} className="text-muted">
          {" * "}
          {line.map((part, partIndex) => (
            <span
              key={`${sourceKey}-${lineIndex}-${partIndex}`}
              className={part.className}
            >
              {part.text}
            </span>
          ))}
        </CodeLine>
      ))}
      <span
        ref={measureRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-[-9999px] top-0 invisible whitespace-pre font-mono text-sm leading-7"
      />
    </div>
  );
}

export default function AboutSection() {
  return (
    <SectionShell id="javadoc" className="space-y-1">
      <CodeLine className="text-muted">/**</CodeLine>
      {about.lines.map((line) => (
        <WrappedCommentLine
          key={line}
          parts={[{ className: "text-ink", text: line }]}
        />
      ))}
      <CodeLine className="text-muted">{" *"}</CodeLine>
      {about.tags.map((tag) => (
        <WrappedCommentLine
          key={tag.name}
          parts={[
            { className: "text-accent", text: tag.name },
            { text: " " },
            { className: "text-primary", text: tag.value },
          ]}
        />
      ))}
      <CodeLine className="text-muted"> */</CodeLine>
    </SectionShell>
  );
}
