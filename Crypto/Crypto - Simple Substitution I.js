/**
 * words is a standard file on all Unix and Unix-like operating systems, 
 * and is simply a newline-delimited list of dictionary words
 * @type {[String]}
 */
var dictionary = require('fs').readFileSync('/usr/share/dict/words', 'utf-8').split('\n');

/**
 * Order Of Frequency Of Single Letters: E T A O I N S H R D L U
 * Order Of Frequency Of Digraphs: th er on an re he in ed nd ha at en es of or nt ea ti to it st io le is ou ar as de rt ve
 * Order Of Frequency Of Trigraphs: the and tha ent ion tio for nde has nce edt tis oft sth men
 * Order Of Frequency Of Most Common Doubles: ss ee tt ff ll mm oo
 * Order Of Frequency Of Initial Letters: T O A W B C D S F M R H I Y E G L N P U J K
 * Order Of Frequency Of Final Letters: E S T D N R Y F L O G H A K M P U W
 * One-Letter Words: a, I
 * Most Frequent Two-Letter Words: of, to, in, it, is, be, as, at, so, we, he, by, or, on, do, if, me, my, up, an, go, no, us, am
 * Most Frequent Three-Letter Words: the, and, for, are, but, not, you, all, any, can, had, her, was, one, our, out, day, get, has, him, his, how, man, new, now, old, see, two, way, who, boy, did, its, let, put, say, she, too, use
 * Most Frequent Four-Letter words: that, with, have, this, will, your, from, they, know, want, been, good, much, some, time
 */
var str = 'VM ROT WPZXCORM CDU MDG LWA ETWU ROXB ZM JEXTAU X WZ XZSETBBTU ITEM QTPP UDAT MDGE BDPGRXDA FTM XB DECEBLZEZLAP ROXB PXRRPT LOWPPTACT QWB ADR RDD OWEU QWB XR';
console.log(str);

/**
 * Wiki Sample on Simple Substitution
 */
// var line = 'flee at once we are discovered';
// var key = 'zebras';

// var a = 'a'.charCodeAt(0);

// var ciphertext = key;
// for (var i = 0; i < 26; i++) {
// 	var toAdd = String.fromCharCode(i+a);
// 	if(ciphertext.indexOf(toAdd) === -1){
// 		ciphertext+=toAdd;
// 	}
// }
// console.log('Ciphertext:\t%s',ciphertext);

// var encoded = '';
// for (var i = 0; i < line.length; i++) {
// 	if(line[i] === ' '){
// 		encoded+=' ';
// 		continue;
// 	}
// 	encoded += ciphertext[line.charCodeAt(i)-a];
// }
// console.log('Encoded:\t%s',encoded);

// var decoded = '';
// for (var i = 0; i < encoded.length; i++) {
// 	if(encoded[i] === ' '){
// 		decoded+=' ';
// 		continue;
// 	}
// 	decoded += String.fromCharCode(ciphertext.indexOf(encoded[i])+a);
// }
// console.log('Decoded:\t%s',decoded);