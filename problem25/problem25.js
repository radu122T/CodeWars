// You have an 8-wind compass, like this:

// You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

// Return the direction you will face after the turn.

// Examples

function direction(facing, turn) {
    let directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    let rotate = Math.floor(turn / 45);
   
    let indexOfDirection = directions.indexOf(facing);
    let facingFinalIndex = (indexOfDirection + rotate) % directions.length
    if (facingFinalIndex < 0) {
      return directions[directions.length - Math.abs(facingFinalIndex)]
    }
    return directions[facingFinalIndex]
  }