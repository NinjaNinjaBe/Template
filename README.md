# Template to build future empires
This GitHub template is designed to help you quickly bootstrap your project with a solid foundation. Whether you're working on a personal project or a team collaboration, this guide will walk you through setting up your new repository and getting started efficiently.

Follow the steps below to create your own repository from this template and start building right away! 👇


## Features

- Admin
- Auth
- Analytics
- Stripe
    - Checkout
- Email
- File management
    - Uploads, Download, ...
    - PDF templating
- Scheduled tasks/Queue
- Tenant management
- Error Logging/Tracing
- Location
- Sitemap

## Setup guide

### Step 1: Create a New Repository from the Template

Click the "Use this template" button located above the code files.

In the form that appears, provide a name for your new repository and adjust any settings as needed.

Click "Create repository from template" to generate your new repository with the template's contents.

### Step 2: Clone Your New Repository

Open your terminal or command prompt.

Clone your repository to your local machine using the command:

<code>git clone https://github.com/YourUsername/YourNewRepository.git</code>

Replace YourUsername with your GitHub username and YourNewRepository with the name of your new repository.

### Step 3: Install Dependencies

Navigate to the cloned repository's directory:

<code>cd YourNewRepository</code>

Install the necessary dependencies

<code>npm install</code>

### Step 4: Configure the Project

Copy the .env.example to .env and adjust any variable to your configuration

<code>cp .env.example .env</code>

### Step 5: Run the Project

Start the development server or build the project using the appropriate commands

- Frontend: <code>npm run dev</code>
- Backend: <code>npm run start:dev</code>


## Deployment (soon)




## Turbo Repo

This Turborepo includes the following packages/apps:

### Apps and Packages

- `frontend`: a [Nuxt](https://nuxt.com/) app
- `backend`: a [NestJS](https://nestjs.com/) app

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started today at [vercel.com](https://vercel.com/signup?/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup?utm_source=turborepo-examples), then enter the following commands:

```
cd my-turborepo
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```
npx turbo link
```

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
