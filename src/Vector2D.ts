module cnvs {
  export interface Vector {
      x: number
      y: number
  }

  export class Vector2D implements Vector {

      x: number
      y: number

      constructor (x: number, y: number) {
          this.x = x || 0
          this.y = y || 0
      }

      public clone () {
          return new Vector2D(this.x, this.y)
      }

      public add (vector: Vector) {
          this.x += vector.x
          this.y += vector.y
          return this
      }

      public scale (scalar: number) {
          this.x *= scalar
          this.y *= scalar
          return this
      }

      public dot (vector: Vector) {
          return this.x * vector.x + this.y * vector.y
      }

      public length () {
          return Math.sqrt(this.dot(this))
      }

      public angle (vector: Vector2D) {
          return Math.acos(this.dot(vector)/this.length()*vector.length())
      }
  }
}
