# lfdt-pccoe

Starter website scaffold for Lfdt Pccoe, the blockchain club of PCCOE.

## What is included

- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn-compatible structure with `components/ui`
- A hero section that uses the provided `AsciiArt` component

## Default paths

- Components: `components/ui`
- Styles: `app/globals.css`

Keeping the `components/ui` folder matters because shadcn CLI and the common alias setup expect primitives to live there. It keeps imports predictable, makes future component generation consistent, and avoids path drift when you add more UI pieces.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Open `http://localhost:3000`.

## If you want to rebuild this with shadcn CLI

Run the initializer, choose Next.js, TypeScript, and Tailwind, then point the aliases to `@/components` and `@/lib/utils`.

```bash
npx shadcn@latest init
```

If your project ever uses a different components path, create `components/ui` anyway for shadcn primitives so generated UI stays in the expected place.
# lfdt-pccoe