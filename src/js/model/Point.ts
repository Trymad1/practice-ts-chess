export class Point {

  private x: number;
  private y: number;

  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  public getX(): number {
    return this.x;
  }

  public getY(): number {
    return this.y;
  }

  public setX(x: number): void {
    this.x = x;
  }

  public addToX(value: number): void {
    this.x += value
  }

  public addToY(value: number): void {
    this.y += value;
  }

  public setY(y: number): void {
    this.y = y;
  }
  
  public setPoint(point: Point) {
    this.x = point.getX();
    this.y = point.getY();
  }

}