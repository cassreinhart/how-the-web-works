//HTTP is Hypertext Transfer Protocol; a way for browsers and servers to communicate
//URL is a "hostname" for a web page that will help locate a specific IP address
//DNS or Domain Name Server is translating the URL/hostname to the IP address
//A query string is part of the URL which contains additional information/arguments for the webpage
//GET and POST; GET will request information from a server, while POST will alter the db/server
//an HTTP request occurs when you point your browser to a webpage, basically when you want to access a new page/alter the page you have to make an HTTP request.
//HTTP responses are what you get back from your request (either a successfully loaded page, 404 error message) along with information about cookies/caching,etc.
//HTTP headers contain request info like language, cookies, date/time, content/hostname, etc.
//request header ex: Accept-Language, Host
//response header ex: Content-Type, Date
//make an HTTP request for the IP address to access the content/webpage usint port 80, ask for some/page.html, no query string is passed along.


//code to search icanhazdadjoke.com
const form = document.querySelector('form');
const jokes = 'https://icanhazdadjoke.com/search';
const queryBox = document.querySelector("#query");

form.addEventListener('submit', function(e){
    e.preventDefault();
    const url = jokes + '?term=' + queryBox.value;
    const win = window.open(url, '_blank');
    win.focus();
})