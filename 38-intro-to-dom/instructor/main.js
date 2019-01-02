document.addEventListener('DOMContentLoaded', function(e){
  // CODE GOES HERE
  var h1 = document.querySelector('h1');
  h1.innerText = "I'm in a file";

  var ul = document.querySelector('ul');
  var li;
  for (var i = 0; i < 10000; i++) {
    li = document.createElement('li');
    li.innerText = "Some text";
    li.className = "item";
    ul.appendChild(li);
  }
})
