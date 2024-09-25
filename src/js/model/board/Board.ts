import { Point } from "../Point.js";
import { Cell } from "./Cell.js";

export interface Board {

  getWidth(): number;

  getHeight(): number;
  
  getCell(point: Point): Cell;

  inBorder(point: Point): boolean;
}