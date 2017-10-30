$("document").ready(function(){
  // First, get a handle on the element we want to use
  var parId = document.getElementById('content');
  // Want information about this element? Here are some console.log statements that will give you more info
  console.log("This is an element of type: ", content.nodeType);
  console.log("the Inner HTML is" , content.innerHTML);
  console.log("Child nodes: ", content.childNodes.length);

  // Create your new text node
  var myText = document.createTextNode ("It is possible to use jQuery successfully!");

  // Syntax template for replaceChild: node.replaceChild(newnode, oldnode)
  // For this command, we must know how to define the "oldnode". The textnode, oldnode, is actually an array, so we can get the info using console.log for the array index number.
  console.log("Child nodes of paragraph: ", content.childNodes.length);

  // Syntax template for replaceChild: node.replaceChild(newnode, oldnode)
  parId.replaceChild(myText, parId.childNodes[0]);
});
