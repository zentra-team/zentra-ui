# CLI

Use the CLI to add components to your project with [bounce-cli](https://www.npmjs.com/package/bounce-cli).

## init

Use the `init` command to initialize configuration and dependencies for a new project.

```bash
npx bounce-cli init
```

The `init` command installs dependencies, adds configures `bounce.json`.

```bash
npx bounce-cli@latest init
```

## add

Use the `add` command to add components and dependencies to your project.

```bash
npx bounce-cli@latest add [component]
```

You will be presented with a list of components to choose from:

```bash
Which components would you like to add? › Space to select. A to toggle all.
Enter to submit.

◯  Accordion
◯  Alert
◯  Button
◯  Card
◯  Modal
◯  Tabs
◯  Tooltip
◯  Select
◯  ...

```

### Options

```bash
Usage: bounce-cli add [options] [components...]

add a component to your project

Arguments:
  components the components to add or a url to the component.

Options:
  -o, --overwrite    overwrite existing files. (default: false)
  -c, --cwd          the working directory. defaults to the current directory.
  -a, --all          add all available components. (default: false)
  -h, --help         display help for command
```
