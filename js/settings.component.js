import { SettingsService } from './settings.service.js';
import { TranslateService } from './translate.service.js';

export function initSettingsComponent(){
  const settings = SettingsService.getInstance();
  const translate = TranslateService.getInstance();
  const language = translate.getLocale();

    const languageElements = document.querySelectorAll('input[name="language"]');
    const rangeElement=document.querySelector('.range');
    alert(rangeElement);
    const volumeButton=document.querySelector('.false');
    const volumeTrue=document.querySelector('.true');
    const timerOnElement=document.querySelector('.on');
    const timerOffElement=document.querySelector('.off');
    const timerAnswerElement= document.querySelector('input[name="time"]');

    //document.languageElements.forEach((el) => el.addEventListener('click', () => console.log (1)));
    ///document.rangeElement.addEventListener('change',()=>console.log (2));

}

/*class SettingsComponent{
  constructor() {
   
    this.settings = SettingsService.getInstance();
    this.audio = new Audio();
    this.audioState = {
      currentTime: 0,
      playing: false,
      currentItemIndex: 0,
      muted: false,
      volumeValue: 0.5
    };
  }

  connectedCallback() {
    
   

    //this.#loadSettings();
   
    
    /*this.volumeFalse.addEventListener('click',()=>this.#removeVolume());
    this.volumeTrue.addEventListener('click',()=>this.#revertVolume());
    this.timerOnElement.addEventListener('click', () => this.#saveTimer());
    this.timerOffElement.addEventListener('click', () => this.#changeTimer());
    this.timerAnswerElement.addEventListener('click',()=>this.#saveTimerAnswer());*/
    
  



 /* #toggleModal() {
    this.modalElement.classList.toggle('displayed');

    if (!this.modalElement.classList.contains('displayed')) {
      location.replace(location.href.split('#')[0]);
    }
  }

  #loadSettings() {
    this.languageElements.forEach((el) => (el.checked = el.value === this.settings.language));
    this.backgroundElements.forEach((el) => (el.checked = el.value === this.settings.backgroundSource));
    this.hiddenElements.forEach((el) => (el.checked = this.settings.listOfHiddenElements.includes(el.value)));
  }

  #saveLanguage() {
    this.settings.language = this.shadow.querySelector('input[name="language"]:checked').value;
  }

  #saveBackgroundSource() {
    this.settings.backgroundSource = this.shadow.querySelector('input[name="background"]:checked').value;
  }

  
  }*/

