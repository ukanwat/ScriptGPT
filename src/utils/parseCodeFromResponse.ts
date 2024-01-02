import validate from 'validate-npm-package-name';
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






export function extractLibraries(input: string, action: string): string[] {
  const regex = new RegExp(`${action}:([^\`]+)`, 'g');
  const libraries: string[] = [];
  let match;

  while ((match = regex.exec(input)) !== null) {
    const libraryName = match[1];
    if (isValidLibraryName(libraryName)) {
      libraries.push(libraryName);
    }
  }

  return libraries;
}

function isValidLibraryName(name: string): boolean {
  const libraryRegex = /^(@[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*(\@[a-z0-9-~][a-z0-9-._~]*)?$/;
  return libraryRegex.test(name);
}

