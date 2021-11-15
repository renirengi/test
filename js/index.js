import { initHomeComponent } from './home.js';
import { initSettingsComponent } from './settings.component.js';
/*import { CategoriesComponent } from './categories.component.js';
import { PictureComponent } from './picture.component.js';
import { ArtComponent } from './art.component.js';
import { HonorComponent } from './honor.component.js';*/
import { TranslateService } from './translate.service.js';
import { SettingsService } from './settings.service.js';

const settings = SettingsService.getInstance();
const translate = TranslateService.getInstance();

translate.setLocale(settings.language);


///window.customElements.define('app-settings', SettingsComponent);
//window.customElements.define('categories-component', CategoriesComponent);
//window.customElements.define('picture-component', PictureComponent);
//window.customElements.define('art-component',  ArtComponent);
//window.customElements.define('honor-component',  HonorComponent);

initHomeComponent();
initSettingsComponent();

