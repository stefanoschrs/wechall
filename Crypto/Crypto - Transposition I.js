/**
 * Given Line to decode
 * @type {String}
 */
var str = 'oWdnreuf.lY uoc nar ae dht eemssga eaw yebttrew eh nht eelttre sra enic roertco drre . Ihtni koy uowlu dilekt  oes eoyrup sawsro don:wf ncroblhebc.e';

/**
 * By taking a good look at the first part 'oWdnreuf.lY'
 * it's easy to see the pattern that makes Wonderful out of it
 * so we loop over all the characters of the line jumping 2 
 * each time and we write i and i+1 in reverse order
 * @type {String}
 */
var tmp = '';
for (var i = 0; i < str.length-1; i+=2) {
	tmp+=str[i+1]+str[i];
};
console.log(tmp);