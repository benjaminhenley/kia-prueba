/**
 * Parses text for bold markers (**text**) and returns an array of React elements
 * @param {string} text - The text to parse
 * @return {Array} Array of text and bold elements
 */
export const formatTextWithBold = (text) => {
  if (!text) return null;

  // Split by bold markers (e.g. **bold text**)
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    // Check if this part is a bold section
    if (part.startsWith("**") && part.endsWith("**")) {
      // Extract the text between ** markers
      const boldText = part.slice(2, -2);
      return (
        <strong key={index} className="font-kia-bold">
          {boldText}
        </strong>
      );
    }

    // Regular text
    return part ? <span key={index}>{part}</span> : null;
  });
};
