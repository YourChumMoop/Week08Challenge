// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

class Motorbike extends Vehicle{
  // properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  constructor(
      vin: string,
      color: string,
      make: string,
      model: string,
      year: number,
      weight: number,
      topSpeed: number,
      wheels: Wheel[]
  ) {
    super();


    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    if (wheels.length !== 2) {
      this.wheels = [new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }

  Wheelie():void{
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    super.printDetails();

    // Print details of the Car class
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} lbs`);
    console.log(`Top Speed: ${this.topSpeed} mph`);

    // Print details of the wheels
    console.log(
      `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
    );
    console.log(
      `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
    );
  }
}

// Export the Motorbike class as the default export
export default Motorbike;