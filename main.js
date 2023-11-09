const markdown = require('markdown-it');
const fs = require('fs');

function build() {
  // Inside the `content` directory, for each subdirectory, if we have a index.md file, convert it to HTML and save it as index.html
  const contentDir = './content';
  const subDirs = fs.readdirSync(contentDir);
  subDirs.filter(dir => dir === 'nothing').forEach(subDir => {
    const indexFile = `${contentDir}/${subDir}/index.md`;
    if (fs.existsSync(indexFile)) {
      const md = fs.readFileSync(indexFile, 'utf-8');
      const html = markdown().render(md);
      fs.writeFileSync(`${contentDir}/${subDir}/index.html`, html);
    }
  });
}

function main() {
  build();
}

main();
