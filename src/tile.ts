
export enum TileState {CLOSED, OPENED, BLOWN, MARKED};
export enum TileKind {EMPTY, BOMB};


export default class Tile {
  state: TileState = TileState.CLOSED;
  neighbors: Tile[] = [];
  kind: TileKind = TileKind.EMPTY;
  bombCount: number = 0;
  mark () {
    if (this.state === TileState.CLOSED) {
      this.state = TileState.MARKED;
    } else if (this.state === TileState.MARKED) {
      this.state = TileState.CLOSED;
    }
  }
  act() {
    if (this.state === TileState.CLOSED) {
      this.state = TileState.OPENED;
    }
  }
  static makeEmptyTile() {
    return new Tile();
  }
  static makeBombTile() {
    return new BombTile();
  }
  toString() {
    return "" + (this.bombCount ? this.bombCount : ".");
  }
}

export class BombTile extends Tile {
  kind: TileKind = TileKind.BOMB;
  act() {
    if (this.state === TileState.CLOSED) {
      this.state = TileState.BLOWN;
    }
  }
  toString() {
    return "*";
  }
}
