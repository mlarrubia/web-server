console.log("Client side JS file is loaded")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.getElementById('message-1');
const messageTwo = document.getElementById('message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let location = search.value;

    messageOne.textContent = "Loading..."
    messageTwo.textContent = "";

    // For development i used http://localhost:3000/weather?.... 
    // when pushing to heroku i need to remove because it wont be
    // on local host
    fetch(`/weather?address=${location}`).then((response) => {
        response.json()
            .then((data) => {
                if (data.error) {
                    messageOne.textContent = data.error
                } else {
                    messageOne.textContent = data.location
                    messageTwo.textContent = data.forecast
                }
                // console.log(data.location);
                // console.log(data.forecast);
            })
    })
})