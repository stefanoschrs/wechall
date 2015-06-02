/**
 * words is a standard file on all Unix and Unix-like operating systems, 
 * and is simply a newline-delimited list of dictionary words
 * @type {[String]}
 */
var dictionary = require('fs').readFileSync('/usr/share/dict/words', 'utf-8').split('\n');

/**
 * Given Line to decode
 * @type {String}
 */
var str = '19 41 41 36 20 3C 41 34 7E 20 4B 41 47 20 45 41 3E 48 37 36 20 41 40 37 20 3F 41 44 37 20 35 3A 33 3E 3E 37 40 39 37 20 3B 40 20 4B 41 47 44 20 3C 41 47 44 40 37 4B 00 20 26 3A 3B 45 20 41 40 37 20 49 33 45 20 38 33 3B 44 3E 4B 20 37 33 45 4B 20 46 41 20 35 44 33 35 3D 00 20 29 33 45 40 79 46 20 3B 46 11 20 03 04 0A 20 3D 37 4B 45 20 3B 45 20 33 20 43 47 3B 46 37 20 45 3F 33 3E 3E 20 3D 37 4B 45 42 33 35 37 7E 20 45 41 20 3B 46 20 45 3A 41 47 3E 36 40 79 46 20 3A 33 48 37 20 46 33 3D 37 40 20 4B 41 47 20 46 41 41 20 3E 41 40 39 20 46 41 20 36 37 35 44 4B 42 46 20 46 3A 3B 45 20 3F 37 45 45 33 39 37 00 20 29 37 3E 3E 20 36 41 40 37 7E 20 4B 41 47 44 20 45 41 3E 47 46 3B 41 40 20 3B 45 20 45 41 38 40 3F 36 3A 3E 40 3B 45 42 00';
var array = str.split(' ');

/**
 * ASCII Keyspace
 * @type {Number}
 */
var keyspace = 128;

/**
 * Convert Hex char to ASCII
 * @param  {String} Hex value
 * @return {String} Converted Value
 */
var hex2ascii = function(hex) {
    var tempstr = '';
    for (var b = 0; b < hex.length; b = b + 2) {
        tempstr = tempstr + String.fromCharCode(parseInt(hex.substr(b, 2), 16));
    }
    return tempstr;
};


/**
 * Do as many rotations as the letters of the given keyspace 
 */
for (var i = 0; i < keyspace; i++) {
	/**
	 * Store the substituted line in a temporary variable
	 * @type {String}
	 */
	var tmp = '';
	/**
	 * Temporary store words to check with dictionary
	 * @type {String}
	 */
	var word = '';
	var important = false;
	array.forEach(function(el){
		/**
		 * Ignore spaces Hex 20 = (space)
		 */
		if(el === '20'){
			tmp+=' ';

			/**
			 * Check if word exists in dictionary to set important flag
			 */
			if(dictionary.indexOf(word.toLowerCase()) !== -1){
				important = !important; 
			}
			word = '';
			return;
		}

		/**
		 * Store the ASCII value of the new substituted character
		 * @type {Integer}
		 */
		var diff = hex2ascii(el).charCodeAt(0) + i;
		var newChar;

		/**
		 * In case of overflow (above keyspace range) start from begining
		 */
		if(diff >= keyspace){
			newChar = String.fromCharCode(diff - keyspace);
		}
		else{
			newChar = String.fromCharCode(diff);
		}
		tmp += newChar;
		word += newChar;
	});

	/**
	 * Log only the lines that contain a word from the dictionary
	 */
	if(important){
		console.log('%d\t%s', i, tmp);
	}	
}