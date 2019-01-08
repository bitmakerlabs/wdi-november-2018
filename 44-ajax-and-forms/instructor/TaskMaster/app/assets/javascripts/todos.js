// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application

document.addEventListener('DOMContentLoaded',function(){
    axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const myForm = document.querySelector('#new_todo');

myForm.addEventListener('submit', function(e){
    e.preventDefault();
    console.log("I m in the event submit");
    const formData = new FormData(myForm);
    axios({
        method: myForm.getAttribute('method'),
        url: myForm.getAttribute('action'),
        data: formData,
        headers:{
            'Content-Type': 'application/html',
            'Accept': 'text/html'
        }
       // responseType: 'JSON'
    }).then(function(response){

        console.log("Success"+response.data);
        document.querySelector('#todo_content').value = '';
        const myList = document.querySelector('#myList');

        // const newItem = document.createElement('li');
        // newItem.innerText = response.data.content;
       myList.insertAdjacentHTML('beforeend', response.data);
      // myList.appendChild(response.data);
    });

})
});