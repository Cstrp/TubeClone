import {InjectionToken} from '@angular/core';

const API_URL: string = 'https://www.googleapis.com/youtube/v3/search';

const API_URL_ID: string = 'https://www.googleapis.com/youtube/v3/videos';

const MOCK_URL: string = 'https://raw.githubusercontent.com/Cstrp/mockApi/main/mockApi.json';

const API_KEY: string = 'AIzaSyBeXiw-GohjsVSko0AO-TWIgffjD496yK4';

const enum API_KEYS {
  first = 'AIzaSyBeXiw-GohjsVSko0AO-TWIgffjD496yK4',
  second = 'AIzaSyBTTzmw6DpGji9j38dxJ6AQBuwqzbcLE0o',
  third = 'AIzaSyB0-dQOzDO7LjCDKdZ-89299PL6hYnOj3g',
}

const injectUrl = new InjectionToken('url');
const injectKey = new InjectionToken('api');

export {API_URL, injectUrl, API_KEY, injectKey, MOCK_URL, API_URL_ID, API_KEYS};
