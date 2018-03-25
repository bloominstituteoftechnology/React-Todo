# React I - `The Good Ol'` Todo Project 

## Partner Study
#### Answers to the following partner-study can be found [here](https://reactjs.org/docs/glossary.html)
  * Describe the following, writing all answer in `answers.md`
    - Single Page Application,
    - Compilers, 
    - Bundlers,
    - Elements,
    - Components,
    - JSX,
    - Package Mangers,
    - CDN, 
    - Props and State.

### Other Useful Resources
* [CodeSandbox](https://codesandbox.io/s/z667kplonx) that was used in the lecture video: 
* [API Documentation](https://reactjs.org/docs/react-api.html)
* [Documentation](https://facebook.github.io/react/docs/jsx-in-depth.html) on JSX

### Battle Plan
 * **Objective:** 
   - At this point  you have become familiar with the  DOM and have done
     some research on the wonderful world of HTML and CSS.
   - Now  we're   going  to  dive  into   modern  front-end   JavaScript
     development by learning about ReactJS.

 * **Build:**
   - You're going to be building a ToDo App (please hold your applause).
   - We know this seems trivial, but the best part about this assignment
     is that  is shows off  some of the strengths  of React and  you can
     take it as far as want.

  * **Tool suggesstions:**
    * React Dev  Tools - *This is  a MUST* --- you need  to install this
      asap!
    * We have  everything you need for your  React Developer environment
      in this file. We went over this in the lecture video.

#### To Get Started
##### You'll need to make sure you have the following installed.
  * `node` and `npm`
  * `yarn` will pull in all the node_modules you need once you `cd` into
    the root directory of the project
  * `yarn  start` will start a  development server on your  localhost at
    port 3000.
  *  `yarn  test` will  run  the  tests that  are  included  in the  the
    project. Try  to get  as many  of these  passing as  you can  in the
    allotted time.

#### How to Tackle this Project
  *  Your job  is to  write  the components  to complete  the Todo  List
     application and pass as many of the tests as you can.
  * The tests  expect you to have a `TodoList`  component that renders a
    `Todo` component for each `todo` item.
  * The requirements for  your Todo List app are that  it should have an
    *input field* that a user can type  text into and submit in order to
    create a new `todo` item.
  * Aside from being able to add `todos`, you should be able to mark any
    `todo` in the  list as 'clicked'.  When a user  `clicks` on a `todo`
    item, indicating that  the item has been `clicked`,  the item should
    have its text  ~struck-through~, like so, to indicate  that task has
    been  completed.    Research  the   React  equivalent  of   the  CSS
    `text-decoration:  line-through`  property.   Further, when  a  user
    clicks on an already-clicked, or completed, item, the strike-through
    should  be  removed,  indicating  that   the  `todo`  is  no  longer
    `clicked`.
  * Once  you've finished your  components, you'll  need to have  the root
    `App` component render your `TodoList` component.

#### Tips to Keep in Mind
  *  All components  you  implement should  go  in the  `src/components`
    directory.
  * Think of your application as an Application Tree.  App is the parent,
    which    controlls   properties/data    needed    for   the    child
    components.  This  is how  modern  applications  are built.  They're
    modular,  separate  pieces  of   code  called  components  that  you
    'compose' together to make your app. It's awesome!
  * Be  sure to  keep your  `todos` in an  array on  state. Arrays  are so
    awesome to work with.
  * When you need to iterate over a list and return React components out
    as elements, you'll need to include  a "key" property on the element
    itself.  `<ElementBeingRendered  key={someValue} />`. Note:  this is
    what React  is doing  under the  hood, as  it needs  to know  how to
    access  each element,  which need  to be  unique so  that the  React
    engine can do its thing.  An example snippet that showcases this may
    look  something like  this:  ```  this.state.todos.map((todo, i)  =>
    <AnotherComponent key={i}  todo={todo} />);  ``` Here,  we're simply
    passing the index of each `todo`  item as the key for the individual
    React component.
  *    Feel   free  to   structure  your   `todo`  data   however  you'd
    like. i.e. strings, objects etc.
  * React will give you warnings in  the console that urge you to squash
    React Anti-Patterns.  But if something is completely off, you'll get
    stack trace errors that will force your bundle to freeze up. You can
    look for these in the Chrome console.

#### Extra Credit
  *  Refactor  each `todo`  to be  an object instead  of a  string.  For
    example, `todo:  {'text': 'Shop  for food, 'completed':  false}` and
    when a  user clicks on a  `todo`, switch that `completed`  flag to a
    `true` state.  `completed === true`, should toggle the strikethrough
    on the `completed todo`. The  toggling functionality should work the
    same as when each `todo` was a string instead of an object.
  * Add the ability to delete a  `todo`. The way this would work is each
    `todo` item  should have an `x`  that should be clickable  and that,
    when clicked, should remove the  `todo` item from the `state` array,
    which will also remove it from the rendered list of `todos`.
  * Take your App's styles to the next level. Start implementing as much
    creativity here  as you'd like. You  can build out your  styles on a
    component-by-component basis,  eg `App.js` has  a file next to  it in
    the directory tree called `App.css`  and you define all your styles
    in that file. Be sure to  @import these styles into the `index.css`
    file.
  * Persist your  data in `window.localStorage()` hint: you  may have to
    pass  your data  to a  `stringifier` to  get it  to live  inside the
    `localStorage()` of the browser. This  will cause it to persist past
    the page refresh.
