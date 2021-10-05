/*
    this script enables the zooming on the http code images
    the script is entirely written in dogescript
*/

var imageDir = 'assets/images/';
var elementImage = document.querySelector('.zoomed img');
var element = document.querySelector('.zoomed');

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
