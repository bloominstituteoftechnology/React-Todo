# React-1 - Todo Project

### What is React?
- Read this first: [Facebook Docs](https://facebook.github.io/react/docs/hello-world.html) - DONE √
- Learn about the [React Life Cycle Methods](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1) - DONE √

### Battle Plan
 - Objective: At this point you have become familiar with the DOM and have exausted research on the wonderful world of HTML and CSS. Now we're going to dive into modern JavaScript development by learning about ReactJS. - OKAY √
 - **You're going to be building a ToDo App (please hold your applause).** - OKAY √
 - We know this seems trivial, but the best part about this assignment is that is shows off some of the strengths of react and you can take it as far as want. - OKAY √

  - Tool suggesstions
    - React Dev Tools - **This is a MUST you need to install this asap!** - DONE √
      - using CHROME plugin from: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
    - For styling we'll be using [Sass](http://sass-lang.com/) - OKAY √
    - We have everything you need for your React Developer environment in this file. We went over this in the lecture video. - YAY√

#### To Get Started
##### You'll need to make sure you have the following installed.
  - node and npm - DONE √
    ```console
    $  node -v
    v8.0.0
    $  npm -v
    5.1.0
    ```

  - webpack `npm install -g webpack` to install it globally - DONE√
    ```console
    $  npm install -g webpack
    /usr/local/bin/webpack -> /usr/local/lib/node_modules/webpack/bin/webpack.js

    > fsevents@1.1.2 install /usr/local/lib/node_modules/webpack/node_modules/fsevents
    > node install

    [fsevents] Success: "/usr/local/lib/node_modules/webpack/node_modules/fsevents/lib/binding/Release/node-v57-darwin-x64/fse.node" al
    ready installed
    Pass --update-binary to reinstall or --build-from-source to recompile

    > uglifyjs-webpack-plugin@0.4.6 postinstall /usr/local/lib/node_modules/webpack/node_modules/uglifyjs-webpack-plugin
    > node lib/post_install.js

    + webpack@3.3.0
    added 341 packages in 33.069s
    ```
  - we'll also be using [ESLint](https://www.npmjs.com/package/eslint-watch) - OKAY √
  - `npm install` will pull in all the node_modules you need - DONE √
    ```console
    $  npm install

    > node-sass@4.5.3 install /Users/mixelpix/Lambda-University/LS-React-1/node_modules/node-sass
    > node scripts/install.js

    Downloading binary from https://github.com/sass/node-sass/releases/download/v4.5.3/darwin-x64-57_binding.node
    Download complete  ⸩ ⠋ :
    Binary saved to /Users/mixelpix/Lambda-University/LS-React-1/node_modules/node-sass/vendor/darwin-x64-57/binding.node
    Caching binary to /Users/mixelpix/.npm/node-sass/4.5.3/darwin-x64-57_binding.node

    > fsevents@1.1.2 install /Users/mixelpix/Lambda-University/LS-React-1/node_modules/fsevents
    > node install

    [fsevents] Success: "/Users/mixelpix/Lambda-University/LS-React-1/node_modules/fsevents/lib/binding/Release/node-v57-darwin-x64/fse
    .node" already installed

    Pass --update-binary to reinstall or --build-from-source to recompile

    > uglifyjs-webpack-plugin@0.4.6 postinstall /Users/mixelpix/Lambda-University/LS-React-1/node_modules/uglifyjs-webpack-plugin
    > node lib/post_install.js


    > node-sass@4.5.3 postinstall /Users/mixelpix/Lambda-University/LS-React-1/node_modules/node-sass
    > node scripts/build.js

    Binary found at /Users/mixelpix/Lambda-University/LS-React-1/node_modules/node-sass/vendor/darwin-x64-57/binding.node
    Testing binary
    Binary is fine
    npm WARN LS-React-1@1.0.0 No repository field.

    added 922 packages in 83.718s
    ```
  - `npm start` will start a development server on your localhost at port 8080. - "Hello World" AWESOME √
  - open up new terminal and run `npm run lint` do this often so you can make sure your app is up to date with linting errors. - OKAY √

#### Tips and Tricks
  - Think of your application as an Application Tree. App is the parent, which controlls properties/data needed for the child components. This is how modern applications are built. They're modular, separate pieces of code called components that you 'compose' together to make your app. It's awesome!
  - Be sure to keep your todos in an array on state. Arrays are so awesome to work with.
  - When you need to iterate over a list and return React components out as elements, you'll need to include a "key" property on the element itself. `<ElementBeingRendered key={someValue} />`. Note: this is what react is doing under the hood, it needs to know how to access each element and they need to be unique so the React engine can do its thing.
  - Feel free to structure your "todo" data however you'd like. i.e. strings, objects etc.
  - React will give you warnings in the console that urge you to squash React Anti-Patterns. But if something is completely off. You'll get stack trace errors that will force your bundle to freeze up. You can look for these in the Chrome Console, or in the terminal where you're running your webpack-dev-server.

#### Extra Credit
  - Refactor your "Todo" data to ensure it's in object format. `todo: {'text': 'Shop for food, 'completed': false}` and when a user clicks on a todo, switch that completed flag to true. If `completed === true` add some styles to indicate that the todo has been finished.
  - Take your App's styles to the next level. Start implementing as much creativity here as you'd like. You can build out your styles on a component-by-component basis eg `App.js` has a file next to it in the directory tree called `App.scss` and you define all your styles in that file. Be sure to @import these styles into the `index.scss` file.
  - Persist your data in `window.localStorage()` hint: you may have to pass your data to a stringifier to get it to live inside the `localStorage()` of the browser. This will cause it to persist passed the page refresh.
