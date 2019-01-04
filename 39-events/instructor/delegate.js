document.addEventListener('DOMContentLoaded', function() {
  // Function scope

  let count = 0;
  const colors = ['tomato', 'azure', 'green', 'orange', 'purple', 'chartreuse', 'gold', 'fuschia'];

  const container = document.querySelector('#container');

  container.addEventListener('click', function(event) {
    console.log(event.target);
    
    if(event.target.classList.contains('circle')) {
      event.target.remove();
    }
  });

  const boxMaker = document.querySelector('#box-maker');

  boxMaker.addEventListener('click', function() {
      const x = Math.ceil(Math.random() * 400),
          y = Math.ceil(Math.random() * 200),
          c = Math.ceil(Math.random() * 7);

      const circle = document.createElement('div');

      circle.className = 'circle';

      circle.style.top = y + 'px';
      circle.style.left = x + 'px';
      circle.style.backgroundColor = colors[c];

      circle.innerHTML = count++;

      // circle.addEventListener('click', function(event) {
      //   event.target.remove();
      //   console.log("Circle was clicked and removed");
      // });

      container.append(circle);

      console.log('link was clicked');
  });

  // const circles = document.querySelectorAll('.circle');
  //
  // circles.forEach(function(circle) {
  //   circle.addEventListener('click', function(event) {
  //     event.target.remove();
  //   });
  // });
});
