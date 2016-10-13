var fs = require('fs');
function* gen(array){
	for (var i = 0;i<array.length;i++){
		yield array[i];
	}
	return null;
}
for (var i of gen([1,2,3])){
	console.log(i)
}