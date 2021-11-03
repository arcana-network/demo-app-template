# SDK Demo

This is a simple app for integrating and testing Arcana's login and storage SDKs.
Use this app to implement and test SSO (Oauth) based login and file based transactions like upload, download, delete and share

## Quick Start

- Prerequisites:

  - You'll need an up to date LTS versions of **`node.js`** and **`npm`** installed in your system for this code to work.
  - You'll need a smart contract address. Get one at https://developer.arcana.network by creating an app.
  - You'll need client id of one of the following for login: Google, Twitch, Discord, Reddit, GitHub. You'll need to add this client id in the app that you created in [Arcana's Developer Dashboard](https://developer.arcana.network)

- Clone this repo

```bash
git clone <repo-url>
```

- Install dependencies

```bash
npm install
```

- To run the project in development environment

```bash
npm run dev
```

- To build the project for production (to generate static files for hosting)

```bash
npm run build
```

### Dependencies

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
