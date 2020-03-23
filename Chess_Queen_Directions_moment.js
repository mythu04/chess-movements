// Chess QUEEN Movements

<script>
    
// Checkpoint 1 | Creating the queen object
    var queen = {
      direction: 's',
      position : [4,0],
      whereabouts  : []
    }
    
// Checkpoint 2 | Turning the queen
    function changeDirection(direction) {

      let direction1;
      switch (direction)
 {
        case 'S':
          direction1 = 's'
          break;
        case 'N':
          direction1 = 'n'
          break;
        case 'E':
          direction1 = 'e'
          break;
        case 'W':
          direction1 = 'w'
          break;
        case 'NS':
          direction1 = 'ne'
          break;
        case 'NW':
          direction1 = 'nw'
          break;
        case 'SE':
          direction1 = 'se'
          break;
        case 'SW':
          direction1 = 'sw'
          break;
      }
      moveForward()
      queen.direction = direction1;
    }

    // Checkpoint 3 | Moving the queen forward

    function moveForward() {
      let yposition = queen.position.pop();
      let xposition = queen.position.pop(); 
      queen.position = [xposition , yposition+1];
      updatePosition(queen.position.toString())
      console.log(queen.position);
    }

    // Checkpoint 4 | Jump and move the queen

    function jumpMoveForward (steps){
      let yposition = queen.position.pop();
      let xposition = queen.position.pop(); 
      queen.position = [xposition , yposition+steps];
      updatePosition(queen.position)
      console.log(queen.position);
    }
       }
  </script>
