import { Example } from "../example";
import { Terminal, CharCode, Color, Generation } from "yendor";

export default class extends Example {
  Run() {
    const terminal = Terminal.Retro.fromURL(80, 50, "font_16.png", 16, 16);
    const map = new Generation.DrunkardsWalk(80, 50);
    const drunkConfig = {
      initialCords: { x: 79, y: 49 },
      stepsToTake: Infinity,
      toCoverTileCount: 20,
    };

    map.walkSteps(drunkConfig);
    map.addCustomPoint({ x: 5, y: 5 }, 1);

    terminal.clear();
    for (let x = 0; x < map.table.width; x++) {
      for (let y = 0; y < map.table.height; y++) {
        if (map.table.get({ x: x, y: y }) === 1) {
          terminal.drawCharCode({
            x: x,
            y: y,
            charCode: CharCode.blackSpadeSuit,
            fore: Color.green,
          });
        }
      }
    }
  }
}
