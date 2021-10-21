// get the element
let app = document.getElementById('app');
let url = 'http://localhost:3000'
let embeddedURL = 'http://localhost:5005/embedded/link/23578ca6-3b08-56a4-2e33-88886a8a85ad?internalVisualTest=true&cb=5477'

// axios request to get the ejs template
axios.get(embeddedURL)
    .then(({ data }) => {
        app.insertAdjacentHTML('beforeend', data)
    })
    .then(() => {
        let jsScript = document.createElement('script');
        jsScript.type = "text/javascript"
        jsScript.src = "http://localhost:5005/ssr.js"
        app.appendChild(jsScript);
    })
