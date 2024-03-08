function solution(bridge_length, weight, truck_weights) {
  let n = truck_weights.length;
  let passedTruck = 0;
  const bridge = Array(bridge_length).fill(0);
  let bridgeTruckWeight = 0;
  let bridgeTruckLength = 0;
  let i = 0;
  while (passedTruck < n) {
    i++;
    const passed = bridge.shift();
    if (passed > 0) {
      passedTruck++;
      bridgeTruckWeight -= passed;
      bridgeTruckLength--;
    }
    if (bridgeTruckWeight + truck_weights[0] <= weight && bridgeTruckLength < bridge_length) {
      const truck = truck_weights.shift();
      bridge.push(truck);
      bridgeTruckWeight += truck;
      bridgeTruckLength++;
    } else {
      bridge.push(0);
    }
  }
  return i;
}
