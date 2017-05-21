import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SensorComponent } from './sensor/sensor.component';
import { ControllerComponent } from './controller/controller.component';
import { ServersComponent } from './servers/servers.component';
import { SensorsComponent } from './sensors/sensors.component';
import { ControllersComponent } from './controllers/controllers.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SensorComponent,
    ControllerComponent,
    ServersComponent,
    SensorsComponent,
    ControllersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
