# The Veymont Foundation

Private humanitarian foundation website.  
Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS custom properties
- **Animation:** Framer Motion
- **Fonts:** Cormorant Garamond + Inter (Google Fonts)
- **Images:** next/image (local assets only)
- **Deployment:** Vercel
- **Database:** None — fully static

## Pages

| Route             | Page          |
|-------------------|---------------|
| `/`               | Home          |
| `/mission`        | Mission       |
| `/initiatives`    | Initiatives   |
| `/founder`        | Founder       |
| `/impact`         | Impact        |
| `/journal`        | Journal index |
| `/journal/[slug]` | Journal entry |

## Adding Journal Entries

Edit `src/data/journal.ts`. Add a new object to the `journalEntries` array:

```ts
{
  id:        '7',
  slug:      'your-entry-slug',
  title:     'Entry Title',
  category:  'Reflection',
  excerpt:   'One or two sentence excerpt shown on the journal index.',
  body:      `First paragraph.

Second paragraph.

Third paragraph.`,
  published:  true,
  created_at: '2025-07-01T00:00:00Z',
}
```

Then redeploy:
```bash
vercel --prod
```

Deployment takes approximately 60 seconds.

## Image Assets

Foundation photos are stored in `public/images/founder/`.  
Source files: HEIC format, converted to JPG for web.

## Brand Tokens

| Token      | Hex     | Name             |
|------------|---------|------------------|
| --white    | #F6F2EA | Foundation White |
| --clay     | #A65A3A | Sacred Clay      |
| --forest   | #24342A | Deep Forest      |
| --copper   | #B86F3E | Burnt Copper     |
| --obsidian | #171717 | Obsidian         |
| --sand     | #E2D9CB | Sand             |
| --mist     | #EDE8DF | Mist             |
| --ink      | #2C2C2C | Ink              |
