### All Answers to Partner Study should be filled out in this file.
 * 1. Single-Page Applications (SPAs) are Web apps that load a single HTML page and dynamically update that page as the user interacts with the app. SPAs use AJAX and HTML5 to create fluid and responsive Web apps, without constant page reloads. However, this means much of the work happens on the client side, in JavaScript.

 * An example is Gmail because when a user clicks on a message in their inbox, the browser will stay on the same webpage, but the JavaScript code hides the inbox and brings the message body on screen.

 * 2. A Compiler is a special program that convert instructions into machine-code or lower level form so that it can be read and executed by the computer.

 * An example of a compiler is gcc and clang.
 * note that some compilers runs before the program first run, but there are some case that compiler run after program started that called JIT (just in time).

 * 3. Bundler is a tool that puts all your code and dependencies into one Javascript file.

 * An example is webpack and browserify. 

* 4. Element is the most general base class from which all objects in a Document inherit. It only has methods and properties common to all kinds of element. More specific classes inherit from Element. For example, the HTMLElement interface is the base interface for HTML elements, while the SVGElement interface is the basis for all SVG elements. Most functionality is specified further down the class hierarchy.

* 5. A component is an identifiable part of a larger program or construction. Usually, a component provides a particular function or group of related functions. A programmer should design and implement software components in a way that many differenct software programs can reuse them.

* 6. JSX is a preprocessor step that adds XML syntax to JavaScript. You can definitely use React without JSX but JSX makes React a lot more elegant. Just like XML, JSX tags have a tag name, attributes, and children. If an attribute value is enclosed in quotes, the value is a string.

* 7. A package manager or package management system is a collection of software tools that automates the process of installing, upgrading, configuring, and removing computer programs for a computer's operating system in a consistent manner.

* An example of this is the NPM client

* 8. Content delivery networks (CDN) are the transparent backbone of the Internet in charge of content delivery. To minimize the distance between the visitors and your website's server, a CDN stores a cached version of its content in multiple geographical locations (a.k.a., points of presence, or PoPs). Each PoP contains a number of caching servers responsible for content delivery to visitors within its proximity.

* 9. Props. Most components can be customized when they are created, with different parameters. These creation parameters are called props . For example, one basic React Native component is the Image . When you create an image, you can use a prop named source to control what image it shows.

* Props are passed to the child within the render method of the parent as the second argument to React.createElement() or, if you're using JSX, the more familiar tag attributes. The parent's state value of childsName becomes the child's this.props.name . From the child's perspective, the name prop is immutable.

* The heart of every React component is its “state”, an object that determines how that component renders & behaves. In other words, “state” is what allows you to create components that are dynamic and interactive.