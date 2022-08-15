# Sample App Template

This is a simple Vue application template. Use it as your starter kit to build a full-fledged dApp integrated with Arcana Auth and Storage SDKs.

You can use this template to build a [Sample Demo App](https://github.com/arcana-network/demo-app) like application and learn how to enable user onboarding and data privacy features in dApp.

Refer to [Arcana Network documentation](https://docs.beta.arcana.network/docs/starter-app) for step by step instructions on how to use this template and integrate with Arcana Auth and Storage SDKs for enabling user onboarding and data privacy features.

## Quick Start

- Prerequisites:

  - You'll need latest LTS versions of **`node.js`** and **`npm`** installed in your system for this code to work.
  - You'll need to register and configure your dApp using [Arcana's Developer Dashboard](https://dashboard.beta.arcana.network). Configure social authentication mechanism, storage region, storage limits and other settings using the dashboard.
You'll need to create Google OAuth and obtain a client ID using Google console. This client ID must be specified for social authentication in [Arcana's Developer Dashboard](https://dashboard.beta.arcana.network)

- Steps:

1. Clone this repo

```bash
git clone git@github.com:arcana-network/sdk-demo.git
```

2. Install dependencies

```bash
npm install
```

3. To run the project in development environment

```bash
npm run dev
```

4. To build the project for production (to generate static files for hosting) and to preview the generated build, use

```bash
npm run build   # build for production
npm run serve  # preview built files
```

## Dependencies

This project is built using [Vue 3](https://v3.vuejs.org/guide/introduction.html) and uses [Vite.js](https://vitejs.dev/guide/) for generating builds.

- Other packages used

- [Vue Router](https://next.router.vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/) and [PostCSS](https://postcss.org/)
- [Heroicons](https://heroicons.com/)
- [NaiveUI](https://www.naiveui.com/en-US/os-theme/components/tooltip) for tooltips
- [Vue DK Toast](https://www.npmjs.com/package/vue-dk-toast) for displaying toast messages
- [file-saver](https://www.npmjs.com/package/file-saver) to create and download files locally
- [moment](https://www.npmjs.com/package/moment) for formatting date and time
- [bytes](https://www.npmjs.com/package/bytes) for formatting bytes to human readable values
