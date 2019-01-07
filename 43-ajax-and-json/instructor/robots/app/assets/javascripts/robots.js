// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

document.addEventListener('DOMContentLoaded', function() {
  const robotPanel = document.querySelector('#robot-details');
  console.log(robotPanel);
  const allRobotLinks = document.querySelectorAll('article.robot a');

  allRobotLinks.forEach((link) => {

    link.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('clicked!');

      axios({
        url: link.href + '.json',
        method: 'GET',
        // responseType: 'json',
      }).then((response) => {
        console.log('It worked!');
        // response.data
        // robotPanel.innerHTML = response.data;
        console.log(response);

        const robotImage = document.createElement('img');
        robotImage.src = `http://robohash.org/${response.data.address}`;

        robotPanel.innerHTML = "";
        robotPanel.append(robotImage);

        const dl = document.createElement('dl');
        robotPanel.append(dl);

        const nameKeyTag = document.createElement('dt');
        nameKeyTag.innerText = 'Name';
        dl.append(nameKeyTag);

        const nameValueTag = document.createElement('dd');
        nameValueTag.innerText = response.data.name;
        dl.append(nameValueTag);

        // console.log(response.data);
      });
    });
  });


  // link.addEventListener('click', function() {
  //
  // });
});
