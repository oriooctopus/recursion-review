// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;
// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // if array
    // call on each child (per comma)
  // if object
    // call on each obj and key (per comma)

  // if string
    // return it, include quotes
  // if isInteger
    // return the number version
  // else it is an edge

  if (json[0] === '[') {
    var result = [];
    json = json.slice(1, json.length - 1);
    for (var i = 0; i < json.length; i++) {
      
    }
  }



  /*if (json[0] === '{') {

  } else if (json[0] === '[') {
    var result = [];

    var temp = '';
    json.slice(0, json.length);
    var endingIndex = json.indexOf(']');
    return parseJSON(j)
  	for (var i = 0; i < json.length; i++) {
      if (temp.trim() === 'null') {
        result.push(null);
        temp = '';
      } else if (temp.trim() === 'undefined') {
        result.push(undefined);
        temp = '';
      } else if (temp.trim() === 'true') {
        result.push(true);
        temp = '';
      } else if (temp.trim() === 'false') {
        result.push(false);
        temp = '';
      } else if ( (temp.match(/"/g) || []).length === 2 || (temp.match(/'/g) || []).length ) {
        result.push(temp);
        temp = '';
      } else {
        temp += json[i];
      }
    }
    console.log(result, '!!!');
    return result;
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
  }*/ 
};




//console.dir(parseJSON('[]'));
