function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);
}
function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264;
}
function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264;
}
function calculatesFarePrice(start, destination){
    const distance = Math.abs(start - destination) * 264;
    if (distance < 400){
        return 0;
    }
    else if (distance < 2000){
        return (distance - 400) * 0.02 
    }
    else if (distance >= 2000 && distance < 2500) {
    return 25;
    }
    else {
        return 'cannot travel that far'
    }
}