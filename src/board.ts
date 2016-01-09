import Tile, {TileKind} from "./tile";

const genereateRandom = (max: number) => {
  return Math.round((Math.random() * max));
};
export interface Coord {
  x: number;
  y: number;
}

const Hex = (x: number, y: number): Coord => {
  return {x, y};
};

const directions = [
  [ Hex(+1,  0), Hex(+1, -1), Hex( 0, -1),
    Hex(-1,  0), Hex( 0, +1), Hex(+1, +1) ],
   [ Hex(+1,  0), Hex( 0, -1), Hex(-1, -1),
     Hex(-1,  0), Hex(-1, +1), Hex( 0, +1) ]

];

const sumCoords = (a: Coord, b: Coord): Coord => {
  return {x: a.x + b.x, y: a.y + b.y};
};


export default class Board {
  toString() {
    let out = "\n";
    Array.apply(Array, Array(this.heigth)).forEach((_: any, heigth: number) => {
      out += heigth % 2 ? "|" : "| ";
      Array.apply(Array, Array(this.width)).forEach((_: any, width: number) => {
        out += this.tileList[heigth * this.width + width];
      });
      out += "|\n";
    });
    return out;
  }
  tileList: Tile[] = [];
  getCoordByNum(tileNum: number): Coord {
    return {
      y: Math.floor(tileNum / this.width),
      x: Math.floor(tileNum % this.width)
    };
  }
  getNumByCoord(c: Coord): number {
    if (c.x < 0 || c.x >= this.width || c.y < 0 || c.y >= this.heigth) {
      return -1;
    } else {
      return c.y * this.width + c.x;
    }
  }

  constructor(private width: number, private heigth: number, private bombCount: number) {
    Array.apply(Array, Array(heigth * width)).forEach(() => {
      this.tileList.push(Tile.makeEmptyTile());
    });
    Array.apply(Array, Array(bombCount)).forEach(() => {
      this.tileList[genereateRandom(this.tileList.length)] = Tile.makeBombTile();
    });
    // fill neighbors
    this.tileList.forEach((tile, tileNum) => {
      const curTileCoord = this.getCoordByNum(tileNum);
      directions[curTileCoord.y % 2].forEach((dir) => {
        const next = this.getNumByCoord(sumCoords(dir, curTileCoord));
        if (next !== -1) {
          tile.neighbors.push(this.tileList[next]);
        }
      });
    });
    // count bombs
    this.tileList.forEach((tile) => {
      tile.bombCount = tile.neighbors.filter((neighbor) => neighbor.kind === TileKind.BOMB).length;
    });
  }
}
