export const parseCodeFromResponse = (responseContent: string, language: string): string => {
  const codeStartMarker = '```' + language.toLowerCase(); // Change this marker based on the actual response pattern
  const codeEndMarker = '```'; // Change this marker based on the actual response pattern

  const codeStartIndex = responseContent.indexOf(codeStartMarker);
  const codeEndIndex = responseContent.lastIndexOf(codeEndMarker);

  if (codeStartIndex !== -1 && codeEndIndex > codeStartIndex) {
    return responseContent.slice(codeStartIndex + codeStartMarker.length, codeEndIndex).trim();
  }

  return responseContent; // You might want to handle non-code text differently
};
