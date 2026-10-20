import { copyFileSync, mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";

const dest = "/Users/severinleborgne/Desktop/severin-select/public/images/univers";
mkdirSync(dest, { recursive: true });

const candidates = [
  "/Users/severinleborgne/.cursor/projects/Users-severinleborgne-Downloads-severin-select/assets",
  "/Users/severinleborgne/Desktop/severin-select/assets"
];

const map = {
  "univers-grenouille.jpg": "grenouille.jpg",
  "univers-caviar.jpg": "caviar.jpg",
  "univers-crustaces.jpg": "crustaces.jpg",
  "univers-poissons.jpg": "poissons.jpg",
  "univers-singuliers.jpg": "singuliers.jpg"
};

for (const dir of candidates) {
  let files = [];
  try { files = readdirSync(dir); } catch { continue; }
  for (const [srcName, destName] of Object.entries(map)) {
    const match = files.find(f => f === srcName || f.includes(srcName.replace(".jpg", "")));
    if (match) {
      copyFileSync(join(dir, match), join(dest, destName));
      console.log("copied", match, "->", destName);
    }
  }
}
