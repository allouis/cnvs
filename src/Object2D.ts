import Vector2D = require('./Vector2D');

interface Object2D {
  position: Vector2D
  render (ctx: any): void 
}

export = Object2D

