import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChartService {

    private label: string;
    private data: any;
    private backgroundColorList: Array<string> = new Array<string>();
    private borderColorList: Array<string> = new Array<string>();

    constructor(private _http: HttpClient) { }

    private generateRgbColor(list){
        let arrayList: Array<string> = new Array<string>();

        list.forEach(item => {
            let color = this.randomNumber();
            this.backgroundColorList.push(color+' 0.4)');
            this.borderColorList.push(color+' 1)');
        });       
    }

    public randomNumber(){
        let colors = [  
                        'rgb(255,215,0,',
                        'rgb(255,255,0,',
                        'rgb(255,0,0,',
                        'rgb(255,69,0,',
                        'rgb(139,0,0,',
                        'rgb(139,0,139,',
                        'rgb(139,0,139,',
                        'rgb(0,128,0,',
                        'rgb(0,0,205,',
                        'rgb(107,142,35,',
                        'rgb(240,128,128,',
                        'rgb(128,0,0,',
                        'rgb(255,99,132,',
                        'rgb(255,159,64,',
                        'rgb(255,205,86,',
                        'rgb(75,192,192',
                        'rgb(54,162,235',
                        'rgb(153,102,255',
                        'rgb(201,203,207'
                    ]
        return colors[Math.floor(Math.random() * (colors.length-1))];
    }

    public getChart(label:string, data: any[]) {

        this.generateRgbColor(data);

        return {
            label: label,
            data: data,
            backgroundColor: this.backgroundColorList,
            borderColor: this.borderColorList,
            borderWidth: 1
        };
    }

}