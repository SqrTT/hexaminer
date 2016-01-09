import Board from "../src/board";
import Tile, {TileKind, TileState} from "../src/tile";

export default describe("class Board", () => {
  it("exists", () => {
    expect(Board).toBeDefined();
    const board = new Board(10, 10, 5);
    expect(board).toBeDefined();
    expect(board.tileList.length).toBe(100, "size of board 10x10");
    expect(board.tileList[0].kind).toBe(TileKind.EMPTY);
    expect(board.tileList.filter((tile) => tile.kind === TileKind.BOMB).length).toBe(5, "count bombs");
  });

  it("Coords should be correct", () => {
    const board = new Board(10, 10, 0);
    expect(board.getCoordByNum(0).x).toBe(0, "zerro x");
    expect(board.getCoordByNum(0).y).toBe(0, "zerro y");
    expect(board.getCoordByNum(1).x).toBe(1, "one x");
    expect(board.getCoordByNum(1).y).toBe(0, "obe y");
    expect(board.getCoordByNum(9).x).toBe(9, "9x");
    expect(board.getCoordByNum(9).y).toBe(0, "9y");
    expect(board.getCoordByNum(10).x).toBe(0, "10x");
    expect(board.getCoordByNum(10).y).toBe(1, "10y");
    expect(board.getCoordByNum(11).x).toBe(1, "10x");
    expect(board.getCoordByNum(11).y).toBe(1, "10y");

    expect(board.getNumByCoord({x: 1, y: 1})).toBe(11);
    expect(board.getNumByCoord({x: 0, y: 0})).toBe(0);
    expect(board.getNumByCoord({x: -1, y: 0})).toBe(-1, "unxist");
    expect(board.getNumByCoord({x: 9, y: 9})).toBe(99);
  });
  it("neighbors", () => {
    const board = new Board(10, 10, 0);

    expect(board.tileList[0].neighbors.length).toBe(3);
    expect(board.tileList[9].neighbors.length).toBe(2, "9n");
    expect(board.tileList[20].neighbors.length).toBe(5);
    expect(board.tileList[99].neighbors.length).toBe(3);
    expect(board.tileList[90].neighbors.length).toBe(2);
  });
  it("render board", () => {
    const board = new Board(10, 10, 10);
    console.log(board + "");
  });
});
