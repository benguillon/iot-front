import { Routes, RouterModule } from '@angular/router';
import { LumiereComponent } from "./lumiere/lumiere.component";
import { TemperatureComponent } from "./temperature/temperature.component";
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/lumiere', pathMatch: 'full' },
    { path: 'lumiere', component: LumiereComponent },
    { path: 'temperature', component: TemperatureComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);