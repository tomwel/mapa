import { MenuService } from './menu.service';
import { ChartService } from './chart.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './weather.service';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { RastreamentoComponent } from './rastreamento/rastreamento.component';
import { CustomTabComponent } from './custom-tab/custom-tab.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { CardLessonComponent } from './card-lesson/card-lesson.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    RastreamentoComponent,
    CustomTabComponent,
    HomeStudentComponent,
    CardLessonComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [WeatherService, ChartService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
