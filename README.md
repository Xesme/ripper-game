# Ripper

## Created by Xia Amendolara and Dan Lauby

## Description

This web application features a text based murder mystery game. The user gets to play from the perspective of Jack The Ripper, and avoid capture by accruing points each round. This browser based game was created at Epicodus on April 4th, 2017.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.28.3.

## User Story

* As a user, when I start the game, I would like to be able to add characteristics about myself, so I feel more connected to the role I am playing.

* As a user, I want to read a description of my current surroundings and scenario, so I may determine what I'd like to do in response.
As a user, I want to be able to select from at least 2 options at the end each scenario, so I may take a unique path and have a different experience than a different user.

* As a user, I would like my choices to affect my points, so I can tell if I am winning or not.
As a user, I want to be able to see my current points at any given time.

* As a user, I want to be informed that I've lost if my points go beyond a minimum level.


##  Configuration/dependencies

  * NPM (Development)
    * @angular/cli (Populates  an Angular application)

    * @angular/compiler-cli (Compiles TypeScript into JavaScript in which browsers can understand)

    * Jasmine - core, spec-reporter  (Behavior-driven development framework for testing JavaScript code)

    * Node (JavaScript runtime built on Chrome's V8 JavaScript engine)

    * ts-node (TypeScript execution environment for node)
    * typescript (A superset of JavaScript that compiles to clean JavaScript output)

    * codelyzer (Helps write consistent code, and discover potential errors)

    * gulp-concat (concatenates files into one)

    * karma - chrome-launcher, cli, jasmine, jasmine-html-reporter, coverage-istanbul-reporter (Allows you to execute JavaScript code in multiple real browsers)

    * protractor (end-to-end test framework for Angular and AngularJS applications)

    * tslint (Checks your TypeScript code for readability, maintainability, and functionality errors)

    * bower (Production)

    * Bootstrap

    * Firebase (data management)

    ## Implementation Plan  

| Objective | Implementation | Status |
|:-------------:|:-------------:|:-------------:|
| Create a new project | follow Configuration/dependencies | completed |
| Application has a well thought out README | Set up README with implementation plan and all other necessary information. | completed |
| Application has imported firebase | Create character model for firebase ( character: name, characteristics, score ) | incomplete |
| Create routing | $ touch app.router.ts | incomplete |
| Route end game back to homepage(splash) | <a (routerLink)="/"> | incomplete|
| Create components | ( splash, start-game, stage-1, stage-2, stage-2, end-game ) | incomplete  |
| Create three questions per component for game development | 1. increment 2. decrement 3. constant  | incomplete |
| Implement routing for all components | add to routes to router.ts and module.ts | incomplete|
| Create service for project | $ ng g service ripper.service | incomplete|
| Create seed for firebase | rippers.json | incomplete |
| Retrieve data from firebase | Import FirebaseListObservables<any[]> and add to constructor(s) private  angularfire: AngularFire (in service as well as .ts files using the service) | incomplete |
| Implement post request to Firebase  (form on component start-game) | push to firebase (new player)| incomplete |
| Create dynamic routing between components | get ripper by id | incomplete |
| Create (click) event handler to update score as player is routed between components | post request to FireBase to update score accordingly | incomplete |
| Create pipe for generating high score on the splash page | $ng g pipe ripper.pipe | incomplete |
| (Extra) Project is portfolio-quality | Removed unnecessary code and use SASS or CSS for styling | incomplete |

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Technologies Used
* JavaScript
* TypeScript
* Angular 2
* Node
* Bower
* Bootstrap
* HTML
* CSS
* Git
* FireBase

## Licensing
This application features MIT licensing.

Copyright &copy; 2017 **Xia Amendolara and Dan Lauby** All Rights Reserved.
