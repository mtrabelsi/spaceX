# How to run

Assuming you already running the Node.js, to launch the frontend part you need Just run the run

```
npm i 
npm start
```

It will build and lift a server at 3000 port with hot reloading enabled.

# Testing

Since the app is built using Mobile first approach in mind, so we invite you to use Chrome tools to simulate Android devices and 4K screens and see how the UI scale and shrinks accordingly.

# Technology used 

- Vanilla JS
- React.JS
- Webpack (custom config)
- Typescript
- Styled-component :
  great for making contextual Styled components, it is also compatible with SCSS.

# Architecture

Because the nature of Javascript/ReactJS is based on function, we structured the code into Modules as much as we can.

Our philosophy is encapsulation - where each module has its own styles, code, and dependencies (separation of concern), this makes the code maintainable and easy to read in the future.

The code base is structured as a component and page base.
If we look at the code, we can see mainly two Folders Components and Pages - explained below:

## Components 

It is a folder than contains a set of Components to be re-used by other components or by Pages, a component can be Molecules (composable from other Components) or Atoms (Atomic).

## Page

A page is what you see on the screen when you navigate using the buttons.
Every page is always a direct child of Layout component, this is good pattern since the page can inherit some styles from the Layout (or we can apply automatically some padding/margin to every page)

## Layout Component

It is a special component, it is the root of all other child components in the app and it is a Singleton (exists only once at time).

By using the Layout pattern, if you change the layout of the page(CSS padding, default text color etc) you have the luxury to change it only in this component - all pages will be affected immediately.

## State Folder

It contains all the files related to State management such as redux, actions, sagas etc

## Good foundation

When developing the code we used the “mobile first” approach, it means the app is by default running on mobile but also works on a bigger screen, even 4K width!

The good thing is that for bigger screens you can just add another breakpoint and put your custom CSCC for that screen - no need to touch the design of the smaller screens.

Notice how, the app can work on different screens without breaking the UI, in XL screen the Table stays in the center with a max-width set to 768px.

# State Management

Since the application is meant to scale in the future, we implimented our state management system using Redux/saga, only the connected pages only have the data that they need, and the actions to change them.

However: for the current stage of the app, redux library or any other would be overkill for the current state of this app (we only have 2 pages!). But only considering the fact that we are expecting a bigger code base we integrated them.

## Reusability in mind

The app is built to be expected to scale, and most of the code (especially components folder) will be the basic building bricks for all pages and it provide the necessary components to be re-used.
