import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public heightMenu: number;
  
  ngOnInit(): void {
    console.log("ola");
  }

  setMenuHeight(height: number): void{    
    this.heightMenu = height;
  }

}
