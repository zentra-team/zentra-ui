<script setup lang="ts">
    import Step from '../src/components/step.vue'
</script>

# Installation

How to install dependencies and structure your app.

## Automatic Installation

<Step>1</Step> Install bounce-cli globally to use the CLI commands:

::: code-group

```bash [npm]
npm install -g bounce-cli
```

```bash [yarn]
yarn add -g bounce-cli
```

```bash [pnpm]
pnpm add -g bounce-cli
```

```bash [bun]
bun add -g bounce-cli
```

:::

<Step>2</Step> Then run the `init` command to set up your project:

::: code-group

```bash [npm]
npx bounce init
```

```bash [yarn]
yarn dlx bounceui init
```

```bash [pnpm]
pnpm dlx bounceui init
```

```bash [bun]
bun dlx bounceui init
```

:::

<Step>3</Step> You will be prompted to configure your project:

```bash
? What is your project name? my-project
? What is your project description? A sample Bounce UI project

```

<Step>4</Step> Once our project is ready to develop, you can add individual components using the `add` command:

::: code-group

```bash
npx bounce add button
```

```bash
yarn bounce add button
```

```bash
pnpm bounce add button
```

```bash
bun bounce add button
```

:::

<Step>5</Step> Or you can add all components at once:

::: code-group

```bash
npx bounce add --all
```

```bash
yarn bounce add --all
```

```bash
pnpm bounce add --all
```

```bash
bun bounce add --all
```

:::

## Manual Installation

<Step>1</Step> To install BounceUI, run one of the following commands in your terminal:

::: code-group

```bash [npm]
npm install @bounceui/react
```

```bash [yarn]
yarn add @bounceui/react
```

```bash [pnpm]
pnpm add @bounceui/react
```

```bash [bun]
bun add @bounceui/react
```

:::

<Step>2</Step> BounceUI is built on top of Tailwind CSS, so you need to install Tailwind CSS first. You can follow the official [installation guide](https://tailwindcss.com/docs/installation) to install Tailwind CSS.
