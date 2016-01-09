define(["require", "exports", "../src/tile"], function (require, exports, tile_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = describe("class Tile", function () {
        it("exists", function () {
            expect(tile_1.default).toBeDefined();
            var tile = new tile_1.default();
            expect(tile).toBeDefined();
        });
        it("should create BOMB", function () {
            var bomb = tile_1.default.makeBombTile();
            expect(bomb.kind).toBe(tile_1.TileKind.BOMB);
            expect(bomb.state).toBe(tile_1.TileState.CLOSED);
            bomb.act();
            expect(bomb.state).toBe(tile_1.TileState.BLOWN, "should be blown");
        });
        it("should create empty tile", function () {
            var bomb = tile_1.default.makeEmptyTile();
            expect(bomb.kind).toBe(tile_1.TileKind.EMPTY);
            expect(bomb.state).toBe(tile_1.TileState.CLOSED);
            bomb.act();
            expect(bomb.state).toBe(tile_1.TileState.OPENED, "should be opened");
        });
    });
});
//# sourceMappingURL=tile.spec.js.map