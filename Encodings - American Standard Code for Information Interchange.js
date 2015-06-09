var encoded = [84, 104, 101, 32, 115, 111, 108, 117, 116, 105, 111, 110, 32, 105, 115, 58, 32, 100, 109, 104, 98, 105, 101, 102, 103, 97, 104, 110, 114];
var decoded = '';

encoded.forEach(function(el){
	decoded += String.fromCharCode(el);
});

console.log(decoded);