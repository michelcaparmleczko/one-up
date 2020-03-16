import { Component } from '@angular/core';
//déclarer Tone
declare const Tone: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'one-up';
  dropDaBass() {
    alert('BOOM!');
    // 1 - Inclure la library dans les script src de l'index 
    var synth = new Tone.Synth().toMaster()

    //play a middle 'C' for the duration of an 8th note
    synth.triggerAttackRelease('C4', '8n')
  }
}
