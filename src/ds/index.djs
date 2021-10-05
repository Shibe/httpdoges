quiet
    this script enables the zooming on the http code images
    the script is entirely written in dogescript
loud

very imageDir is 'assets/images/'
very elementImage is plz dogeument.querySelector with '.zoomed img'
very element is plz dogeument.querySelector with '.zoomed'

such zoomEvent much e
    very image is e giv target giv parentElement giv id
    elementImage giv src is `${imageDir}${image}.png`
    element giv classList is 'zoomed'
wow

very statusCodeWrappers is plz dogeument.querySelectorAll with '.status-code-wrapper'
very statusCodeWrappersSize is statusCodeWrappers giv length

much very key as 0 next key smaller statusCodeWrappersSize next key more 1
    very entry is statusCodeWrappers levl key ;
    entry giv onclick is zoomEvent
wow

plz dogeument.querySelector with '.close-zoomed-button' &
    giv onclick is such closeZoom
        element giv classList is 'zoomed zoomed-hidden'
    wow