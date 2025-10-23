const fs = require("fs");
const path = require("path");

const outDir = path.join(__dirname, "..", "out");
const assetsDir = path.join(outDir, "assets");

// Create assets directory
if (!fs.existsSync(assetsDir)) {
  fs.mkdirSync(assetsDir, { recursive: true });
}

// Move _next folder to assets
const nextDir = path.join(outDir, "_next");
if (fs.existsSync(nextDir)) {
  const targetNextDir = path.join(assetsDir, "_next");
  fs.renameSync(nextDir, targetNextDir);
  console.log("✓ Moved _next to assets/_next");
}

// Move all assets (svg, jpg, png, ico, etc.) except index.html, robots.txt, sitemap.xml, 404.html
const files = fs.readdirSync(outDir);
const assetsToMove = files.filter((file) => {
  const ext = path.extname(file).toLowerCase();
  const keepInRoot = ["index.html", "robots.txt", "sitemap.xml", "404.html"];
  const isAsset = [".svg", ".jpg", ".png", ".ico", ".webp", ".gif"].includes(ext);
  return isAsset && !keepInRoot.includes(file);
});

assetsToMove.forEach((file) => {
  const source = path.join(outDir, file);
  const target = path.join(assetsDir, file);
  fs.renameSync(source, target);
  console.log(`✓ Moved ${file} to assets/`);
});

// Update HTML files to fix paths
function updateHtmlPaths(filePath) {
  let content = fs.readFileSync(filePath, "utf-8");

  // Fix _next paths
  content = content.replace(/\/(\_next\/)/g, "./assets/$1");

  // Fix asset paths (svg, jpg, etc.)
  assetsToMove.forEach((file) => {
    const regex = new RegExp(`(src|href)="/${file}"`, "g");
    content = content.replace(regex, `$1="./assets/${file}"`);
  });

  fs.writeFileSync(filePath, content);
  console.log(`✓ Updated paths in ${path.basename(filePath)}`);
}

// Update index.html
updateHtmlPaths(path.join(outDir, "index.html"));

// Update 404.html if exists
const page404 = path.join(outDir, "404.html");
if (fs.existsSync(page404)) {
  updateHtmlPaths(page404);
}

// Update any HTML in 404 folder
const folder404 = path.join(outDir, "404");
if (fs.existsSync(folder404)) {
  const htmlIn404 = path.join(folder404, "index.html");
  if (fs.existsSync(htmlIn404)) {
    updateHtmlPaths(htmlIn404);
  }
}

console.log("\n✅ Build reorganization complete!");
console.log("📁 Structure:");
console.log("   out/");
console.log("   ├── index.html");
console.log("   ├── robots.txt");
console.log("   ├── sitemap.xml");
console.log("   └── assets/");
console.log("       ├── _next/ (CSS, JS)");
console.log("       └── (images, icons)");
