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
var str = 'QEB NRFZH YOLTK CLU GRJMP LSBO QEB IXWV ALD LC ZXBPXO XKA VLRO RKFNRB PLIRQFLK FP IXEEPOYAXAFJ';

/**
 * For easier calculations if substract the letter value 
 * from A which is the first letter of the alphabet
 * @type {Integer}
 */
var a = 'A'.charCodeAt(0);
/**
 * Letters in English alphabet
 * @type {Number}
 */
var alphabet = 26;

/**
 * Do as many rotations as the letters of the given alphabet 
 */
for (var i = 0; i < alphabet; i++) {
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
	for (var j = 0; j < str.length; j++) {
		/**
		 * Ignore spaces
		 */
		if(str[j] === ' '){
			tmp += ' ';

			/**
			 * Check if word exists in dictionary to set important flag
			 */
			if(dictionary.indexOf(word.toLowerCase()) !== -1){
				important = !important; 
			}
			word = '';
			continue;
		}

		/**
		 * Store the ASCII value of the new substituted character
		 * @type {Integer}
		 */
		var diff = str.charCodeAt(j) + i - a;
		var newChar;

		/**
		 * In case of overflow (above alphabet range) start from begining
		 */
		if(diff >= alphabet ){
			newChar = String.fromCharCode(diff - alphabet + a);
		}
		else{
			newChar = String.fromCharCode(diff + a);
		}
		tmp += newChar;
		word += newChar;
	}
	/**
	 * Log only the lines that contain a word from the dictionary
	 */
	if(important){
		console.log('%d\t%s', i, tmp);
	}	
}