const defaultSettigs = {
  language: 'eng',
  userChange: '',
  userVolume: 'off',
  timeGame: 'off',
  timeToAnswer:'30'
};

const settingsName = 'settings';

export class SettingsService {
  static service;

  /**
   * Don't use it! Use getInstance instead.
   */
  constructor() {
    const storedSettings = localStorage.getItem(settingsName);

    this.settings = storedSettings ? JSON.parse(storedSettings) : defaultSettigs;
  }

  static getInstance() {
    if (!SettingsService.service) {
      SettingsService.service = new SettingsService();
    }
    return SettingsService.service;
  }

  get language() {
    return this.settings.language;
  }

  set language(lang) {
    this.settings.language = lang;
    this.#saveSettings();
  }

  get userChange(){
    return this.settings.userChange;
  }

  set userChange(change) {
    this.settings.userChange = change;
    this.#saveSettings();
  }


  get userVolume() {
    return this.settings.volume;
  }

  set userVolume(volume) {
    this.settings.userVolume = volume;
    this.#saveSettings();
  }

  get timeGame() {
    return this.settings.timeGame;
  }

  set timeGame(time) {
    this.settings.timeGame = time;
    this.#saveSettings();
  }

  get timeToAnswer() {
    return this.settings.timeToAnswer;
  }

  set timeToAnswer(length) {
    this.settings.timeToAnswer = length;
    this.#saveSettings();
  }

  #saveSettings() {
    localStorage.setItem(settingsName, JSON.stringify(this.settings));
  }

}
