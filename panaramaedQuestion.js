jevelyn@panoramaed.com
//       Y
//       |
//       |
//       |
//       |
// ------T-------X
//       |(0,0)
//       |
        
// Turtle starts at (0,0) facing up/North/+Y

// F(n): Move forward n spaces in the direction the turtle is facing
// R: Turn right (CW) 90º in place
// L: Turn left (CCW) 90º in place

// Example
// -------
// Input: F(3),L,F(2),R,F(1)
// Output: (-2,4)

//       Y
//     T |
//     TTT
//       T
//       T
// ------T-------X
//       |(0,0)
//       |

  //state 
  
  //position x,y
  let pos = {"x":0, "y":0};
  //direction n s w e.
  let dir = "n";
  //currDeg
  let currDeg = 0;
  let locationL = {"n": "w", "w": "s", "s": "w", "e": "n"};
  let locationR = {"n": "e", "w": "n", "s": "e", "e": "s"};

  
function play(command, num){

  
  //evaluate case l r F
  // case left change the direction' 90 deg (+)
  if(command === "l"){
    //update the currDeg, direction
    // check for boundaries.
    currDeg = currDeg + 90 ;
    //if the addition of the currDeg and the 90 deg more than 360 then reset it 0
      if( currDeg > 360 ) currDeg = 0;
      
      dir = locationL[ dir ];
    // console.log("dir", dir, "currDeg",  currDeg);
  
  }else if(command === "r"){
    
  // case right change the direction' 90 deg (-)    
    //if the addition of the currDeg and the 90 deg less than 0 then reset it 360 
    //update the currDeg, direction
        currDeg = currDeg + 90 ;
    //if the addition of the currDeg and the 90 deg more than 360 then reset it 0
      if( currDeg < 0 ) currDeg = 270;
      
      dir = locationR[ dir ];

  } else if (command === "f"){
   // case forward update the poistion
   // upate the position , adding num from params
   //  case for directions n s w e. we add to our coordinates the num value.
    
      switch(dir){
        case "n":
          pos["y"] += num;
          break;
          case "w":
          pos["x"] -= num;
          break;
          case "s":
          pos["y"] -= num;
          break;
          case "e": 
          pos["x"] += num;
          break;
      }
  return pos;

  }
             
  

  
  // output return position
  
}

console.log(play("f",3));
play("l");
play("f", 2);
play("r");
console.log(play("f", 1));
// console.log(play("f",3));