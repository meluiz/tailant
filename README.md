<p align="center">
  <a href="https://tailwind-variants.org">
    <img width="20%" src=".github/assets/isotipo.png" alt="Tailant" />
    <h1 align="center">Tailant</h1>
  </a>
</p>

<p align="center">
  A tiny utility for construction conditional CSS classes, with tailwind group variants and merging of identical classes.<br><br>
  <a href="https://www.npmjs.com/package/tailant">
    <img src="https://img.shields.io/npm/dm/tailant.svg?style=flat-round" alt="npm downloads">
  </a>
  <a href="https://www.npmjs.com/package/tailant">
    <img alt="NPM Version" src="https://badgen.net/npm/v/tailant" />
  </a>
  <a href="https://github.com/nextui-org/tailant/blob/main/LICENSE">
    <img src="https://img.shields.io/npm/l/tailant?style=flat" alt="License">
  </a>
</p>

## Features

- Supports Tailwind v3.0 up to v3.3
- Works in all modern browsers and Node >=16
- Fully typed
- Framework agnostic

## Quick Start

1. Installation: To use Tailant in your project, you can install it as a dependency:

```bash
# npm
npm i tailant

# yarn
yarn add tailant

# pnpm
pnpm add tailant
```

## Quick Start

1. You need to add the **Tailant** `wrapper` to your TailwindCSS configuration file `tailwind.config.js`:

```js
// tailwind.config.js
import { withTailant } from 'tailant'

/** @type {import('tailwindcss').Config} */
module.exports = withTailant({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
})
```

  <details>
    <summary>Why do I need to add the transformer?</summary>
    If you're wondering why you need to add the transformer, it's because TailwindCSS uses something called [JIT](https://tailwindcss.com/blog/tailwindcss-v3#just-in-time-all-the-time) (Just-In-Time) that compiles your CSS on-demand based on the classes you use in your HTML/JSX/etc. files. Some functionalities are specific to Tailant, the JIT compiler doesn't know which classes to compile. That's why we need to add the transformer to inform the compiler which classes to include in the compilation process. This ensures that the unique features provided by Tailant are properly recognized and compiled by the JIT compiler.
  </details>

2. After adding it, you can call the `css` function to use Tailant's features:

```js
import { css } from 'tailwant'

return (
  <button
    className={css(`
      h-10
      px-4
      py-2
      bg-white
      text-black
      hover:(bg-white/90)
      focus-visible:(outline-none ring-2 ring-ring ring-offset-2)
      disabled:(pointer-events-none opacity-50)
    `)}
  >
    Click me
  </button>
)
```

## Acknowledgements

- [**Tailwind Merge**](https://github.com/joe-bell/cva) ([Dany Castillo](https://github.com/dcastil)) We utilize its
  features to merge classes in the available functions in Tailant.

## Authors

- Luiz Felipe - [@meluiz](https://www.github.com/meluiz)
- João Pedro Magalhães - [@joaom00](https://www.github.com/joaom00)
- Daniel Gabriel - [@revogabe](https://www.github.com/revogabe)

## License

Licensed under the MIT License.

See [LICENSE](./LICENSE.md) for more information.
