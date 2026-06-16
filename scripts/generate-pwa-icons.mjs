import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const publicDir = join(root, 'public');
const svg = readFileSync(join(publicDir, 'favicon.svg'));

mkdirSync(publicDir, { recursive: true });

/** PWA manifest용 PNG 아이콘을 favicon.svg에서 생성한다. */
async function generate() {
  for (const size of [192, 512]) {
    const out = join(publicDir, `pwa-${size}.png`);
    await sharp(svg).resize(size, size).png().toFile(out);
    console.log(`created ${out}`);
  }
}

generate().catch((error) => {
  console.error(error);
  process.exit(1);
});
