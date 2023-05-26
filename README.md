# Sanity Studio CMS - Earthflex.dev 
Sanity CMS: To manage my personal website, I use clean Sanity templates and custom schemas to fit my data.

you can download and use this template to demo this template add yor Environment Variables
- [Project Overview](#project-overview)
  - [Important files and folders](#important-files-and-folders)
- [Configuration](#configuration)
  - [Step 1. Set up the project locally](#step-1-set-up-the-project-locally)
  - [Step 2. Create a new project Sanity](#step-2-create-a-new-project-sanity)
  - [Step 3. Set up the environment](#step-3-set-up-the-environment)
  - [Step 4. Run Sanity locally in development mode](#step-4-run-sanity-locally-in-development-mode)
  - [Step 5. Connect your front-end to show your personal site.](#step-5-connect-your-front-end-to-show-your-personal-site)

## Project Overview

# Important files and folders

| File(s)                                 | Description                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------- |
| `sanity.config.ts`                      | Config file for Sanity Studio                                                         |
| `sanity.cli.ts`                         | Config file for Sanity CLI                                                            |
| `schemas/index.ts`                      | Where Sanity Studio gets its content types from                                       |
| `.env.local.example`                    | Environment: Example Configuration                                                    |


## Configuration

### Step 1. Set up the project locally

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) that was created for you on your GitHub account. Once cloned, run the following command from the project's root directory:

### Step 2. Create a new project Sanity

 [Sign in & Sign up](https://www.sanity.io/) Click Create a new project. The project ID and title dataset will be produced after the project is created.

### Step 3. Set up the environment
This will create a git-ignored `.env.local` file with environment variables that will be used for local development. see example `.env.local.example` 

Add your  projectId & dataset
```SANITY_STUDIO_PROJECT_ID && SANITY_STUDIO_DATASET``` 

### Step 4. Run Sanity locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your studio configuration will be applied live using hot reloading.

You can create and edit personal profile on [https://localhost:3333/](https://localhost:3333) . default `PORT` Sanity

### Step 5. Connect your front-end to show your personal site.

This is my personal site use case. : [https://earthflex.dev/](https://earthflex.dev)
 
deploy with https://vercel.com/


## Learn more Sanity 
- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)
