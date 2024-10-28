// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

class Truck extends Vehicle implements AbleToTow{
  // Truck Class Properties
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;

  // Truck Class Constructor, with additional property for towing capacity
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number,
  ) {
      super();
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
      this.wheels = wheels;
      this.towingCapacity = towingCapacity;
      
      // Check for if the wheels exist, if they do not, add new wheels.
    if (wheels.length !== 4) {
      this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
    } else {
      this.wheels = wheels;
    }
  }
  // tow method for towing another vehicle. Takes in a vehicle as a parameter, and checks if it's weight is less than the truck's towing capacity
  // if the weight of the vehicle exeeds the towing capacity, returns a message saing it's too heavy. 
  tow(vehicle: Truck | Motorbike | Car): void {
    const towModel:string = vehicle.model;
    const towMake:string = vehicle.make;
    if(towMake&&towModel) { // Check to make sure method took in an actual vehicle
      console.log(vehicle.weight<this.towingCapacity ? `${towMake} ${towModel} is now being towed`:`${towMake} ${towModel} is too heavy to be towed`);
    } else {
      console.log('Invalid Vehicle!');
    }
  }

    // printDetails override that adds on Truck information
    override printDetails(): void {
      // Call the printDetails method of the parent class, Vehicle
      super.printDetails();
  
      // Print details of the Truck class
      console.log(`VIN: ${this.vin}`);
      console.log(`Color: ${this.color}`);
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Weight: ${this.weight} lbs`);
      console.log(`Top Speed: ${this.topSpeed} mph`);
      console.log(`Towing Capacity: ${this.towingCapacity} lbs`);
  
      // Print details of the wheels
      console.log(
        `Wheel 1: ${this.wheels[0].getDiameter} inch with a ${this.wheels[0].getTireBrand} tire`
      );
      console.log(
        `Wheel 2: ${this.wheels[1].getDiameter} inch with a ${this.wheels[1].getTireBrand} tire`
      );
      console.log(
        `Wheel 3: ${this.wheels[2].getDiameter} inch with a ${this.wheels[2].getTireBrand} tire`
      );
      console.log(
        `Wheel 4: ${this.wheels[3].getDiameter} inch with a ${this.wheels[3].getTireBrand} tire`
      );
    }
}

// Export the Truck class as the default export
export default Truck;
