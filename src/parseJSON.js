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
    console.log(json);
    while (json.length > 0) {
      console.log(json, result);
      if (json[0] === '[') {
        var closedCounter = 1;
        var i;
        for (i = 1; i < json.length; i++) {
          if (json[i] === '[') {
            closedCounter++;
          } else if (json[i] === ']') {
            closedCounter--;
          }
          if (!closedCounter) {
            break;
          }
        }
        result.push(parseJSON(json.slice(1, i)));
        json = json.slice(i + 1);
      } else if (json[0] === '{') {

      } else if (json[0] === '"') {
        var endIndex = json.slice(1).indexOf('"');
        result.push(parseJSON(json.slice(1, endIndex)));
        json = json.slice(endIndex + 2); // should be plus 1, but accounts for slicing at 1 on line 24
      } else if (json[0] === "'") {
        var endIndex = json.slice(1).indexOf("'");
        result.push(parseJSON(json.slice(1, endIndex)));
        json = json.slice(endIndex + 2); // should be plus 1, but accounts for slicing at 1 on line 24
      } else {
        var endIndex = json.indexOf(',');
        result.push(parseJSON(json.slice(0, endIndex)));
        json = json.slice(endIndex + 1);
      }
    }
    return result;
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
