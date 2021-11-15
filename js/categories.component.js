import { TranslateService } from './translate.service.js';
import { SettingsService } from './settings.service.js';

export class CategoriesComponent extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.settings = SettingsService.getInstance();
    const translate = TranslateService.getInstance();
  }

  connectedCallback() {
    const template = `
    <link href="../css/categories.component.css" rel="stylesheet" type="text/css">
    <header>
    <div class="peach_logo"></div>
    <a class="settings_logo"></a>
    </header>
    <main>
    <h2>Categories</h2>
    <div class="container">
      <div class="card">
        
      </div>
    </div>
  </main>
  <footer>
      <div class="home_logo"></div>
      <div class="school_logo"></div>
      <div class="honor_logo"></div>
  </footer>
    `;
  
    this.shadow.innerHTML = template;
    this.shadow.container=document.querySelector('.container');
    this.shadow.card=container.querySelector('.card');
  }  
   /* class Card{
        constructor(textNumber){
          this.card=card;
          this.textNumber=textNumber;
        }
        
        makeAvailability(){
          this.card.appendChild(document.createElement("span").textContent="0/10")
        }

        makeImage(){
          elem=document.createElement("img");
          this.elem.setAttribute("src", `https://raw.githubusercontent.com/renirengi/image-data/master/img/{randomImage(0,120)}.img`);
          this.elem.setAttribute("alt", "0");
          this.card.appendChild(elem);
        }

        makeName(textNumber){
          nameCard=document.createElement("p");
          this.nameCard.textContent=this.textNumber;
        }

      }

    function makeElements(textNumber){
      for(let i=0; i<12; i++){
        let card= new Card;
        card.makeAvailability();
        card.makeImage();
        card.makeName();
      }
    }
  }

    /*const quoteElement = document.querySelector('.quote');
    const authorElement = document.querySelector('.author');
    const changeQuoteElement = document.querySelector('.change-quote');
    const updateQuote = async () => {
      const quoteNumber = randomQuote(1, 40);
      const quoteText = await translate.translate(`quote${quoteNumber}text`);
      const quoteAuthor = await translate.translate(`quote${quoteNumber}author`);
  
      quoteElement.textContent = quoteText;
      authorElement.textContent = quoteAuthor;
    };
  
    changeQuoteElement.addEventListener('click', () => updateQuote());
  
    await updateQuote();
  }
  
  function randomImage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;*/
}