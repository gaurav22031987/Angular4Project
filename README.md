# Angular4-Features


Template is now ng-template: 
The template tag is now deprecated: you should use the ng-template tag instead. It still works though. Now Angular has its own template tag: ng-template. You will have a warning if you use the deprecated template somewhere when you update to Angular 4, so it will be easy to spot them.

ngIf with else: 
It’s now also possible to use an else syntax in your templates as shown below:

Pipes: 
Angular 4 introduced a new titlecase pipe. It changes the first letter of each word into uppercase:

Http: 
Adding search parameters to an HTTP request has been simplified:

Earlier, it was done as:


Router: 
A new interface has been introduced to represent the parameters of a URL: ParamMap. Instead of using params or queryParams, you should now use param or queryParam, because they offer get() for retrieving one value and getAll() to retrieve all values (as query parameters can have multiple values for example).

I guess I have covered all the major changes that has been introduced in Angular 4.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

