

/*const distanceFromHqInBlocks = blocks => { 
    if (blocks < 42) {
        return (42 - blocks);
    }
    else
        return (blocks - 42); 
};*/

const distanceFromHqInBlocks = blocks => Math.abs(blocks - 42);

const distanceFromHqInFeet = blocks => {
    return distanceFromHqInBlocks(blocks) * 264;
};    
    
const distanceTravelledInFeet = (start, end) => Math.abs((start - end) * 264);    

const calculatesFarePrice = (start, end) => {
    const totalFeet = Math.abs((start - end) * 264)
    if (totalFeet < 400) {
        return 0
    }
    else if (totalFeet > 400 && totalFeet < 2000) {
        return (totalFeet - 400) * 0.02
    }
    else if (totalFeet > 2000 && totalFeet < 2500) {
        return 25
    }
    else return 'cannot travel that far'
};


    



































/*function distanceFromHqInBlocks(blocks){
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
}*/