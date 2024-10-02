import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { SettingsComponent } from './components/settings/settings.component';

export const routes: Routes = [
    {path : "", component: MainComponent},
    {path : "login", component: LoginComponent},
    {path : "settings", component: SettingsComponent}

];
