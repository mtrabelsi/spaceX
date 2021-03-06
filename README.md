# Demo

live https://space-x-ten.vercel.app/

(Please note that this is a free hosting account, so the app may go to sleep if it stays inactive)

# How to run

Assuming you have already installed Node.js.

To launch the frontend part you need just to run

```
npm i 
npm start
```

It will build and lift a server at 3000 port with hot reloading enabled.

# Unit test

To Launch the unit test/components test run :

```
npm run test
```

You will be prompted with many options, to run all of the tests, press "a"

# Technology used 

- Vanilla JS
- React.JS
- Redux + Saga middlware
- 	~~Webpack (custom config)~~  migrated to react-scripts
- Typescript
- Jest for testing
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

~~Since the application is meant to scale in the future, we implimented our state management system using Redux/saga, so all connected pages (using redux-connect)  have the data that they need and the actions to dispatch them - when they to.~~

~~That being said: for the current stage of the app, redux library or any other would be overkill at the moment, in fact, we only have 2 pages!. 
But only considering the fact that we are expecting a bigger code base we integrated them.~~

## Reusability in mind

The app is built to be expected to scale, and most of the code (especially components folder) will be the basic building bricks for all pages and it provide the necessary components to be re-used.


## Router Error management

When you try to visit a non-existing page, a custom Error page will show up instead.
