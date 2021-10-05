let x = {
  name= 'ciccio'
};

let y = new Object();
//y.__proto__ = Object.prototype;
y.name = 'ciccio';

let pt = x.__proto__;
let pt2 = Object.prototype;
console.log(pt == pt2);


console.log(x.name);
console.log(x.boh);
Object.prototype.boh = "mah";
console.log(x.boh);

console.log(x.constructor == Object);

console.log(x.__proto__ == x.constructor.prototype);

function Employee(name, address) {
  this.name = name;
  this.address = address;
  // this.lavora = function() {
  //   console.log("lavoro...");
  // };
}

Employee.prototype.lavora = function(m) {
  console.log("lavoro..." + m);
}

let em = new Employee('pinco', 'via roma');
let em2 = new Employee('pinco', 'via roma');

em.lavora('pippo');
em2.lavora(5);

console.log(em.__proto__ == Employee.prototype);
console.log(em.__proto__.__proto__ == Object.prototype);


function Manager(name, address, level) {
 // let t = new Impiegato(name, address); NO
 //Impiegato(name, address); // NOOOO!
  Impiegato(this, name, address);
  this.level = level;
}

//Manager.prototype = Employee.prototype; NO!!!
let managerProto = new Employee();
managerProto.constructor = Manager;
Manager.prototype = managerProto;

let man = new Manager('alto');
console.log(man.constructor == Manager);
man.lavora();
console.log(man.name);
Manager.prototype.comanda = function() {
  console.log("so'lo Re!");
}

function Executive(bonus, level, name, address) {
  Manager.call(this, level, name, address);
  this.bonus = bonus;
}

makeExtends(Executive, Manager);

function makeExtends(childConstructor, motherConstructor) {
      childConstructor.prototype = new motherConstructor();
      childConstructor.prototype.constructor = Executive;

}

let ex = new Executive(900, 'alto', 'ciccio', 'via roma');







