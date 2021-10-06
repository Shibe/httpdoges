var image = document.querySelector('img');

var pathname = window.location .pathname
var host = window.location .host

var stringified = JSON.stringify(pathname);
var deepCopyPath = JSON.parse(stringified);

var statusCode = deepCopyPath.split('/')
[2]
window.location.replace(`http://localhost:8888/httpdoge/assets/images/${statusCode}.png`);
