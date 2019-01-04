// Ensures all our DOM Content (aka HTML Elements are loaded first)
document.addEventListener('DOMContentLoaded', function() {

  // Let's add our first event handlers to this simple document
  // 1. Select the `click-bait` element
  const clickBait = document.getElementById('click-bait');

  // 2. Add an event listener to clickBait and ...
  //    implement the callback with an anonymous function
  clickBait.addEventListener('click', function(event) {
    alert("Click bait was clicked!!");
    console.log(event);

    // We can prevent default behaviour of a link:
    // (redirecting to another part of the web, by calling the `preventDefault` function on the `event` object)
    event.preventDefault();
  });

  // 3. Select the `second-level` element
  const secondLevel = document.getElementById('second-level');

  // 4. Add an event listener to secondLevel and ...
  //    implement the callback with a function declation

  secondLevel.addEventListener('click', secondLevelClickHandler);

  function secondLevelClickHandler(event) {
    alert("Second Level was clicked!!");
    event.stopPropagation();
  }

  // 5. Select the `first-level` element
  const firstLevel = document.getElementById('first-level');

  // 6. Add an event listener to the firstLevel and ...
  //    implement the callback with a function definition
  const firstLevelClickHandler = function(event) {
    alert("First Level was clicked!!");
  };

  firstLevel.addEventListener('click', firstLevelClickHandler);




  // 7. Check out the `event` object:
  // => Google MDN addEventListener
  // => https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

  // QQ: Our default behaviour of the link routes us to Google, can we stop the default behaviour?
  // (Check out preventDefault)

  // QQ: What default behavrious will you want to prevent typically? There are mainly 2:
  // (1: links ... 2. _ _ _ _? (rhymes with torms lol) )

  // QQ: Can we stop the event from bubbling up the DOM?
  // => https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation

  // QQ: Does order of including our JavaScript matter?
  // DOMContentLoaded => https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
});
