import Tile, {TileKind, TileState} from "../src/tile";

export default describe("class Tile", () => {
  it("exists", () => {
    expect(Tile).toBeDefined();
    const tile = new Tile();
    expect(tile).toBeDefined();
  });
  it("should create BOMB", () => {
    let bomb = Tile.makeBombTile();

    expect(bomb.kind).toBe(TileKind.BOMB);
    expect(bomb.state).toBe(TileState.CLOSED);
    bomb.act();
    expect(bomb.state).toBe(TileState.BLOWN, "should be blown");
  });
  it("should create empty tile", () => {
    let bomb = Tile.makeEmptyTile();

    expect(bomb.kind).toBe(TileKind.EMPTY);
    expect(bomb.state).toBe(TileState.CLOSED);
    bomb.act();
    expect(bomb.state).toBe(TileState.OPENED, "should be opened");
  });
});
