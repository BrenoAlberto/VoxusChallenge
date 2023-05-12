// @ts-nocheck
const { sync: globSync } = require('glob');
const path = require('path');

try {
  const files = globSync('**/*.performance.ts', {});
  files.forEach((file) => {
    console.log("+++++++++++++++++++++++++++")
    console.log(`Running performance in ${file}`);
    require(path.resolve(file));
  });
  process.exit(0);
} catch (err) {
  console.error('Error searching for performance files:', err);
  process.exit(1);
}
