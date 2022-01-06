/*Electricity
Class: Electrical appliances
- Lamp 
- Washing machine
- Air-con

Operation:
	Turn on how many hrs
	How many Ws each hrs

Class: Billing
Report - How many Ws I spend each month 
*/


function Billing (_account_number, _ownername, _address){
	this.account = _account_number;
	this.owner = _ownername;
	this.address = _address;
	this.appliances = {};
	this.appliancesCount = 0;

	this.addAppliances = function (_appliances) {
    	this.appliances[_appliances.app_name] = _appliances;
   	 	this.appliancesCount++;
  
  	}

  	this.getMonthlyWattusage = function (){
  		var total = 0;
  		for (var app_name in this.appliances){
  			total += this.appliances[app_name].monthly_watt_usage;
  		}
  		return total;
  	}

  	this.getReport = function (){
		var total = 0;
    	for (var app_name in this.appliances) {
      		total += this.appliances[app_name].monthly_expense;
    	}
   		return total;
   	}

   	this.printReport = function (){
   		console.log (this.owner + "'s monthly usage of Watt is " + this.getMonthlyWattusage() + ". " + this.owner + "'s monthly electricity expense on home appliances is $"+ this.getReport() + "."  );
   	}

   	this.printBill = function (){
   		console.log ("Account number: " + _account_number + ". Address: " + _address + ". " + this.owner + "'s monthly usage of Watt is " + this.getMonthlyWattusage() + ". " + this.owner + "'s monthly electricity expense on home appliances is $"+ this.getReport() + "."  );
   	}
	
}

/*Method/function- Inheritant by using "Class" */ 
class HomeAppliances {
	constructor (_app_name, _serial_number, _brand, _w_per_hr){
		this.app_name = _app_name;
		this.id = _serial_number;
		this.brand = _brand;
		this.w_per_hr = _w_per_hr;
		this.cost_per_w = 3;
		
	}

	operation (_opera_hrs){
		this.opera_hrs = _opera_hrs;
		this.monthly_watt_usage = this.w_per_hr*_opera_hrs;
		this.monthly_expense = this.monthly_watt_usage*this.cost_per_w;
		return `${this.app_name} operated ${this.opera_hrs} hours this month. Serial Number: ${this.id} Brand: ${this.brand} Watt usage per hour: ${this.w_per_hr}`;

	}


}


class lamp extends HomeAppliances {
	constructor (_app_name, _serial_number, _brand, _w_per_hr){
		super(_app_name, _serial_number, _brand, _w_per_hr);
	}

}

class airCon extends HomeAppliances {
	constructor (_app_name, _serial_number, _brand, _w_per_hr){
		super(_app_name, _serial_number, _brand, _w_per_hr);
	}

}

class washing_machine extends HomeAppliances {
	constructor (_app_name, _serial_number, _brand, _w_per_hr){
		super(_app_name, _serial_number, _brand, _w_per_hr);
	}

}

var ayer_home = new Billing ("001-6277277", "Ayer Cheung", "Street A")
const alamp = new lamp ("A Lamp", "13579", "Sony", 0.5);
const bCon = new airCon("A airCon", "246810", "Meti", 1);
const cWash = new washing_machine ("A W machine", "54321", "Samsung", 2);

ayer_home.addAppliances(alamp);
ayer_home.addAppliances(bCon);
ayer_home.addAppliances(cWash);

console.log (ayer_home.appliances)

console.log (JSON.stringify(alamp.operation(10)));
console.log (JSON.stringify(bCon.operation(5)));
console.log (JSON.stringify(cWash.operation(3)));

ayer_home.printBill();

var basic_home = new Billing ("002-246879", "Basic Law", "Street B")
const aalamp = new lamp ("B Lamp", "333888", "Muji", 3);
const bbCon = new airCon("B airCon", "444555", "Hitachi", 2);
const ccWash = new washing_machine ("B W machine", "666777", "LG", 4);

basic_home.addAppliances(aalamp);
basic_home.addAppliances(bbCon);
basic_home.addAppliances(ccWash);

console.log (basic_home.appliances)

console.log (JSON.stringify(aalamp.operation(20)));
console.log (JSON.stringify(bbCon.operation(50)));
console.log (JSON.stringify(ccWash.operation(30)));

basic_home.printBill();

