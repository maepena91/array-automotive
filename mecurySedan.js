import Vehicle from "./vehicleBaseClass"

class Car extends Vehicle{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
        this.maxiPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
        this.mileage = mileage;
     }
}
start()
    if (this.fuel > 0){
        console.log("start engine")
    } else{
        return this.started = false;
        console.log("no fuel");}


loadPassenger(num)
        if (this.passenger < this.maximumPassengers){
            if ((num + this.passenger) <= this.maxPassengers){
                this.passenger = num;
                return this.passenger;
            }else{
                console.log("the ${this.model} no room for yall");
            }
        }else{

            console.log("${this model} we are full");
            }


scheduleService(mileage)
 if (this.mileage > 3000)
{
this.scheduleService == true
return this.scheduleService;
}
