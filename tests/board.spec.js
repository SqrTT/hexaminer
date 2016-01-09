define(["require", "exports", "../src/board", "../src/tile"], function (require, exports, board_1, tile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = describe("class Board", function () {
        it("exists", function () {
            expect(board_1.default).toBeDefined();
            var board = new board_1.default(10, 10, 5);
            expect(board).toBeDefined();
            expect(board.tileList.length).toBe(100, "size of board 10x10");
            expect(board.tileList[0].kind).toBe(tile_1.TileKind.EMPTY);
            expect(board.tileList.filter(function (tile) { return tile.kind === tile_1.TileKind.BOMB; }).length).toBe(5, "count bombs");
        });
        it("Coords should be correct", function () {
            var board = new board_1.default(10, 10, 0);
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
            expect(board.getNumByCoord({ x: 1, y: 1 })).toBe(11);
            expect(board.getNumByCoord({ x: 0, y: 0 })).toBe(0);
            expect(board.getNumByCoord({ x: -1, y: 0 })).toBe(-1, "unxist");
            expect(board.getNumByCoord({ x: 9, y: 9 })).toBe(99);
        });
        it("neighbors", function () {
            var board = new board_1.default(10, 10, 0);
            expect(board.tileList[0].neighbors.length).toBe(3);
            expect(board.tileList[9].neighbors.length).toBe(2, "9n");
            expect(board.tileList[20].neighbors.length).toBe(5);
            expect(board.tileList[99].neighbors.length).toBe(3);
            expect(board.tileList[90].neighbors.length).toBe(2);
        });
        it("render board", function () {
            var board = new board_1.default(10, 10, 10);
            console.log(board + "");
        });
    });
});
//# sourceMappingURL=board.spec.js.map