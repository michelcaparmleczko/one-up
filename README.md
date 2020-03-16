# OneUp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.6.

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

index.html --- 
  <script src="https://unpkg.com/tone@13.8.25/build/Tone.js"></script>

app.component.html ---
<button (click)="dropDaBass()">One Up</button>

app.component.ts
import { Component } from '@angular/core';
// déclarer
declare const Tone: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'one-up';

  dropDaBass() {
    //alert('BOOM!');
    // 1 - Inclure la library dans les script src de l'index
    var synth = new Tone.Synth().toMaster()
    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease('C4', '8n')
  }
}


