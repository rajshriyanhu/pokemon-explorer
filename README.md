This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`]

## Getting Started

First, install all the dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Features

- Home page displays a paginated list of Pokemon, featuring 21 entries per page, sourced from the [PokeAPI](https://pokeapi.co/)
- Implements client-side search functionality allowing users to filter Pokemon by name within the current page
- Provides detailed Pokemon information through dynamic routing (/pokemon/:id), including comprehensive statistics, moves, abilities, forms, and types
- Utilizes client-side rendering to optimize user experience by reducing initial load times and providing immediate data updates
