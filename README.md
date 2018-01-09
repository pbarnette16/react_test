This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some instructions on running and installing the REA code challenge
but first a little background on the project. The core of the install of the project is based on the 'Create React App.' As this is the de facto standard for react applications, understanding of its usage should be pretty well known for a react developer.

The project is broken down into several logical parts. The main app, the result pages, the service call, and the resulting component display, all with associated tests. Styling is converted by the [Sass](http://sass-lang.com/) preprocessor. 

## Table of Contents

- [Project Setup](#project-setup)
  - [Node Version](#node-version)
  - [Yarn Version](#yarn-version)
- [Understanding the package.json](#understanding-the-package.json)
- [Folder Structure](#folder-structure)
- [Project Design](#project-design)


## Project Setup

This project relies on NodeJs and Yarn to be installed on your machine. 

### Node Version

The project has been tested on a machine running Node v9.3.0.
To test what version of node you have installed use the following command:

`node -v`

If the installed version on the machine is the same as above there should be no issues with getting the project to run.


### Yarn Version

The project has been tested on a machine running Yarn v1.3.2.
To test what version of yarn you have installed use the following command:

`yarn -v`

Yarn is a package manager and project runner. Yarn was built to form a stop gap for installation of packages which npm was not doing at the time of Yarn's creation. The benefit of using Yarn comes from very fast download of packages as it saves them locally and the creation of a file that locks the version number of the packages included on a project. This scoping of packages to a specific version allows other developers on the project to be sure the modules included will match the code base the rest of the team has been using.


## Installing the project

Installing the project follows the normal course. Using Yarn you will install all of the necessary modules to run the project.

`yarn install`

This command will install all of the necessary packages to run the project.


## Understanding the package.json

There are a limited set of commands to run the project which are listed below:

* `yarn start`: This is the main command that you will need to be running on this project. It will run the commands that watch changes to js/scss files, display errors if any and allow for a faster development.
* `yarn test`: This is the main test runner of the project. It is recommended to run this command in parallel with `yarn start` to check for any breaking changes with test to make sure nothing previously built breaks during development.

Additional commands

* `yarn build-css`: This command builds the css to create complied CSS converting it from SCSS
* `yarn watch-css`: This command watches any changes to the SCSS files and generates the CSS files to see the updates locally. This is also a utility class used with the main project command `yarn start.`
* `yarn start-js`: This command starts the local development server which allows the developer to make live updates to the code and see it in real time. This is also a utility class used with `yarn start`

* `yarn build-js`: This command will build the js for the script for production.
* `yarn build`: This command will build the css/js for production.

## Folder Structure

The project is broken down in the following way

```
rea_code_test/
  README.md
  package.json
  public/
    index.html
    favicon.ico
    data/
    manifest.json
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    pages/
      Results/
        Results.scss
        Results.test.js
        Results.js
    services/
      service.js
      service.test.js
    tags/
      PropertyCard/
        PropertyCard.js
        PropertyCard.scss
        PropertyCard.test.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Project Design

The project has been designed to allow for smaller and more testable parts of the business requirements. This section will discuss the project design which files are important and how the logic was laid out. The main layout of the project is built using bootstrap for its grid and button styling. In a move to production some time would need to be spent to tree shake the js/css from that framework to cut down on the file size of the end project. Additionally, the project is setup to follow the Progressive Web App setup. This allows for the app to have closer to native install and usage, which most users are looking for without the overhead and hassle of custom development per device type and submission to app stores.

PWAs will replace custom app development in the near future as Safari is now starting work to support service workers. In most instances an app is not really required and they were stop gaps for browsers that did not have the necessary capabilities. This has changed and is still changing but in the end the web will win.

### App.js

The App.js file is the main container code for the site. It is a simple file which contains the layout for the project site incorporating the main component the Results.

#### App.test.js

The test file is simple. It test to see that the app is able to render. As there is no business logic in the module this is one of the only test required.

### Results.js

The Results.js file is the main workforce of the site. This is the file that loads the JSON via Ajax and splits up the received data into results and saved properties. Result properties are ones found from doing a search. Saved properties are previous results which have been marked for later retrieval. As the scope of this coding challenge was to display two columns which had the listing of the properties, this has been presented, however, I would like to work with a UX designer and maybe a strategist as there might be other ways to present this information to the user in a more consumable way.

This component keeps track of two different lists of resultant properties. When a user clicks to save a property that property using the ID is moved to the first spot in the saved column. Other interactions, when a user clicks remove the tile is removed from the display. 

Work still left to do, when a user clicks add or remove for the tiles this should be updated to the back end service to track the user changes and get new metrics on which data is relevant to help with listings. This is outside the scope of this coding test.

The layout is handled using bootstrap grids which allows for the site to be responsive of the tiles. 

#### Results.test.js

This is the main testing file of the site. The test included create a shallow render of the component which is run through several different tests. These test are rendering of the Result component, testing a default set of data for the results/saved tiles, the addition of a new saved property, the removal of a saved property, the testing of removal of a propertyId that doesn't exist in the saved properties. This is not an exhaustive set of test but is meant to show the types of tests that would be included for this component in a larger team project setup.

The test use a mock adapter for all of the API calls as a network call is not necessary to test the logic of moving property tiles between the different array groups.

### PropertyCard.js

The properties layouts are handled by the PropertyCard component but the individual settings are controlled by the Results.js. The data helps to show what type of tile should be shown to the user and what button text should be present. If the tile is a new result it will have the text 'Add', if the tile has previously been saved it will have a button text of 'Remove.' All of the settings are sent across as component is rendered.

#### PropertyCard.test.js

The PropertyCard component is a dumb component so there is no business logic necessary. The test for this component check the default settings, and then the settings of attributes for the display of the component.

## Thank You

Thank you for your time in looking over this submission. I know it takes time out of your busy schedule to look over coding challenges. Looking forward to feedback on this submission. Cheers
