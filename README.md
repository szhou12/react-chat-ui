# React Chat UI

## Setup
```bash
npm create vite@latest frontend --template react
 > Select a framework: React
 > Select a variant: JavaScript

cd frontend

npm install

## Version 1: ChatScope UI
npm install @chatscope/chat-ui-kit-react
npm install @chatscope/chat-ui-kit-styles


## Version 2: Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

npm install lucide-react # Lucide Icons

npm install clsx tailwind-merge # for utility function cn()

npm install @chakra-ui/react@^2.8.2
npm install @emotion/react @emotion/styled framer-motion

npm install react-hook-form
npm install @tanstack/react-query

npm install react-icons
```

## Tailwind Setup
### VS Code Extension
Install **Tailwind CSS IntelliSense** extension

### 1. install
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

### 2. Configure Tailwind
Update `tailwind.config.js` file: Set the content option to include all files where Tailwind classes might be used (e.g., `src` directory files).
```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 3. Import Tailwind into Project
1. Update `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Configure PostCSS
Create `postcss.config.js` file in the project root:
```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```
- This configuration tells PostCSS to:
    1. Use Tailwind CSS to process your CSS files
    2. Use Autoprefixer to add vendor prefixes to CSS rules automatically

### 5. Configure Vite
Update `vite.config.js` to include PostCSS configuration:
```js
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
})
```

## UI Version 1 - ChatScope
```
src/
├── hooks/
│   └── useChat.jsx
└── components/
    └── ChatScopeUI.jsx
```

## UI Version 2 - Tailwind
```
src/
├── utils.jsx
└── components/
    ├── heading.jsx
    └── ConvserationUI.jsx
```

## Tech Stack
- [chatscope UI toolkit](https://chatscope.io/)

## Resources
- [Build A Chatbot With The ChatGPT API In React (gpt-3.5-turbo Tutorial)](https://www.youtube.com/watch?v=Lag9Pj_33hM&ab_channel=CooperCodes)
- [Build a SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, Stripe | Full Tutorial 2023](https://www.youtube.com/watch?v=ffJ38dBzrlY&ab_channel=CodeWithAntonio)