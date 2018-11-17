# React Taproom

React application that manages inventory of a taproom, with options fields to view, add, and edit kegs, depending on who user's role.

## Description

There are some differences in development process between React and Angular. First, Angular is a framework, while React is considered a library. That is, while Angular is technically self-sustaining, React, only concerned with view, requires other libraries and tools to produce a full application.

A second difference between Angular and React is the syntax in which it is normally written. Angular is often written in Typescript whereas React uses JSX. Both Angular and React can be written in vanilla JS, but leverage their respective syntactic conventions.

A third difference between developing in Angular and React is the general type of programming. Angular uses and manipulates classes in an Object Oriented Programming (OOP) model This style of programming is centered around objects and the methods defined in these classes. React, on the other hand, uses functional programming, which organizes the application around functions to achieve the application's larger goal.

Both Angular and React applications are segmented in components, but React can only render a single element at a time. But but make use of nesting to allow multiple components to render when needed. Another difference in React is that most components are actually functions with a return value to be rendered. These functions must be "pure" in that they must:

1) return values that are determined using only provided input values.
2) not ever alter external state or application data.

Therefore these functional components must not alter props.

Additionally, React components are centered more around UI containers as opposed to Angular components which are centered more on functionality. This often requires React components to be more granular and view-oriented.

Styling is also done differently between these two JS frameworks. In Angular, each component has an external style sheet intended to style only its corresponding component. Traditional CSS syntax is used. However, in React, CSS can be implemented either CSS objects or modules, which are scoped locally to a specific component, unless a global tag is specifically employed.


### Installing

Clone this repo

```
git clone ...
```

navigate to project

```
cd ...
```

install npm

```
npm install
```

launch project in your in browser

```
ng serve --open
```
## Languages Used

* JavaScript / JSX
* HTML/CSS

## Component Map version 1

![component-map](https://github.com/amcgladd/react-taproom/blob/master/taproom-react-component-map.png)

## Component Map version 2
Notes on version 2:

* Added Delete Button subcomponent to Admin's KegList component

* Collapsed Tap Keg and Tap Keg Input Components into one

![component-map](https://github.com/amcgladd/react-taproom/blob/master/taproom-react-component-mapv2.png)


## Features to be added

* Handle error routing- Complete

* Conditional views for admin and patron routes- Complete

* Add ability to add kegs to masterKegList- Complete

* Implement uuid to each keg object- Complete

* Allow admin to delete a keg- Complete

* Allow admin to edit a keg's properties

* Create dropdown to manage keg types

* Style kegs according to type of beer

## Notes

Unforeseen issues / questions:

* How to dynamically edit a keg on the masterKegList.

* How to implement a styling framework like Google Materialize

* Alternatively, should each button be a subcomponent of the keg component?

* How does data sorting / piping occur in React?

* Using DropDown selector for Type chooser in Tap and Edit Keg components

* Formatting issues related to routing between admin and patron views

## Author

* **AJ Mcgladdery** - [Github](https://github.com/amcgladd)
