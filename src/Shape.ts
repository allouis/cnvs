
import Vector2D = require('./Vector2D');


export interface Object2D {
    position: Vector2D.Vector2D;
    render (ctx: any): void
}

export interface ShapeOptions {
    x: number;
    y: number;
    fill?: string;
    stroke?: string;
    border?: number;
}

export class Shape implements Object2D {

    public position: Vector2D.Vector2D;
    public fill: string;
    public stroke: string;
    public border: number;

    constructor (options: ShapeOptions) {
        this.position = new Vector2D.Vector2D(options.x, options.y);
        this.fill = options.fill || 'black';
        this.stroke = options.stroke || 'black';
        this.border = options.border || 1;
        //minivents(this);
    }

    public render (ctx: any) {
        ctx.fillStyle = this.fill;
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = this.border;
    }

}

