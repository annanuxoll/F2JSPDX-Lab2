

var word = 'banana';

console.log( word[ word.length -1 ] );

var array = [ 'b', 'a', 'c', 'd', 'e' ];

function sorting (a, b){
    var astring = a;
    var bstring = b;
	var lastLetterOfA = astring[astring.length-1];
	var lastLetterOfB = bstring[bstring.length-1];
	// return -1 if a is before b
	if ( lastLetterOfA < lastLetterOfB ) return -1;
	// return 0 if a and b are the same
	if ( lastLetterOfA === lastLetterOfB ) return 0;
	// return 1 if a is after b
	if ( lastLetterOfA > lastLetterOfB ) return 1;
}

array.sort( sorting() );

console.log( array );
