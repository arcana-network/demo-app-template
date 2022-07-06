# Sample dApp Template

This is a simple Vue application template. Use it to build a full-fledged dApp integrated with Arcana Auth and Storage SDKs. Learn how to enable user onboarding and data privacy features in dApp.

Refer to [Arcana Network documentation](https://docs.beta.arcana.network/docs/starter-app) for step by step instructions on how to use this template and integrate with Arcana Auth and Storage SDKs for enabling user onboarding and data privacy features.

## Quick Start

- Prerequisites:

  - You'll need latest LTS versions of **`node.js`** and **`npm`** installed in your system for this code to work.
  - You'll need to register and configure your dApp using [Arcana's Developer Dashboard](https://dashboard.beta.arcana.network). Configure social authentication mechanism, storage region, storage limits and other settings using the dashboard.
  - You'll need client ID or other social authentication identifiers for the selected user onboarding mechanisms: Google, Twitter, Twitch, Discord, Reddit, GitHub. You'll need to specify the client ID or other identifier created through social authentication provider in [Arcana's Developer Dashboard](https://dashboard.beta.arcana.network)

- Steps:

1. Clone this repo

```bash
git clone <repo-url>
```

2. Install dependencies

```bash
npm install
```

3. To run the project in development environment

```bash
npm run dev
```

4. To build the project for production (to generate static files for hosting)

```bash
npm run build
```

## Dependencies

This project is built using [Vue 3](https://v3.vuejs.org/guide/introduction.html) and uses [Vite.js](https://vitejs.dev/guide/) for generating builds

Other than that, these project uses following dependencies

- [Vue Router](https://next.router.vuejs.org/)
- [Vuex](https://next.vuex.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/) and [PostCSS](https://postcss.org/)
- [Heroicons](https://heroicons.com/)
- [NaiveUI](https://www.naiveui.com/en-US/os-theme/components/tooltip) for tooltips
- [Vue DK Toast](https://www.npmjs.com/package/vue-dk-toast) for displaying toast messages
- [file-saver](https://www.npmjs.com/package/file-saver) to create and download files locally
- [moment](https://www.npmjs.com/package/moment) for formatting date and time
- [bytes](https://www.npmjs.com/package/bytes) for formatting bytes to human readable values
