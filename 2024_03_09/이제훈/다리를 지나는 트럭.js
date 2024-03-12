function solution(bridge_length, weight, truck_weights) {
  let n = truck_weights.length;
  let passedTruck = 0;
  const bridge = Array(bridge_length).fill(0);
  let bridgeTruckWeight = 0;
  let i = 0;
  while (passedTruck < n) {
    i++;
    const passed = bridge.shift();
    if (passed > 0) {
      passedTruck++;
      bridgeTruckWeight -= passed;
    }
    if (bridgeTruckWeight + truck_weights[0] <= weight) {
      const truck = truck_weights.shift();
      bridge.push(truck);
      bridgeTruckWeight += truck;
    } else {
      bridge.push(0);
    }
  }
  return i;
}
console.log(solution(2, 10, [7, 4, 5, 6]));
