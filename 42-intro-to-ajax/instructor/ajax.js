window.addEventListener('DOMContentLoaded', function() {
    // --------------------------------------------------
    // PART 1: GET THE MONSTER DATA ONTO THE PAGE
    // --------------------------------------------------
    // [X] GET A REFERENCE TO THE 'GET MONSTERS' BUTTON, STORE IN A VARIABLE
    const getMonstersBtn = document.getElementById('get_monsters');
    // console.log('LOGGING OUT THE BUTTON',  getMonstersBtn);

    // [X] LISTEN FOR CLICKS ON THE BUTTON
    getMonstersBtn.addEventListener('click', function() {
        // console.log('CLICKED THE BUTTON');

        // [X] ON CLICK, MAKE A REQUEST TO GET MONSTERS
        const request = axios.get('https://bitmaker-monsters-api.herokuapp.com/monsters')
            .then(function(response) {
                console.log('INSIDE THE `then()` CALLBACK');
                console.log(response);

                // [X] ON RESPONSE, DISPLAY THE MONSTER DATA
                const dataElem = document.createElement('div');
                dataElem.innerHTML = response.data;
                document.body.appendChild(dataElem);
            });
    });

    // --------------------------------------------------
    // PART 2: POST NEW MONSTER DATA TO THE API
    // --------------------------------------------------
    const postMonsterBtn = document.getElementById('post_monster');

    postMonsterBtn.addEventListener('click', function() {
        axios.post('https://bitmaker-monsters-api.herokuapp.com/monsters.json', {
            monster: {
                name: 'Foo Bar',
                home: 'Toronto, ON',
                creepiness: 42,
            }
        }).then(function(response) {
            console.log('SUCCESSFULLY POSTED THE NEW MONSTER');
            console.log(response);
        });
    });
});
