import React from "react";

/**
 * Parses text for bold markers (**text**) and line breaks (<br/>) and returns an array of React elements
 * @param {string} text - The text to parse
 * @return {Array} Array of text, bold elements, and line breaks
 */
export const formatTextWithBold = (text) => {
  if (!text) return null;

  // First, handle line breaks by replacing them with a unique marker
  const lineBreakMarker = "___LINE_BREAK___";
  const textWithMarkers = text.replace(/<br\/>/g, lineBreakMarker);

  // Split by bold markers (e.g. **bold text**)
  const parts = textWithMarkers.split(/(\*\*.*?\*\*)/g);

  // Process each part
  return parts
    .map((part, index) => {
      // Check if this part is a bold section
      if (part.startsWith("**") && part.endsWith("**")) {
        // Extract the text between ** markers
        const boldText = part.slice(2, -2);
        return (
          <strong key={index} className="font-kia-bold">
            {boldText.split(lineBreakMarker).map((text, i) =>
              i === 0 ? (
                text
              ) : (
                <React.Fragment key={i}>
                  <br />
                  {text}
                </React.Fragment>
              )
            )}
          </strong>
        );
      }

      // Regular text with possible line breaks
      if (!part) return null;

      // Split the part by line breaks and render them with <br /> elements
      return part.split(lineBreakMarker).map((text, i) =>
        i === 0 ? (
          <span key={`${index}-${i}`}>{text}</span>
        ) : (
          <React.Fragment key={`${index}-${i}`}>
            <br />
            <span>{text}</span>
          </React.Fragment>
        )
      );
    })
    .flat();
};
