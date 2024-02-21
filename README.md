# Elysia with Bun runtime

## Getting Started

To get started with this template, simply paste this command into your terminal:

```bash
bun create elysia ./elysia-example
```

## Development

To start the development server run:

```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

```
BEP_agence-mannequins
├─ .eslintrc.json
├─ .git
├─ package.json
├─ prisma
│  ├─ migrations
│  │  ├─ 20240202132733_init
│  │  │  └─ migration.sql
│  │  ├─ 20240202141232_init
│  │  │  └─ migration.sql
│  │  └─ migration_lock.toml
│  ├─ schema.prisma
│  └─ seed.js
├─ src
│  ├─ index.ts
│  ├─ libs
│  │  └─ prisma.ts
│  └─ routes
│     ├─ addresses
│     │  ├─ handlers.ts
│     │  └─ index.ts
│     ├─ admins
│     │  ├─ handlers.ts
│     │  └─ index.ts
│     ├─ models
│     │  ├─ handlers.ts
│     │  └─ index.ts
│     ├─ pastExperiences
│     │  ├─ handlers.ts
│     │  └─ index.ts
│     ├─ photos
│     │  ├─ handlers.ts
│     │  └─ index.ts
│     ├─ submitProfiles
│     │  ├─ handlers.ts
│     │  └─ index.ts
│     └─ users
│        ├─ handlers.ts
│        └─ index.ts
└─ tsconfig.json

```
