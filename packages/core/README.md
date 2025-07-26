<div align="center">
  <a href="https://zentra-team.github.io/zentra-ui" style="display:inline-block; background:black; padding:20px;">
    <img alt="Zentra logo" src="https://zentra-team.github.io/zentra-ui/logo.svg" height="128" width="128" />
  </a>
  <h1>Zentra UI</h1>
</div>

## Documentation

Visit https://zentra-team.github.io/zentra-ui to view the full documentation.

## Getting Started

```bash
npm install @zentraui/core
```

```tsx
import { Button } from "@zentraui/core"

const App = () => {
  return (
    <div>
      <Button onClick={() => alert("Hello, world!")}>Click Me</Button>
    </div>
  )
}
```

## CLI installation

Use the CLI to add components to your project with [zentraui-cli](https://www.npmjs.com/package/zentraui-cli).

```bash
npx zentraui-cli@latest init
```

```bash
npx zentraui-cli@latest add [component]
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
