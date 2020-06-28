import { Component, OnInit, Input } from '@angular/core';
import { SpeechService } from '../../services/speech.service'

@Component({
  selector: 'app-speak',
  templateUrl: './speak.component.html',
  styleUrls: ['./speak.component.css']
})
export class SpeakComponent implements OnInit {
  @Input() toRead;

  index: number;
  v: number = 1;
  speechData;
  sw = false;
  
  ngOnInit(){
    console.log('onInit');
    
  }

  constructor(private spk: SpeechService){
    console.log('constructor');
    this.speechData = this.spk.getSpeechData();
    //this.index = this.speechData.findIndex();
    console.log(this.speechData);
  }

  start(){
    this.spk.start(this.toRead); 
  }
  pause(){
    this.spk.pause();
  }
  resume(){
    this.spk.resume();
  }

  setVolume(v){
    console.log(v);
    this.spk.setVolume(v);
  }

  getVolume(){
    return this.spk.getVolume();
  }
  changeVoice(){
    this.sw = true;
    this.speechData = this.spk.getSpeechData();
  }
  setLanguage(lang){
    this.spk.setLanguage(lang);
  }
}
