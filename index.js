const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const batteryCounter = (accumulator, currentValue) => {
    return accumulator + currentValue
}

const totalBatteries =  batteryBatches.reduce(batteryCounter,0)