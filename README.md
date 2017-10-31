
[![Build Status](https://travis-ci.org/ghdna/reactjs-estore.svg?branch=master)](https://travis-ci.org/ghdna/reactjs-estore)
[![Coverage Status](https://coveralls.io/repos/github/ghdna/reactjs-estore/badge.svg?branch=master)](https://coveralls.io/github/ghdna/reactjs-estore?branch=master)
[![dependencies Status](https://david-dm.org/ghdna/reactjs-estore/status.svg)](https://david-dm.org/ghdna/reactjs-estore)


## Synopsis

A simple & minimalist e-commerce accelerator store built with ReactJS, Redux, and Bootstrap 4. 

## Installation 
```
npm install

npm start 
```

## Motivation

![](https://media.giphy.com/media/xUNd9IGWmspPlHHRxS/giphy.gif)

I was working on a side project for an e-commerce sort of store on ReactJS to host on AWS S3 + CloudFront. The project got cancelled so I decided to opensource the code in hopes that it may help someone else get started with ReactJS for ecommerce.  

The project was built using  `create-react-app`, which is a global command-line utility that you use to create new projects in ReactJS. [Learn more here](https://github.com/facebookincubator/create-react-app)

In addition to React, this app is also using 

* [Redux](http://redux.js.org/) for state management
* [Bootstrap 4](https://getbootstrap.com/) for responsive look & feel
* [Axios](https://github.com/axios/axios) with Async/Await (ES8) as a Promise based HTTP client 
* [Thunk](https://github.com/gaearon/redux-thunk) as a middleware for Redux

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!


## Supported Language Features and Polyfills

This project supports a superset of the latest JavaScript standard.<br>
In addition to [ES6](https://github.com/lukehoban/es6features) syntax features, it also supports:

* [Exponentiation Operator](https://github.com/rwaldron/exponentiation-operator) (ES2016).
* [Async/await](https://github.com/tc39/ecmascript-asyncawait) (ES2017).
* [Object Rest/Spread Properties](https://github.com/sebmarkbage/ecmascript-rest-spread) (stage 3 proposal).
* [Dynamic import()](https://github.com/tc39/proposal-dynamic-import) (stage 3 proposal)
* [Class Fields and Static Properties](https://github.com/tc39/proposal-class-public-fields) (part of stage 3 proposal).
* [JSX](https://facebook.github.io/react/docs/introducing-jsx.html) and [Flow](https://flowtype.org/) syntax.

Learn more about [different proposal stages](https://babeljs.io/docs/plugins/#presets-stage-x-experimental-presets-).

While we recommend to use experimental proposals with some caution, Facebook heavily uses these features in the product code, so we intend to provide [codemods](https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb) if any of these proposals change in the future.

Note that **the project only includes a few ES6 [polyfills](https://en.wikipedia.org/wiki/Polyfill)**:

* [`Object.assign()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) via [`object-assign`](https://github.com/sindresorhus/object-assign).
* [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) via [`promise`](https://github.com/then/promise).
* [`fetch()`](https://developer.mozilla.org/en/docs/Web/API/Fetch_API) via [`whatwg-fetch`](https://github.com/github/fetch).

If you use any other ES6+ features that need **runtime support** (such as `Array.from()` or `Symbol`), make sure you are including the appropriate polyfills manually, or that the browsers you are targeting already support them.



## Contributors

[Gary Arora](https://twitter.com/AroraGary)

## License

MIT