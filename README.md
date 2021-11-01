# Cresta AI Component Library

A library of React components built for Cresta AI and utilizes:

- [Rollup](https://github.com/rollup/rollup)
- [Sass](https://sass-lang.com/)
- [TypeScript](https://www.typescriptlang.org/)

It also features:

- [Storybook](https://storybook.js.org/) to demonstrate components
- [Jest](https://jestjs.io/) and [React Testing Library](https://github.com/testing-library/react-testing-library) enabling testing of the components

## Development

### Testing

```
npm run test
```

### Building

```
npm run build
```

### Storybook

- [Live Storybook](https://main--617ec16de88637004aa28562.chromatic.com)

To run a live-reload Storybook server on your local machine:

```
npm run storybook
```

To export Storybook as static files:

```
npm run storybook:export
```

### Generating New Components

Instead of copying all template files for a new component, try using:

```
npm run generate YourComponentName
```

This will generate:

```
/src
  /YourComponentName
    YourComponentName.tsx
    YourComponentName.stories.tsx
    YourComponentName.test.tsx
    YourComponentName.types.ts
    YourComponentName.scss
```

The default templates for each file can be modified under `util/templates`.

IMPORTANT: Don't forget to add the component to your `index.ts` exports if you want the library to export the component

### Installing Component Library Locally

To use this component library in other projects locally without having to first publish the library. In your new project's directory, you can run:

```
npm i --save ../cresta-component-library
```

which will install the local component library as a dependency in your project. It'll then appear as a dependency in `package.json` like:

```
  ...
  "dependencies": {
    ...
    "cresta-component-library": "file:../cresta-component-library",
    ...
  },
  ...
```

Your components can then be imported and used in that project.

**NOTE**: After installing the component library locally, you may run into:

```
Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:

You might have mismatching versions of React and the renderer (such as React DOM)
You might be breaking the Rules of Hooks
You might have more than one copy of React in the same app See for tips about how to debug and fix this problem.
```

This is the most commonly encountered problem people face when installing the library locally. This is most likely due to the third reason: `You might have more than one copy of React in the app`.

Normally when the library is published, dev dependencies are excluded. However, when the library is symlinked, all local dev depdendencies are persisted in the libraries `node_modules` (includes React). Your bundler may see two versions of React, one in the consuming app and one in the symlinked library. The solution is to have the component library use the React version in the consuming app. So from your component library folder, run:

```
npm link ../test-app/node_modules/react
```

**OR**, if you are using Webpack in app you can follow [this GitHub comment](https://github.com/facebook/react/issues/13991#issuecomment-435587809).

Read more about this issue [here](https://reactjs.org/warnings/invalid-hook-call-warning.html).

## Additional Help

### Dark Mode

The example component `TestComponent` respects the user's dark mode operating system preferences and renders the component in the appropriate theme.

This is achieved by using the media query: `@media (prefers-color-scheme: dark)` in combination with CSS variables. The colours that change depending on dark mode preference can be found in [`src/variables.scss`](src/variables.scss). Example usage of these variables can be found within [`src/TestComponent/TestComponent.scss`](src/TestComponent/TestComponent.scss).

Read https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme for more details.
