// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var results = [];
  function investigateElem(currentElem) { 
  	var currentClasses = currentElem.classList;
  	if (currentClasses) {
  	  for (var i = 0; i < currentClasses.length; i++) {
        if (currentClasses[i] === className) {
      	  results.push(currentElem);
      	  break;
        }
      }
  	}
  	var currentChildren = currentElem.childNodes;
  	if (currentChildren) {
  	  currentChildren.forEach(function(element) {
  	  	investigateElem(element);
  	  });
  	}
  } 
  investigateElem(document.body);
  return results;
};
