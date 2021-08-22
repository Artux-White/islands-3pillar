# Island Coding Challenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Description

This project was created as a Coding Challenge for 3Pillar Global.
In this little app, you will be presented with a small sea world where you can build your own islands.

This tiny world is represented by a grid, you can set the size and generate a new world at any time. Initially all the cells will be sea (blue color) and you can click on the world to add or remove land and create tiny islands (groups of adjacent cells).

You will see how many land cells and islands you created.

## General Structure
The project uses 3 main components to display the relevant parts of the app and 1 extra component for a popup
app-grid-controls: Let you define the dimensions of your world in number of cells.
app-main-grid: Draws the grid. This is where the user create land and islands.
app-summary: Show the info regarding how many cells you've selected.

These components are child of app component.
Every component has its own module and all are part of the IslandsComponentModule.

I use a Service called IslandService for an easier component communication. This service holds the total counts for cells and islands and the grid dimensions.

Most of the logic is inside the main grid component. I added comments to all relevant code.

## Requirements

Node version 12+ [Node](https://nodejs.org)

## Install dependencies

You need to install required dependencies using `npm install`.

## Run Application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

If you find any bugs you can contact the developer at <arturo.blanco@gmail.com>

