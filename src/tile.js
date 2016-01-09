var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    (function (TileState) {
        TileState[TileState["CLOSED"] = 0] = "CLOSED";
        TileState[TileState["OPENED"] = 1] = "OPENED";
        TileState[TileState["BLOWN"] = 2] = "BLOWN";
        TileState[TileState["MARKED"] = 3] = "MARKED";
    })(exports.TileState || (exports.TileState = {}));
    var TileState = exports.TileState;
    ;
    (function (TileKind) {
        TileKind[TileKind["EMPTY"] = 0] = "EMPTY";
        TileKind[TileKind["BOMB"] = 1] = "BOMB";
    })(exports.TileKind || (exports.TileKind = {}));
    var TileKind = exports.TileKind;
    ;
    var Tile = (function () {
        function Tile() {
            this.state = TileState.CLOSED;
            this.neighbors = [];
            this.kind = TileKind.EMPTY;
            this.bombCount = 0;
        }
        Tile.prototype.mark = function () {
            if (this.state === TileState.CLOSED) {
                this.state = TileState.MARKED;
            }
            else if (this.state === TileState.MARKED) {
                this.state = TileState.CLOSED;
            }
        };
        Tile.prototype.act = function () {
            if (this.state === TileState.CLOSED) {
                this.state = TileState.OPENED;
            }
        };
        Tile.makeEmptyTile = function () {
            return new Tile();
        };
        Tile.makeBombTile = function () {
            return new BombTile();
        };
        Tile.prototype.toString = function () {
            return "" + (this.bombCount ? this.bombCount : ".");
        };
        return Tile;
    }());
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Tile;
    var BombTile = (function (_super) {
        __extends(BombTile, _super);
        function BombTile() {
            _super.apply(this, arguments);
            this.kind = TileKind.BOMB;
        }
        BombTile.prototype.act = function () {
            if (this.state === TileState.CLOSED) {
                this.state = TileState.BLOWN;
            }
        };
        BombTile.prototype.toString = function () {
            return "*";
        };
        return BombTile;
    }(Tile));
    exports.BombTile = BombTile;
});
//# sourceMappingURL=tile.js.map