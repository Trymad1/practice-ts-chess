import { Color } from "../Color.js";
import { PieceType } from "../piece/Piece.js";

export interface PieceViewFactory {

  getImage(pieceType: PieceType, color: Color): string;

  getStyle(color: Color): string;
}