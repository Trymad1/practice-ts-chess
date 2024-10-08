import { Color } from "../Color.js";
import { Point } from "../Point.js";
import { Piece } from "../piece/Piece.js";

export class Cell {

  private piece: Piece | null;
  private readonly point: Point;
  private readonly color: Color;
  private readonly uuid: string;

  public constructor(color: Color, point: Point) {
    this.piece = null;
    this.point = point;
    this.color = color;
    this.uuid = this.generateId();
  }

  private generateId(): string {
    const timestamp = Date.now().toString(36);
    const randomString = Math.random().toString(36).substr(2, 9);
    return `${timestamp}-${randomString}`;
  }

  public isEmpty(): boolean {
    return this.piece == null ? true : false;
  }

  public getPiece(): Piece | null {
    return this.piece
  }

  public removePiece(): Piece | null {
    let currentPiece : Piece | null = this.piece;
    this.piece = null;
    return currentPiece;
  }

  public setPiece(piece: Piece) : Piece | null {
    let currentPiece : Piece | null = this.piece;
    const previousPieceCell: Cell | null = piece.getCell();
    if(previousPieceCell != null) {
      previousPieceCell.removePiece();
    } 
    
    if(currentPiece != null) {
      currentPiece.setCell(null);
    }

    piece.setCell(this);
    this.piece = piece;
    return currentPiece;
  }

  public getPoint(): Point {
    return new Point(this.point.getX(), this.point.getY());
  }

  public getColor(): Color {
    return this.color;
  }

  public getId(): string {
    return this.uuid;
  }

}