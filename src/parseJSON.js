// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  if (json[0] === '{') {

  } else if (json[0] === '[') {
  	var temp = '';
  	for (var i = 1; i < )
  } else if (json[0] === "'") {
  	var temp = "";
  	var counter = 1;
  	while (counter < json.length && json[counter] !== "'") {
  	  temp += parseJSON(json[counter]);
  	}
  	return temp;
  } else if (json[0] === '"') {
  	var temp = "";
  	var counter = 1;
  	while (counter < json.length && json[counter] !== "'") {
  	  temp += parseJSON(json[counter]);
  	}
  	return temp;
  } else {
  	return json;
  } 
};
