const autopilot = require('./autopilot.js')

test('can add a car', () => {
  const someCar = {passengers: 0, gas: 100, city: 'Toronto'};
  const anotherCar = {passengers: 0, gas: 100, city: 'Toronto'};
  const cars = [someCar];

  autopilot.add_car(cars, anotherCar);

  expect(cars).toEqual([someCar, anotherCar]);
});

test('new car starts in Toronto with 100 gas and 0 passengers', () => {
  const actual = autopilot.get_new_car();

  const expected = {city: 'Toronto', gas: 100, passengers: 0};
  expect(actual).toEqual(expected);
});

test('picking up passenger increases passenger count by 1', () => {
  const car = {city: 'Toronto', gas: 100, passengers: 1};
  autopilot.pick_up_passenger(car);
  expect(car.passengers).toEqual(2);
});

test('picking up passenger decreases gas by 10', () => {
  const car = {city: 'Toronto', gas: 100, passengers: 1};
  autopilot.pick_up_passenger(car);
  expect(car.gas).toEqual(90);
});

test('pick_up_passenger summarizes what happened', () => {
  const car = {city: 'Toronto', gas: 100, passengers: 1};
  const summary = autopilot.pick_up_passenger(car);
  const expected = 'Picked up passenger. Car now has 2 passengers.';
  expect(summary).toEqual(expected);
});

test('fill up gas sets gas level to 100', () => {
  const car = {city: 'Toronto', gas: 10, passengers: 3};
  autopilot.fill_up_gas(car);
  expect(car.gas).toEqual(100);
});

test('fill up gas returns summary', () => {
  const car = {city: 'Toronto', gas: 10, passengers: 3};
  const summary = autopilot.fill_up_gas(car);
  expect(summary).toEqual('Filled up to 100% on gas from 10%');
});

test('drop_off_passengers returns summary', () => {
  const car = {city: 'Toronto', passengers: 3, gas: 100};
  const summary = autopilot.drop_off_passengers(car);
  expect(summary).toEqual('Dropped off 3 passengers');
});

test('dropping off passengers sets passengers to zero', () => {
  const car = {city: 'Toronto', passengers: 3, gas: 100};
  autopilot.drop_off_passengers(car);
  expect(car.passengers).toEqual(0);
});

test('get_gas_display displays gas level as percentage', () => {
  const display = autopilot.get_gas_display(100);
  expect(display).toEqual('100%');
});

test('Destination for cars in Toronto is Mississauga', () => {
  const car = {gas: 100, passengers: 3, city: 'Toronto'};
  const destination = autopilot.get_destination(car);
  expect(destination).toEqual('Mississauga');
});

test('Destination for cars in Mississauga is London', () => {
  const car = {gas: 100, passengers: 3, city: 'Mississauga'};
  const destination = autopilot.get_destination(car);
  expect(destination).toEqual('London');
});

test('Destination for cars in London is Toronto', () => {
  const car = {gas: 100, passengers: 3, city: 'London'};
  const destination = autopilot.get_destination(car);
  expect(destination).toEqual('Toronto');
});

test('Car without enough gas will not drive', () => {
  const car = {city: 'Toronto', gas: 40, passengers: 3};
  const distance = 50;
  autopilot.drive(car, distance);
  expect(car.city).toEqual('Toronto');
});

test('Car without enough gas fills up gas', () => {
  const car = {city: 'Toronto', gas: 40, passengers: 3};
  const distance = 50;
  autopilot.drive(car, distance);
  expect(car.gas).toEqual(100);
});

test('Car with enough gas and passengers drives to right city', () => {
  const car = {city: 'Toronto', gas: 60, passengers: 3};
  const distance = 50;
  autopilot.drive(car, distance);
  expect(car.city).toEqual('Mississauga');
});

test('Car with enough gas and passengers reduces gas according to distance', () => {
  const car = {city: 'Toronto', gas: 60, passengers: 3};
  const distance = 20;
  autopilot.drive(car, distance);
  expect(car.gas).toEqual(40);
})

test('car with enough gas and passengers drops off passengers', () => {
  const car = {city: 'London', gas: 60, passengers: 3};
  autopilot.act(car);
  expect(car.passengers).toEqual(0);
});

test('drive returns summary', () => {
  const car = {city: 'Toronto', gas: 60, passengers: 3};
  const distance = 50;
  const summary = autopilot.drive(car, distance);
  expect(summary).toEqual('Drove to Mississauga. Remaining gas: 10%.');
});

test('car with less than 20% gas fills up gas', () => {
  const car = {city: 'London', passengers: 3, gas: 10};
  autopilot.act(car);
  expect(car.gas).toEqual(100);
});

test('car with less than 20% gas does not drive', () => {
  const car = {city: 'London', passengers: 3, gas: 10};
  autopilot.act(car);
  expect(car.city).toEqual('London');
});

test('car with less than 20% gas does pick up passengers', () => {
  const car = {city: 'London', passengers: 0, gas: 10};
  autopilot.act(car);
  expect(car.passengers).toEqual(0);
});

test('car with fewer than 3 passengers picks up passenger', () => {
  const car = {city: 'London', passengers: 2, gas: 80};
  autopilot.act(car);
  expect(car.passengers).toEqual(3);
});


test('car with less than 50% gas fills up gas', () => {
  const car = {city: 'London', passengers: 3, gas: 40};
  autopilot.act(car);
  expect(car.gas).toEqual(100);
});

test('act returns summary when driving to new city', () => {
  const car = {city: 'London', passengers: 3, gas: 70};
  const summary = autopilot.act(car);
  expect(summary).toEqual('Drove to Toronto. Remaining gas: 20%. Dropped off 3 passengers');
});
