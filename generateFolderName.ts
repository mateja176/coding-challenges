export default {};

function generateNewFolderName(existingFolders: string[]): string {
  const index = existingFolders.reduce((index, name) => {
    if (name === 'New Folder') {
      return Math.max(0, index);
    } else {
      const [, match] = name.match(/^New Folder \((\d+)\)$/) || [];
      return match ? Math.max(Number(match), index) : index;
    }
  }, -1);

  return `New Folder${index === -1 ? '' : ` (${index === 0 ? 2 : index + 1})`}`;
}

console.log(generateNewFolderName(['New Folder']));
console.log(generateNewFolderName(['New Folder (2)']));
console.log(generateNewFolderName(['New Folder (41)']));
console.log(generateNewFolderName(['Test']));
