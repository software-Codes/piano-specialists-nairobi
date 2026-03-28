/**
 * download-images.js
 *
 * Downloads royalty-free stock images from Unsplash and converts to WebP.
 * Saves to /public/images/ with names matching Docs/images-assets.md.
 *
 * Usage: node scripts/download-images.js
 *
 * Sources: Unsplash (https://unsplash.com/license) — free for commercial use.
 */

const https = require("https");
const http = require("http");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUTPUT_DIR = path.join(__dirname, "..", "public", "images");

// ─── Image Map ───────────────────────────────────────────────────────
// [filename, url, description, {width, height}]
// The 12 files from the naming convention in docs + 6 extras for page heroes

const IMAGE_MAP = [
  // ══════════════════════════════════════════════════════════════════
  // CORE 12 (from Docs/images-assets.md naming convention)
  // ══════════════════════════════════════════════════════════════════

  // Home — Hero background: dramatic piano keys, dark moody lighting
  ["hero-piano-keys.webp",
    "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=1920&q=80",
    "Dramatic close-up of piano keys in moody lighting",
    { w: 1920, h: 1080 }],

  // Home — Hero alternate: close-up piano keys
  ["hero-piano-dark.webp",
    "https://images.unsplash.com/photo-1552422535-c45813c61732?w=1920&q=80",
    "Close-up piano keys dark background",
    { w: 1920, h: 1080 }],

  // Home About Snippet + About page team: piano technician at work
  ["about-technician.webp",
    "https://images.unsplash.com/photo-1461784121038-f088ca1e7714?w=1200&q=80",
    "Piano technician tuning or working inside a piano",
    { w: 1200, h: 800 }],

  // Services — Tuning: tuning fork / technician with tools
  ["service-tuning.webp",
    "https://images.unsplash.com/photo-1504465039710-0f49c0a47eb7?w=1200&q=80",
    "Piano tuning — close-up of piano keys and tools",
    { w: 1200, h: 800 }],

  // Services — Servicing: piano keys being cleaned/maintained
  ["service-servicing.webp",
    "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?w=1200&q=80",
    "Piano keys close-up — servicing and maintenance",
    { w: 1200, h: 800 }],

  // Services — Regulation: piano action mechanism close-up
  ["service-regulation.webp",
    "https://images.unsplash.com/photo-1571974599782-87624638275e?w=1200&q=80",
    "Piano action mechanism close-up — regulation",
    { w: 1200, h: 800 }],

  // Buying Guide — Grand piano on stage
  ["guide-grand-piano.webp",
    "https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?w=1200&q=80",
    "Grand piano with open lid on stage",
    { w: 1200, h: 800 }],

  // Buying Guide — Upright piano in home setting
  ["guide-upright-piano.webp",
    "https://images.unsplash.com/photo-1549490349-8643362247b5?w=1200&q=80",
    "Classic upright piano in home setting",
    { w: 1200, h: 800 }],

  // Buying Guide — Digital piano modern
  ["guide-digital-piano.webp",
    "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80",
    "Modern digital piano setup",
    { w: 1200, h: 800 }],

  // Buying Guide — Showroom / customer browsing pianos
  ["guide-showroom.webp",
    "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=1200&q=80",
    "Piano showroom — person browsing pianos",
    { w: 1200, h: 800 }],

  // Testimonials — Cards background: wood grain texture
  ["testimonials-bg.webp",
    "https://images.unsplash.com/photo-1558051815-0f18e64e6280?w=1200&q=80",
    "Soft wood grain texture — testimonials card background",
    { w: 1200, h: 800 }],

  // Contact — Nairobi cityscape skyline
  ["contact-nairobi.webp",
    "https://images.unsplash.com/photo-1611348524140-53c9a25263d6?w=1920&q=80",
    "Nairobi cityscape skyline — contact page hero",
    { w: 1920, h: 1080 }],

  // ══════════════════════════════════════════════════════════════════
  // EXTRAS (page heroes + additional sections from the tables)
  // ══════════════════════════════════════════════════════════════════

  // Services page hero: piano strings and hammers interior
  ["services-hero.webp",
    "https://images.unsplash.com/photo-1528722828814-77b9b83aafb2?w=1920&q=80",
    "Piano strings and hammers interior view — services page hero",
    { w: 1920, h: 1080 }],

  // Buying Guide page hero: grand piano in elegant room
  ["guide-hero.webp",
    "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920&q=80",
    "Beautiful grand piano in elegant room — buying guide hero",
    { w: 1920, h: 1080 }],

  // About page hero: hands playing piano keys
  ["about-hero.webp",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920&q=80",
    "Close-up of hands playing piano keys — about page hero",
    { w: 1920, h: 1080 }],

  // About — Our Story: vintage piano in warm light
  ["about-story.webp",
    "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1200&q=80",
    "Vintage piano in warm light — our story section",
    { w: 1200, h: 800 }],

  // Testimonials page hero: piano keys bokeh soft light
  ["testimonials-hero.webp",
    "https://images.unsplash.com/photo-1512733596533-7b00ccf8ebaf?w=1920&q=80",
    "Piano keys with bokeh soft light — testimonials hero",
    { w: 1920, h: 1080 }],

  // Contact — Side image: piano in studio/professional space
  ["contact-studio.webp",
    "https://images.unsplash.com/photo-1519682577862-22b62b24e493?w=1200&q=80",
    "Piano in a studio or professional space — contact side image",
    { w: 1200, h: 800 }],
];

// ─── Helpers ─────────────────────────────────────────────────────────

function download(url, redirects) {
  if (!redirects) redirects = 0;
  if (redirects > 5) return Promise.reject(new Error("Too many redirects"));
  return new Promise((resolve, reject) => {
    const client = url.startsWith("https") ? https : http;
    client
      .get(url, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return download(res.headers.location, redirects + 1).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error("HTTP " + res.statusCode));
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => resolve(Buffer.concat(chunks)));
        res.on("error", reject);
      })
      .on("error", reject);
  });
}

async function processImage(filename, url, description, size, index, total) {
  const outPath = path.join(OUTPUT_DIR, filename);

  if (fs.existsSync(outPath)) {
    console.log("[" + index + "/" + total + "] skip  " + filename + " (exists)");
    return;
  }

  process.stdout.write("[" + index + "/" + total + "] downloading " + filename + "...");

  try {
    const buffer = await download(url);
    process.stdout.write(" converting...");

    await sharp(buffer)
      .resize({ width: size.w, height: size.h, fit: "cover", withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outPath);

    const kb = (fs.statSync(outPath).size / 1024).toFixed(0);
    console.log(" done " + kb + "KB  " + description);
  } catch (err) {
    console.log(" FAILED: " + err.message);
  }
}

// ─── Main ────────────────────────────────────────────────────────────

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log("");
  console.log("Piano Specialists Nairobi — Image Downloader");
  console.log("Output: " + OUTPUT_DIR);
  console.log("Images: " + IMAGE_MAP.length);
  console.log("");

  for (let i = 0; i < IMAGE_MAP.length; i++) {
    const [filename, url, description, size] = IMAGE_MAP[i];
    await processImage(filename, url, description, size, i + 1, IMAGE_MAP.length);
  }

  // Summary
  const files = fs.readdirSync(OUTPUT_DIR).filter((f) => f.endsWith(".webp"));
  let totalSize = 0;
  for (const f of files) {
    totalSize += fs.statSync(path.join(OUTPUT_DIR, f)).size;
  }

  console.log("");
  console.log("Done! " + files.length + " WebP files in /public/images/");
  console.log("Total size: " + (totalSize / 1024 / 1024).toFixed(1) + "MB");
  console.log("");

  // List all files
  for (const f of files.sort()) {
    const kb = (fs.statSync(path.join(OUTPUT_DIR, f)).size / 1024).toFixed(0);
    console.log("  " + f.padEnd(30) + kb + "KB");
  }
  console.log("");
}

main();
