import { Color } from "../Color";
import { Piece, PieceType } from "./Piece";

export class Pawn extends Piece {
  
  constructor(color: Color) {
    super(color, Piece.PAWN_STR, PieceType.PAWN);
  }

}