# Multi-auth example with Jazz and React

This example demonstrates using Jazz with multiple authentication methods; in this case, Clerk and passphrases are able to be used.

## Getting started

To run this example, you may either:
* Clone the Jazz monorepo and run this example from within.
* Create a new Jazz project using this example as a template, and run that new project.


### Using this example as a template

1. Create a new Jazz project, and use this example as a template.
```bash
npx create-jazz-app@latest multiauth-app --example multiauth
```

2. Navigate to the new project.
```bash
cd multiauth-app
```

3. Rename .env.example to .env
```bash
mv .env.example .env
```

4. Update `VITE_CLERK_PUBLISHABLE_KEY` with your [Publishable Key](https://clerk.com/docs/deployments/clerk-environment-variables#clerk-publishable-and-secret-keys) from Clerk.

5. Run the development server
```bash
npm run dev
```

### Using the monorepo

This requires `pnpm` to be installed; see [https://pnpm.io/installation](https://pnpm.io/installation).

1. Clone the `jazz` repository.
```bash
git clone https://github.com/garden-co/jazz.git
```

2. Install dependencies.
```bash
cd jazz
pnpm install
```

3. Navigate to the example and start the development server.
```bash
cd examples/multiauth
```

4. Rename .env.example to .env
```bash
mv .env.example .env
```

5. Update `VITE_CLERK_PUBLISHABLE_KEY` with your [Publishable Key](https://clerk.com/docs/deployments/clerk-environment-variables#clerk-publishable-and-secret-keys) from Clerk.

6. Run the development server
```bash
pnpm dev
```

The example should be running at [http://localhost:5173](http://localhost:5173) by default.
