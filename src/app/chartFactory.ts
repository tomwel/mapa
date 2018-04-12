
export class ChartFactory {

    constructor(private type: string, private data: any[], private options: any) {}

    public build(){
        return {
            type: this.type,
            data: this.data,
            options: this.options
        };
    }
}

export function createChart(type: string, data: any[], options: any) {
    return new ChartFactory(type, data, options);
}