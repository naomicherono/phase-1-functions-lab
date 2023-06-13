// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    let subtraction = 42;
    return Math.abs(block - subtraction);
  }
  
  console.log(distanceFromHqInBlocks(50));
  
  function distanceFromHqInFeet(block) {
    let distanceFromHqInFeet = 264;
    return distanceFromHqInBlocks(block) * distanceFromHqInFeet;
  }
  
  console.log(distanceFromHqInFeet(50));
  
  function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264;
  }
  
  console.log(distanceTravelledInFeet(38, 34));
  
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else if (distance > 2500) {
      return 'cannot travel that far';
    }
  }
  
  console.log(calculatesFarePrice(38, 34));
  