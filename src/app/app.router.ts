import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { StartGameComponent } from './start-game/start-game.component';

const appRoutes: Routes = [
  {
    path:"",
    component: WelcomeComponent
  }, {
    path:"start-game",
    component: StartGameComponent
  }

 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
