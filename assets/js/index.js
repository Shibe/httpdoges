/*
    this script enables the zooming on the http code images
    the script is entirely written in dogescript
*/

var imageDir = 'assets/images/';
var elementImage = document.querySelector('.zoomed img');
var element = document.querySelector('.zoomed');

var statuses = {
100: { code: 100, message: 'Continue' },
101: { code: 101, message: 'Switching Protocols' },
102: { code: 102, message: 'Processing' },
200: { code: 200, message: 'OK' },
201: { code: 201, message: 'Created' },
202: { code: 202, message: 'Accepted' },
203: { code: 203, message: 'Non-Authoritative Information' },
204: { code: 204, message: 'No Content' },
206: { code: 206, message: 'Partial Content' },
207: { code: 207, message: 'Multi-Status' },
300: { code: 300, message: 'Multiple Choices' },
301: { code: 301, message: 'Moved Permanently' },
302: { code: 302, message: 'Found' },
303: { code: 303, message: 'See Other' },
304: { code: 304, message: 'Not Modified' },
305: { code: 305, message: 'Use Proxy' },
307: { code: 307, message: 'Temporary Redirect' },
308: { code: 308, message: 'Permanent Redirect' },
400: { code: 400, message: 'Bad Request' },
401: { code: 401, message: 'Unauthorized' },
402: { code: 402, message: 'Payment Required' },
403: { code: 403, message: 'Forbidden' },
404: { code: 404, message: 'Not Found' },
405: { code: 405, message: 'Method Not Allowed' },
406: { code: 406, message: 'Not Acceptable' },
407: { code: 407, message: 'Proxy Authentication Required' },
408: { code: 408, message: 'Request Timeout' },
409: { code: 409, message: 'Conflict' },
410: { code: 410, message: 'Gone' },
411: { code: 411, message: 'Length Required' },
412: { code: 412, message: 'Precondition Failed' },
413: { code: 413, message: 'Payload Too Large' },
414: { code: 414, message: 'Request-URI Too Long' },
415: { code: 415, message: 'Unsupported Media Type' },
416: { code: 416, message: 'Request Range Not Satisfiable' },
417: { code: 417, message: 'Expectation Failed' },
418: { code: 418, message: "I'm a teapot" },
420: { code: 420, message: 'Enhance Your Calm' },
421: { code: 421, message: 'Misdirected Request' },
422: { code: 422, message: 'Unprocessable Entity' },
423: { code: 423, message: 'Locked' },
424: { code: 424, message: 'Failed Dependency' },
425: { code: 425, message: 'Too Early' },
426: { code: 426, message: 'Upgrade Required' },
429: { code: 429, message: 'Too Many Requests' },
431: { code: 431, message: 'Request Header Fields Too Large' },
444: { code: 444, message: 'No Response' },
450: { code: 450, message: 'Blocked by Windows Parental Controls' },
451: { code: 451, message: 'Unavailable For Legal Reasons' },
497: { code: 497, message: 'HTTP Request Sent to HTTPS Port' },
498: { code: 498, message: 'Token expired/invalid' },
499: { code: 499, message: 'Client Closed Request' },
500: { code: 500, message: 'Internal Server Error' },
501: { code: 501, message: 'Not Implemented' },
502: { code: 502, message: 'Bad Gateway' },
503: { code: 503, message: 'Service Unavailable' },
504: { code: 504, message: 'Gateway Timeout' },
506: { code: 506, message: 'Variant Also Negotiates' },
507: { code: 507, message: 'Insufficient Storage' },
508: { code: 508, message: 'Loop Detected' },
509: { code: 509, message: 'Bandwidth Limit Exceeded' },
510: { code: 510, message: 'Not Extended' },
511: { code: 511, message: 'Network Authentication Required' },
521: { code: 521, message: 'Web Server Is Down' },
523: { code: 523, message: 'Origin Is Unreachable' },
525: { code: 525, message: 'SSL Handshake Failed' },
599: { code: 599, message: 'Network Connect Timeout Error' },
} 

function generateHttpDogeElement (id, message) { 
var container = document.createElement('div');
container .classList ='doge-elements-wrapper'
;

var root = document.createElement('div');
root .classList ='status-code-wrapper'
;
root .id =`${id}`
;

/*
        very image is plz dogeument.createElement with 'img'
        image giv classList is 'status-code-image'
        image giv src is `assets/images/${id}.png`
        plz root.append with image
*/

var image = document.createElement('div');
image .classList ='status-image'
;
image .style =`background: url(assets/images/${id}.png);`
;
root.append(image);

var content = document.createElement('div');
content .classList ='content'
;
root.append(content);

var statusCode = document.createElement('div');
statusCode .classList ='status-code'
;
statusCode .innerText =id
;
content.append(statusCode);

var statusMessage = document.createElement('p');
statusMessage .innerText =message
;
content.append(statusMessage);

container.append(root);
return container
;
} 

var dogeElements = Object.entries(statuses)
.map(function ([key, value]) { 
// wow sad no multiline support 
return generateHttpDogeElement(value.code, value.message);
}) 

console.log(dogeElements);

dogeElements.forEach(function (element) { 
document.querySelector('main')
.append(element);
}) 


function zoomEvent (e) { 
var image = e .target .parentElement .id
elementImage .src =`${imageDir}${image}.png`
;
element .classList ='zoomed'
;
} 

var statusCodeWrappers = document.querySelectorAll('.status-code-wrapper');
var statusCodeWrappersSize = statusCodeWrappers .length

for (var key = 0 ;key  < statusCodeWrappersSize ;key  += 1
) {
var entry = statusCodeWrappers [key];
entry .onclick =zoomEvent
;
} 

document.querySelector('.close-zoomed-button')
.onclick =function closeZoom () { 
element .classList ='zoomed zoomed-hidden'
;
} 
