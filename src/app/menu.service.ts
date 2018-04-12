import { Injectable, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {

    static emitirHeightMainMenu = new EventEmitter<number>();
    public height: any;

    constructor() { }

    setHeightMainMenu(h) {
        this.height = h;        
    }

    getHeightMainMenu(){
        return this.height;
    }
    

}

