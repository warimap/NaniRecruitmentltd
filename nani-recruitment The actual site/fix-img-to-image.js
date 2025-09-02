import fs from 'fs';
import path from 'path';

console.log('Starting img to Image replacement...');

const walkDir = (dir, callback) => {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath, callback);
    } else if (fullPath.endsWith('.tsx')) {
      callback(fullPath);
    }
  });
};

const imgTagRegex = /<img\b([^>]*)\/?>/gi;
const importRegex = /import\s+Image\s+from\s+['"]next\/image['"]/;

walkDir('./components', (filePath) => {
  console.log('Checking:', filePath);

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  if (!importRegex.test(content)) {
    // Add import Image at the top after last import
    const lastImportIndex = content.lastIndexOf('import ');
    const nextLineIndex = content.indexOf('\n', lastImportIndex);
    content = content.slice(0, nextLineIndex + 1) + "import Image from 'next/image';\n" + content.slice(nextLineIndex + 1);
    modified = true;
    console.log(`Added import Image to: ${filePath}`);
  }

  const newContent = content.replace(imgTagRegex, (match, attrs) => {
    modified = true;
    return `<Image${attrs} />`;
  });

  if (modified) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated: ${filePath}`);
  }
});

console.log('Done processing components.');
