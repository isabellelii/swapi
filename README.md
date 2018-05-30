## Star Wars Fan Application  
 
## Description

Application which displays a overview of all Star Wars resources by using Star Wars public API (swapi.co/api). This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Final objective

- The user opens your app and gets a login screen. He has to login. After a successful login he is navigated to the overview page. If the user is logged in, he can refresh the browser and has not to login again. 
- The user has a list of all Star Wars resources, where he can filter for resource types (like people, starships...).
- The overview should include a search element, which searches anything in the any resource.
- The user clicks on a resource item and gets a detail view over it.

## Final result 
- The user opens your app and gets a login screen. He has to login. After a successful login he is navigated to the homepage. If the user is logged in, he can refresh the browser and has not to login again. Using Devise gem. 
- The user has a list of all Star Wars resources, where he can filter for resource types (like people, starships...). The user can click on a button of the prefered category and will be redirected to this category page. 
- On the choosen category page, the user can view the resources within that category. The user clicks on a resource item and gets a detail view over it.
- The user can also use the search form that exists on every category page to get specified information on anthing whiting that resource type. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
