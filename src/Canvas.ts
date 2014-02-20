import Vector2D = require('./Vector2D');
import Object2D = require('./Object2D');
import CanvasOptions = require('./CanvasOptions');

class Canvas {

  public element
  public context
  private children

  constructor(options: CanvasOptions) {
    this.element = document.createElement('canvas');
    this.element.width = options.width;
    this.element.height = options.height;
    this.context = this.element.getContext('2d');
    this.children = [];
    this.setupEvents();
  }

  private setupEvents() {
    window.addEventListener('click', function(event) {
      var offset = this.getOffset();
      var x = offset.x - event.clientX
      var y = offset.y - event.clientY;
      var hitPoint = new Vector2D(x, y);
      for (var i = this.children.length; i;) {
        var child = this.children[--i]; 
        if (child.containsPoint(hitPoint)) {
          child.emit('click', event);
        }
      } 
    }.bind(this));
  }

  private getOffset() {
    var x = 0,
        y = 0,
        elem = this.element;
    do {
      x += elem.offsetLeft
      y += elem.offsetTop
    } while (elem = elem.offsetParent);

    return {
      x: x,
      y: y
    }
  }

  public clear (x?: number, y?: number, width?: number, height?: number) {
    this.context.clearRect(
        (x || 0),
        (y || 0),
        (width || this.element.clientWidth),
        (height || this.element.clientHeight)
        );
  }

  public save () {
    this.context.save();
  }

  public restore () {
    this.context.restore();
  }

  public scale (width: number, height: number) {
    this.context.scale(width, (height || width) ); 
  }

  public rotate (angle: number) {
    this.context.rotate(angle*Math.PI/180);
  }

  public translate (x: number, y: number) {
    this.context.translate(x, (y || 0) );
  }

  private mathAxis () {
    this.translate(0, this.element.clientHeight);
    this.scale(1, -1);
  }

  public add (obj: Object2D) {
    this.children.push(obj);
  }

  public remove (obj: Object2D) {
    this.children.splice(this.children.indexOf(obj), 1); 
  }

  public empty () {
    this.children.length = 0;
  }

  public render (){
    var ctx = this.context;
    this.children.forEach(function(obj){
      !!obj.active && obj.render(ctx); 
    });
  }

  public animate () {
    requestAnimationFrame(this.animate.bind(this));
    this.clear();
    this.render();
  }
}

export = Canvas
