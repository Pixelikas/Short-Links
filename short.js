
var elementBtnShort = document.getElementById("btnShort")
var elementInptShortURL = document.getElementById("inptShortURL")
var elementBtnCopy = document.getElementById("btnCopy")

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]

const lengthURL = 8

const copyToClipboard = (urlCopied) => {

    navigator.clipboard.writeText(urlCopied)

}

function Short(){

    var shortURL = ''

    for(i=0; i < lengthURL; i++){

        if(i % 2 == 0){

            if(i == 0 || i == 4){

                shortURL += letters[Math.floor(Math.random() * letters.length)].toUpperCase()

            }else{

                shortURL += letters[Math.floor(Math.random() * letters.length)].toLowerCase()

            }

        }else{

            shortURL += numbers[Math.floor(Math.random() * numbers.length)]

        }

    }

elementBtnShort.disabled = true
elementBtnShort.style.background = "#52e342" 
elementInptShortURL.value = 'short.ly/' + shortURL

}

function Copy(){

    elementBtnCopy.disabled = true
    elementBtnCopy.style.background = "#52e342" 
    elementBtnCopy.textContent = 'Copied'

    const linktoCopy = elementInptShortURL.value
    copyToClipboard(linktoCopy)

}
