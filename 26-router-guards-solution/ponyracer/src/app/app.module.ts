import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import * as Webstomp from 'webstomp-client';

import { ROUTES } from './app.routes';
import { WEBSOCKET, WEBSTOMP } from './app.tokens';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RacesComponent } from './races/races.component';
import { RaceService } from './race.service';
import { RaceComponent } from './race/race.component';
import { PonyComponent } from './pony/pony.component';
import { FromNowPipe } from './from-now.pipe';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { JwtInterceptorService } from './jwt-interceptor.service';
import { BetComponent } from './bet/bet.component';
import { LiveComponent } from './live/live.component';
import { WsService } from './ws.service';
import { LoggedInGuard } from './logged-in.guard';

export function webSocketFactory() {
  return WebSocket;
}

export function webstompFactory() {
  return Webstomp;
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RacesComponent,
    RaceComponent,
    PonyComponent,
    FromNowPipe,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    BetComponent,
    LiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RaceService,
    UserService,
    JwtInterceptorService,
    { provide: HTTP_INTERCEPTORS, useExisting: JwtInterceptorService, multi: true },
    LoggedInGuard,
    WsService,
    { provide: WEBSOCKET, useFactory: webSocketFactory },
    { provide: WEBSTOMP, useFactory: webstompFactory }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
