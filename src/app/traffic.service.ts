import { Injectable } from '@angular/core';
import { noop } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrafficService {
private listOfTrafficViolationVehicle = [];
private vehicleList: Array<Vehicle> = [
  {
    no: 1453534,
    owner: "mahantesh",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "Red",
    make: "Maruthi",
    model: 2010
  }, {
    no: 2343245435,
    owner: "sampath",
    city: "Hubli",
    dateOfPurchase: "12-10-12",
    color: "Red",
    make: "Maruthi",
    model: 2010
  }, {
    no: 4534556,
    owner: "Abhi",
    city: "Karwar",
    dateOfPurchase: "12-10-12",
    color: "Red",
    make: "Maruthi",
    model: 2010
  }, {
    no: 785645,
    owner: "Aaksh",
    city: "gadag",
    dateOfPurchase: "12-10-12",
    color: "Blue",
    make: "Maruthi",
    model: 2010
  }, {
    no: 456534,
    owner: "Lakshmi",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "Silver",
    make: "Mahindra",
    model: 2010
  }, {
    no: 678324,
    owner: "Manju",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "Red",
    make: "Maruthi",
    model: 2017
  }, {
    no: 78123,
    owner: "Amith",
    city: "Mysore",
    dateOfPurchase: "12-10-2121",
    color: "Green",
    make: "Maruthi",
    model: 2021
  }, {
    no: 456234,
    owner: "Karan",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "Red",
    make: "BMW",
    model: 2010
  }, {
    no: 2341,
    owner: "Arav",
    city: "Bengaluru",
    dateOfPurchase: "12-10-2112",
    color: "Red",
    make: "Benz",
    model: 2010
  }, {
    no: 9534,
    owner: "raman",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "orange",
    make: "Tata",
    model: 2010
  }, {
    no: 673423,
    owner: "Khush",
    city: "Vijaypur",
    dateOfPurchase: "12-10-12",
    color: "white",
    make: "suzuki",
    model: 2010
  }, {
    no: 98008,
    owner: "ravitej",
    city: "Harihar",
    dateOfPurchase: "12-10-10",
    color: "Red",
    make: "Maruthi",
    model: 2010
  }, {
    no: 234123,
    owner: "Amir",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "black",
    make: "kia",
    model: 2010
  }, {
    no: 16428,
    owner: "khan",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "Red",
    make: "Maruthi",
    model: 2010
  }, {
    no: 4321111,
    owner: "rambal",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "Red",
    make: "Maruthi",
    model: 2010
  }, {
    no: 13332211,
    owner: "ramesh",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "Red",
    make: "Maruthi",
    model: 2010
  }, {
    no: 13333112244,
    owner: "aayush",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "Red",
    make: "Maruthi",
    model: 2010
  }, {
    no: 1212121,
    owner: "ravi",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "Red",
    make: "Maruthi",
    model: 2010
  }, {
    no: 4343451,
    owner: "feb",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "Red",
    make: "Maruthi",
    model: 2010
  }, {
    no: 15645,
    owner: "ram",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "Red",
    make: "Maruthi",
    model: 2012
  },{
    no: 17654,
    owner: "raj",
    city: "Bengaluru",
    dateOfPurchase: "12-10-12",
    color: "Red",
    make: "Maruthi",
    model: 2011
  }
];

private headers = [
      {
        name: "Number",
        key: "no"
      }, {
        name: "Owner Name",
        key: "owner",
        pipes: {
          isUpper: true
        }
      }, {
        name: "City",
        key: "city"
      }, {
        name: "Date Of Purchase",
        key: "dateOfPurchase"
      }, {
        name: "Color",
        key: "color"
      }, {
        name: "Make",
        key: "make"
      }, {
        name: "Model",
        key: "model"
      }, {
        name: "Action",
        key: "action",
        pipes: {
          action: 'button',
          type: 'mark-violation',
          name: 'Mark For Violation'
        }
      }

  ]

private violationHeaders = [
      {
        name: "Number",
        key: "no"
      }, {
        name: "Violation Type",
        key: "type"
      }, {
        name: "Fine Amount",
        key: "fine"
      }, {
        name: "Violation Date",
        key: "date"
      }, {
        name: "Action",
        key: "action",
        pipes: {
          action: 'button',
          name: 'Mark As Paid'
        }
      }
  ]
  constructor() { }
  getVehicles(type) {
    return type == "violation" ? this.getViolationDetails() : this.vehicleList;
  }

  getHeaders(type) {
    return type == "violation" ? this.violationHeaders : this.headers;
  }

  markAsViolation(data) {
    let dateObj = new Date();
    let date = `${dateObj.getDate()}-${(dateObj.getMonth()+1)}-${dateObj.getFullYear()} ${dateObj.getHours()}:${dateObj.getMinutes()}m`;
    let vilationData = {
      no: data.no,
      type: "Signal Jump",
      fine: 200,
      date: date
    }
    this.listOfTrafficViolationVehicle.push(vilationData);
  }

  getViolationDetails() {
    return this.listOfTrafficViolationVehicle;
  }

  getVehicleDetailsOnSearch(type, no) {
    return this.filterList(no, this.getVehicles(type));
  }

  private filterList(input:any, list) {
    let reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
    return list.filter((lst) => lst.no == input);  
  }

  finePaid(index) {
    this.listOfTrafficViolationVehicle.splice(index, 1);
  }
}

interface Vehicle {
  no:Number,
  owner: String,
  city: String,
  dateOfPurchase: String,
  color: String,
  make: String,
  model: Number
}
