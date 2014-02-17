import ArcOptions = require('./ArcOptions');

interface CircleOptions extends ArcOptions {
  radius: number
  startAngle?: number
  endAngle?: number
  clockwise?: boolean
}

export = CircleOptions
