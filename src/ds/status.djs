very image is plz dogeument.querySelector with 'img'

very pathname is window.location giv pathname
very host is window.location giv host

very stringified is plz JSON.stringify with pathname
very deepCopyPath is plz JSON.parse with stringified

very statusCode is plz deepCopyPath.split with '/' &
    levl 2

plz window.location.replace with `http://localhost:8888/httpdoge/assets/images/${statusCode}.png`