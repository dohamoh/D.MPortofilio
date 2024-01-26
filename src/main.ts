import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import {particlesJS} from 'particles.js'

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // particlesJS.load('particles-js', 'assets/particles.json', function() {
  //   console.log('callback - particles.js config loaded');
  // });


