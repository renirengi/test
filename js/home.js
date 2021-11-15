import { TranslateService } from './translate.service.js';
import { SettingsService } from './settings.service.js';

export function initHomeComponent(){
    const settings = SettingsService.getInstance();
    const translate = TranslateService.getInstance();
    const language = translate.getLocale();

    const artist=document.querySelector('.artist');
    const picture=document.querySelector('.picture');
      

    artist.addEventListener('click', () => {
       settings.userChange='artist';
       console.log(settings.userChange);
      });
    
    picture.addEventListener('click', ()=>{ 
      settings.userChange='picture';
    });

    if(language=="rus"){
      artist.textContent="Художники";
      picture.textContent="Картины";
    }

   
    
}