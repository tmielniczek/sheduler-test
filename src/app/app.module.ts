import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SchedulerViewComponent } from './components/scheduler-view/scheduler-view.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    AppComponent,
    SchedulerViewComponent
  ],
    imports: [
        BrowserModule,
        SchedulerModule,
        BrowserAnimationsModule,
        MatIconModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
