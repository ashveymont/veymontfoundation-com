// One-time script: generates favicon-32x32.png and apple-touch-icon.png
// Run with: node scripts/generate-favicons.mjs
import sharp from 'sharp'

// VMonogram paths scaled to 32×32 (from 48×48 viewBox, scale=0.667)
const svg32 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
  <rect width="32" height="32" fill="#24342A"/>
  <path d="M 6.67 5.33 L 16 25.33" stroke="#B86F3E" stroke-width="0.83" fill="none" stroke-linecap="round"/>
  <path d="M 25.33 5.33 L 16 25.33" stroke="#B86F3E" stroke-width="1.33" fill="none" stroke-linecap="round"/>
</svg>`

// VMonogram paths scaled to 180×180 (from 48×48 viewBox, scale=3.75)
const svg180 = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="180" height="180">
  <rect width="180" height="180" fill="#24342A"/>
  <path d="M 37.5 30 L 90 142.5" stroke="#B86F3E" stroke-width="4.69" fill="none" stroke-linecap="round"/>
  <path d="M 142.5 30 L 90 142.5" stroke="#B86F3E" stroke-width="7.5" fill="none" stroke-linecap="round"/>
</svg>`

await sharp(Buffer.from(svg32)).png().toFile('public/favicon-32x32.png')
console.log('✓ favicon-32x32.png')

await sharp(Buffer.from(svg180)).png().toFile('public/apple-touch-icon.png')
console.log('✓ apple-touch-icon.png')
