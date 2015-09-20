
//*********************************************************
// PROBLEM 1: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 Pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

^^ I think this table is wrong if we assume the consumption rate is a function 
of people eaten such that: 

peoplePerHour = 1/hr + total # eaten, which it states on lines 8-10. 

I'm also assuming the blob eats at its new rate of consumption each time. 
Here's the table I'm working from: 


hr |   # eaten TOTAL  |  rate of consumption
0  |        0         |         1/hr
1  |        1         |         2/hr
2  |        3         |         4/hr
3  |        7         |         8/hr
4  |        15        |         16/hr
5  |        31        |         32/hr
6  |        63        |         64/hr
7  |        127       |         128/hr
8  |        255       |         256/hr

Then peoplePerHour is 2^n where n counts the hours. The total number eaten
is 2^n -1 and the hour when the town is eaten is given by solving for n 
in the equation townPop = 2^n -1 . 



 TODO: First, make a constructor function, called Blob, that makes blobs.
       It should internally (in the constructor) set  this.peoplePerHour to 1 
       on initialization and have a function
       eatTown that takes a population size and returns the number of
       hours it takes to eat that town! It should also keep track of the
       peoplePerHour increase due to eating the town.

 TODO: Next, create an instance of Blob named blob.
.
*/

var Blob = function(){
    this.peoplePerHour =  1;
    this.eatTown = function (townPop){
        this.townPop = townPop;
        this.finalHour = Math.log(townPop + 1) / Math.log(2);
        this.finalRate = Math.pow(2, this.finalHour);
        console.log("Hours to consume town: " + this.finalHour);
        console.log("Final consumption rate in people/hour is: " + this.finalRate);
        }
}

// here's a new instance of Blob, called blob
var blob = new Blob();
/*onsole.log(blob.eatTown(1000));*/


var Nowhereville = 0;
var Dowington = 1000;
var Smallsville = 5000;
var Portland = 500000;


// Use the eatTown method and console log result:
// 1) How long for four different blobs to each eat one of the towns

console.log( new Blob().eatTown(Nowhereville) );
// takes 0 hours
console.log( new Blob().eatTown(Dowington) );
// takes 9.97 hours
console.log( new Blob().eatTown(Smallsville) );
// takes 12.29 hours
console.log( new Blob().eatTown(Portland) );
// takes 18.93 hours


// 2) How long for the same blob to sequentially eat all four towns?
// my function isn't set up to run sequentially because I wrote it differently

/*console.log( blob.eatTown(Nowhereville) );
console.log( blob.eatTown(Dowington) );
console.log( blob.eatTown(Smallsville) );
console.log( blob.eatTown(Portland) );*/

console.log(blob.eatTown(Nowhereville + Dowington + Smallsville + Portland));
// this takes 18.95 hours and the final consumption rate is 50,601 people per hour


