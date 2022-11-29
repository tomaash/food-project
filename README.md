# How to run this

## Create an environment file `.env.local` in project root with following content:

```env
VITE_GOOGLE_MAPS_KEY=<YOUR API KEY>
VITE_APP_TITLE=Food Project (or whatever :)
```

## Install pnpm (npm alternative)

```shell
npm install -g pnpm
```

after this, please open a new terminal window

## Install packages

```shell
pnpm i
```

## Start dev server

```shell
pnpm run dev
```

now you can open your browser on http://localhost:5173/ and start hacking ;)

## Notable used libraries

- package manager: https://pnpm.io/
- boilerplate: https://vitejs.dev/
- state management: https://jotai.org/
- css-in-js https://emotion.sh/
- components library: https://ant.design/
