import { MenuService } from './../menu.service';
import { Component, OnInit, EventEmitter, ViewChild, ElementRef, Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit, AfterViewInit {

  @ViewChild('mainMenu') mainMenu:ElementRef;
  @Output() public heightMenuEmitter: EventEmitter<number> = new EventEmitter();

  public menu: any[] = [{nome: 'Operacional', link: '1'}, {nome: 'Ralatórios', link: '2'}, {nome: 'Administrativo', link: ''}];

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.heightMenuEmitter.emit(this.mainMenu.nativeElement.clientHeight);
  }
  
  ngAfterViewInit(): void {
  }


}
