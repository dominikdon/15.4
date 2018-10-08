'use strict';
(function () {
	function Phone(brand, price, color, system) {
		this.brand = brand;
		this.price = price;
		this.color = color;
		this.system = system;
	}
 
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + ", system is " + this.system + " and the price is " + this.price + ".");
}
  
var iPhoneX = new Phone("Apple", 4000, "white", "iOS 11");
var GalaxyS9 = new Phone("Samsung", 3000, "blue", "Android 8");
var OP6 = new Phone("OnePlus", 2500, "black", "Android 8"); 

iPhoneX.printInfo();
GalaxyS9.printInfo();
OP6.printInfo();
})();
