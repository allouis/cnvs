import Vector2D = require('./Vector2D');
import Shape = require('./Shape');
import Canvas = require('./Canvas');
import Rect = require('./Rect');
import Arc = require('./Arc');
import Circle = require('./Circle');

var cnvs = {
  Vector2D: Vector2D,
  Shape: Shape,
  Canvas: Canvas,
  Rect: Rect,
  Arc: Arc,
  Circle: Circle
}

export = cnvs
