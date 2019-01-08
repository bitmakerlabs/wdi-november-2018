function getNewCar() {
  return {city: 'Toronto', passengers: 0, gas: 100};
}

function drive(car, distance) {
  if(car.gas < distance) {
    return fillUpGas(car);
  }

  car.city = getDestination(car);
  car.gas -= distance;
  return `Drove to ${car.city}. Remaining gas: ${getGasDisplay(car.gas)}.`;
}

function getDestination(car) {
  if(car.city == 'Toronto') {
    return 'Mississauga';
  } else if (car.city == 'Mississauga') {
    return 'London';
  } else if (car.city == 'London') {
    return 'Toronto';
  }
}

function dropOffPassengers(car) {
  const previousPassengers = car.passengers;
  car.passengers = 0;
  return `Dropped off ${previousPassengers} passengers`;
}

function addCar(cars, newCar) {
  cars.push(newCar);
  return `Adding new car to fleet.  Fleet size is now ${cars.length}`;
}

function getGasDisplay(gasAmount) {
  return `${gasAmount}%`;
}

function fillUpGas(car) {
  const oldGas = car.gas;
  car.gas = 100;
  return `Filled up to ${getGasDisplay(car.gas)} on gas from ${getGasDisplay(oldGas)}`;
}
function pickUpPassenger(car){
  car.passengers++;
  car.gas -= 10;
  return `Picked up passenger. Car now has ${car.passengers} passengers.`;
}

function act(car) {
  const distanceBetweenCities = 50;

  if (car.gas < 20) {
    return fillUpGas(car);
  } else if (car.passengers < 3 ) {
    return pickUpPassenger(car);
  } else {
    if (car.gas < distanceBetweenCities) {
      return fillUpGas(car);
    }
    const droveTo = drive(car, distanceBetweenCities);
    const passengersDropped = dropOffPassengers(car);
    return `${droveTo} ${passengersDropped}`;
  }
  return newCar;
}

function commandFleet(cars) {
  for(let i = 0; i < cars.length; i++) {
    const car = cars[i];
    const action = act(car);
    console.log(`Car ${i + 1}: ${action}`);
  }
  console.log("----");
}

function addOneCarPerDay(cars, numDays){
  for(let i = 0; i < numDays; i++) {
    let newCar = getNewCar();
    console.log(addCar(cars, newCar));
    commandFleet(cars);
  }
}

//let cars = []
//addOneCarPerDay(cars, 10);

module.exports = {
  addCar,
  dropOffPassengers,
  pickUpPassenger,
  fillUpGas,
  getNewCar,
  getGasDisplay,
  getDestination,
  act,
  drive,
}
