# Angular4-Features


1. Template is now ng-template: 
The template tag is now deprecated: you should use the ng-template tag instead. It still works though. Now Angular has its own template tag: ng-template. You will have a warning if you use the deprecated template somewhere when you update to Angular 4, so it will be easy to spot them.

<ng-template *ngIf="true">
</ng-template>

2. ngIf with else: 
It’s now also possible to use an else syntax in your templates as shown below:

<div *ngIf="!sampleData.length; else elseTemplate"> </div>
  <ng-template #elseTemplate>
    ngIf with else demo
</ng-template>

3. Pipes: 
Angular 4 introduced a new titlecase pipe. It changes the first letter of each word into uppercase:

{{'foo bar' | titlecase}}

4. Http: Http is now httpClient in angular '@angular/common/http' module;

   4.1 -> Adding search parameters to an HTTP request has been simplified:

       Earlier way of sending search parameter to http request
         const params = new URLSearchParams();
         params.append('id', '1');
         this.http.get<SampleModel[]>(this.sampleDataUrl, { search: params });
     
  
      New Way of sending search parameter
           let paramsnew = new HttpParams().set('id', '1');
           this.http.get<SampleModel[]>(this.sampleDataUrl, { params: paramsnew });
4.2 -> HttpClient with Typed Response (SampleModel class)
        this.http.get<SampleModel[]>(this.sampleDataUrl)
5. Router: 
A new interface has been introduced to represent the parameters of a URL: ParamMap. Instead of using params or queryParams, you should now use param or queryParam, because they offer get() for retrieving one value and getAll() to retrieve all values (as query parameters can have multiple values for example).

this.route.snapshot.paramMap.get('id');

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

