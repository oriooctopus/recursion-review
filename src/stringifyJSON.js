// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null && typeof(obj) === 'object') {
  	return 'null';
  } else if (typeof(obj) === 'undefined') {
  	return 'undefined';
  } else if (Array.isArray(obj)) {
  	var tempResult = [];
    for (var i = 0; i < obj.length; i++) {
      tempResult.push(stringifyJSON(obj[i]));
  	}
  	return '[' + tempResult.join(',') + ']';
  } else if (typeof(obj) === 'object') {
  	var tempStr = '';
  	for (var key in obj) {
  	  if (typeof(key) === 'function' || typeof(obj[key]) === 'function' || typeof(key) === 'undefined' || typeof(obj[key]) === 'undefined') {
  	  	continue;
  	  }
  	  tempStr += ',' + stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
  	}
  	return '{' + tempStr.replace(/,/, '') + '}';
  } else if (typeof(obj) === 'boolean' || typeof(obj) === 'number') {
  	return String(obj);
  } 
  return '"' + obj + '"';
};
