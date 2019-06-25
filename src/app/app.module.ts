import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RestauranteComponent } from './components/restaurante/restaurante.component';
import { ResultadosComponent } from './components/resultados/resultados.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'restaurante', component: RestauranteComponent},
  {path: 'resultados', component: ResultadosComponent},
  {path: 'registrar', component: RegistrarComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    RestauranteComponent,
    ResultadosComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
