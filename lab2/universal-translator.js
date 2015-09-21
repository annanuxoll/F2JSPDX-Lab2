
//*********************************************************
// PROBLEM 2: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing ( homePlanet, language ) {
  this.homePlanet = homePlanet;
  this.language = language;
}

// sb is a SentientBeing object
SentientBeing.prototype.sayHello = function (sb) {
    console.log( hello[ this.language ] );
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
    return hello[ sb.language ];
}

/* this is the start of Human subclass */
function Human () {
  SentientBeing.call( this, 'earth', 'federation standard' );
}
Human.prototype = Object.create( SentientBeing.prototype );
Human.prototype.constructor = Human;
/* this is the end of Human subclass */



// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

/*Klingon subclass */
function Klingon () {
  SentientBeing.call( this, 'Qo"noS', 'klingon' );
}
Klingon.prototype = Object.create( SentientBeing.prototype );
Klingon.prototype.constructor = Klingon;

/*Romulan subclass*/
function Romulan () {
  SentientBeing.call( this, 'Romulus', 'romulan');
}
Romulan.prototype = Object.create( SentientBeing.prototype );
Romulan.prototype.constructor = Romulan;

//make a human, a klingon, and a romulan
var human = new Human();
var klingon = new Klingon();
var romulan = new Romulan();

//Assertions

assert( human.sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");

assert( human.sayHello(new Romulan()) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");

assert( klingon.sayHello(new Human()) === "hello",
  "the human should hear hello");

assert( klingon.sayHello(new Romulan()) === "Jolan\"tru",
  "the romulan should hear Jolan\"tru");

assert( romulan.sayHello(new Human()) === "hello",
  "the human should hear hello");

assert( romulan.sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");


/* helper method for assertions */

// We're going to use this special assert method again to
// test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}
