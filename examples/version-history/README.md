# Jazz Version History Example

A minimal example showing how to use Jazz's built-in version history to show and restore changes.
Live Version: [https://version-history.demo.jazz.tools/](https://jazz-version-history.demo.jazz.tools/)

## Getting started

You can either
1. Clone the jazz repository, and run the app within the monorepo.
2. Or create a new Jazz project using this example as a template.


### Using the example as a template

Create a new Jazz project, and use this example as a template.
```bash
npx create-jazz-app@latest version-history-app --example version-history
```

Go to the new project directory.
```bash
cd version-history-app
```

Run the dev server.
```bash
npm run dev
```

### Using the monorepo

This requires `pnpm` to be installed, see [https://pnpm.io/installation](https://pnpm.io/installation).

Clone the jazz repository.
```bash
git clone https://github.com/garden-co/jazz.git
```

Install and build dependencies.
```bash
pnpm i && npx turbo build
```

Go to the example directory.
```bash
cd jazz/examples/version-history/
```

Start the dev server.
```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

## Questions / problems / feedback

If you have feedback, let us know on [Discord](https://discord.gg/utDMjHYg42) or open an issue or PR to fix something that seems wrong.


## Configuration: sync server

By default, the example app uses [Jazz Cloud](https://jazz.tools/cloud) (`wss://cloud.jazz.tools`) - so cross-device use, invites and collaboration should just work.

You can also run a local sync server by running`npx jazz-run sync`, and setting the `sync` parameter of`JazzReactProvider` in [./src/main.tsx](./src/main.tsx) to`{ peer: "ws://localhost:4200" }`.
