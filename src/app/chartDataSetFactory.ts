import { Injectable } from '@angular/core';

@Injectable()
export class ChartDataSetFactory {

    private label: string;
    private data: any;
    private backgroundColorList: string[];
    private borderColorList: string[];

    constructor(label: string, data: any) {
        this.label = label;
        this.data = data;
    }

    public generateRgbColor(list): string[]{
        let arrayList: string[] = [];

        list.forEach(item => {
            let color = 'rgb('+Math.random()*256+','+Math.random()*256+','+Math.random()*256+',';
            //color+', 0.2)'  color+', 1)'
            this.backgroundColorList.push(color+', 0.2)');
            this.borderColorList.push(color+', 1)');
        });
        
        return [];        
    }

    public build() {
        return {
            label: this.label,
            data: this.data,
            backgroundColor: this.generateRgbColor(this.data),
            borderColor: this.generateRgbColor(this.data),
            borderWidth: 1
        };
    }
}

export function createChartDataSet(label: string, data: any) {
    return new ChartDataSetFactory(label, data);
}