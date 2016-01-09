define(["require", "exports", "./tile"], function (require, exports, tile_1) {
    "use strict";
    var genereateRandom = function (max) {
        return Math.round((Math.random() * max));
    };
    var Hex = function (x, y) {
        return { x: x, y: y };
    };
    var directions = [
        [Hex(+1, 0), Hex(+1, -1), Hex(0, -1),
            Hex(-1, 0), Hex(0, +1), Hex(+1, +1)],
        [Hex(+1, 0), Hex(0, -1), Hex(-1, -1),
            Hex(-1, 0), Hex(-1, +1), Hex(0, +1)]
    ];
    var sumCoords = function (a, b) {
        return { x: a.x + b.x, y: a.y + b.y };
    };
    var Board = (function () {
        function Board(width, heigth, bombCount) {
            var _this = this;
            this.width = width;
            this.heigth = heigth;
            this.bombCount = bombCount;
            this.tileList = [];
            Array.apply(Array, Array(heigth * width)).forEach(function () {
                _this.tileList.push(tile_1.default.makeEmptyTile());
            });
            Array.apply(Array, Array(bombCount)).forEach(function () {
                _this.tileList[genereateRandom(_this.tileList.length)] = tile_1.default.makeBombTile();
            });
            // fill neighbors
            this.tileList.forEach(function (tile, tileNum) {
                var curTileCoord = _this.getCoordByNum(tileNum);
                directions[curTileCoord.y % 2].forEach(function (dir) {
                    var next = _this.getNumByCoord(sumCoords(dir, curTileCoord));
                    if (next !== -1) {
                        tile.neighbors.push(_this.tileList[next]);
                    }
                });
            });
            // count bombs
            this.tileList.forEach(function (tile) {
                tile.bombCount = tile.neighbors.filter(function (neighbor) { return neighbor.kind === tile_1.TileKind.BOMB; }).length;
            });
        }
        Board.prototype.toString = function () {
            var _this = this;
            var out = "\n";
            Array.apply(Array, Array(this.heigth)).forEach(function (_, heigth) {
                out += heigth % 2 ? "|" : "| ";
                Array.apply(Array, Array(_this.width)).forEach(function (_, width) {
                    out += _this.tileList[heigth * _this.width + width];
                });
                out += "|\n";
            });
            return out;
        };
        Board.prototype.getCoordByNum = function (tileNum) {
            return {
                y: Math.floor(tileNum / this.width),
                x: Math.floor(tileNum % this.width)
            };
        };
        Board.prototype.getNumByCoord = function (c) {
            if (c.x < 0 || c.x >= this.width || c.y < 0 || c.y >= this.heigth) {
                return -1;
            }
            else {
                return c.y * this.width + c.x;
            }
        };
        return Board;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Board;
});
//# sourceMappingURL=board.js.map