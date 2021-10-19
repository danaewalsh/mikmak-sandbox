// get the element
let app = document.getElementById('app');

// axios request to get the ejs template
axios.get('http://localhost:3000')
    .then(({ data }) => {
        app.innerHTML = data;
    })