function distanceFromHqInBlocks(home) {
   if (home > 42) {
    let Number = home - 42;
    return Number;
   } else (home < 42) 
    let Number = 42- home;
    return Number;
}

function distanceFromHqInFeet(home) {
    let number2 = distanceFromHqInBlocks(home) * 264;
    return number2
}

function distanceTravelledInFeet(start, finish) {
    if (start < finish) {
        let Number3 = finish - start;
        return Number3 * 264;
    } else (start > finish) 
        let Number3 = start - finish;
        return Number3 * 264;
}

function calculatesFarePrice(start, finish) {
    let distance = distanceTravelledInFeet(start, finish) 
    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * .02
    } else if (distance > 2000 && distance <= 2500) {
        return 25
    } else if (distance > 2500)
        return 'cannot travel that far'
    
}

