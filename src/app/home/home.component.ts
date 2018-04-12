import { MenuService } from './../menu.service';
import { browser, element } from 'protractor';
import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, HostListener, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { WeatherService } from './../weather.service';
import { ChartService } from './../chart.service';
import { } from '@types/googlemaps';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MenuService]
})
export class HomeComponent implements OnInit {

  @ViewChild('gmap') gmapElement: any;
  @Input() public heightMenu: number;

  map: google.maps.Map;
  public heightMap;

  constructor(private _weather: WeatherService, private _chartService: ChartService, private menuService: MenuService) { }

  ngOnInit() {      
    this.initMap();
    this.setHeightDiv();
  }

  public initMap(){
    var mapProp = {
      center: new google.maps.LatLng(18.5793, 73.8143),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);
  }

  public setHeightDiv(){
    this.heightMap = document.documentElement.clientHeight - this.heightMenu;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.heightMap = document.documentElement.clientHeight - this.heightMenu;
  }


}
