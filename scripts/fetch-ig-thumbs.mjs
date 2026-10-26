import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["lib", "components", "app"];
const OUT_DIR = path.join(ROOT, "public", "ig");
const UA = { "User-Agent": "Mozilla/5.0" };
const IG_RE = /https?:\/\/(?:www\.)?instagram\.com\/(?:p|reel|tv)\/([A-Za-z0-9_-]+)\/?[^"'`\s]*/g;

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return walk(p);
    return /\.(tsx?|jsx?)$/.test(e.name) ? [p] : [];
  });
}

const posts = new Map(); // shortcode -> url
for (const file of SCAN_DIRS.flatMap((d) => walk(path.join(ROOT, d)))) {
  const src = fs.readFileSync(file, "utf8");
  for (const m of src.matchAll(IG_RE)) posts.set(m[1], m[0]);
}

fs.mkdirSync(OUT_DIR, { recursive: true });
console.log(`Found ${posts.size} Instagram posts`);

for (const [code, url] of posts) {
  const out = path.join(OUT_DIR, `${code}.jpg`);
  if (fs.existsSync(out)) {
    console.log(`skip  ${code} (already exists)`);
    continue;
  }
  try {
    const o = await fetch(
      `https://www.instagram.com/api/v1/oembed/?url=${encodeURIComponent(url)}`,
      { headers: UA }
    );
    if (!o.ok) throw new Error(`oembed ${o.status}`);
    const { thumbnail_url } = await o.json();
    if (!thumbnail_url) throw new Error("no thumbnail");

    const img = await fetch(thumbnail_url, { headers: UA });
    if (!img.ok) throw new Error(`image ${img.status}`);
    fs.writeFileSync(out, Buffer.from(await img.arrayBuffer()));
    console.log(`saved ${code}`);
  } catch (err) {
    console.warn(`FAIL  ${code} → ${err.message}  (save manually as public/ig/${code}.jpg)`);
  }
}