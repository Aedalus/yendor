import { Table } from "../util";

export class DrunkardsWalk {
  table: Table<number>;

  constructor(width: number, height: number) {
    this.table = new Table(width, height);
  }

  private checkStep(historicalRecord: [], coveredTileCount: number) {}

  doSimulationStep(xInitial: number, yInitial: number, stepsToTake = 1) {
    //constants
    const Map = new Table<number>(this.table.width, this.table.height);
    const currentPosition = 2; //these numbers don't really matter. They need need to hold a num position.
    const Traversed = 1; //these numbers don't really matter. They need need to hold a num position.
    let coveredTileCount = 0;
    let historicalRecord = [];
    //initial set for the drunk's position.
    Map.set(xInitial, yInitial, currentPosition);

    for (let step = 0; step < stepsToTake; step++) {
      console.log("step is ", step);
      loop1: for (let x = 0; x < Map.width; x++) {
        loop2: for (let y = 0; y < Map.height; y++) {
          if (Map.get(x, y) === currentPosition) {
            const ranNum = Math.floor(Math.random() * 4);
            // 0 = north ---  1 = south --- 2 = west --- 3 = east

            switch (ranNum) {
              case 0:
                Map.set(x, y - 1, currentPosition);
                Map.set(x, y, Traversed);
                historicalRecord.push({ xCord: x, yCord: y });
                //check to see if this space has been occupied before.
                break;
              case 1:
                Map.set(x, y + 1, currentPosition);
                Map.set(x, y, Traversed);
                historicalRecord.push({ xCord: x, yCord: y });
                //check to see if this space has been occupied before.
                break;
              case 2:
                Map.set(x + 1, y, currentPosition);
                Map.set(x, y, Traversed);
                historicalRecord.push({ xCord: x, yCord: y });
                //check to see if this space has been occupied before.
                break;
              case 3:
                Map.set(x - 1, y, currentPosition);
                Map.set(x, y, Traversed);
                historicalRecord.push({ xCord: x, yCord: y });
              //check to see if this space has been occupied before.
            }
            //sets x and y to an absurd number so the forloop ends it doesn't get picked a easterly or southerly movement.
            break loop1;
          }
        }
        this.table = Map;
      }
    }
  }
}

//means of improvement

// fill in a hundred blocks, rather than just taking 100 steps.
// take n number of steps --- can do
// show where the drunk has been, each step of the way.
//