// ==UserScript==
// @name     betterSTUDIS
// @version  1
// @description improvements in usability and structure of StudIS
// @namespace betterStudIS
// @include https://www.vut.cz/*
// @author ss11mik
// ==/UserScript==


var usernameInput = document.getElementById("login7")

// login page
if (usernameInput != null) {
    // autofocus username input
    usernameInput.focus()
    return;
}

// replace confusing texts
document.body.innerHTML = document.body.innerHTML
                            .replace('Registrace zadání', 'Projekty')
                            .replace('Registrace vyučování', 'Registrace cvičení')
                            .replace('Registrace termínů', 'Termíny')
                            .replace('Individuální rozvrh', 'Rozvrh')
                            .replace('Aktuality z předmětu', 'Aktuality')
                            .replace('eLearning', 'Moodle')
                            .replace('Registrace vyučování', 'Registrace cvičení')
                            .replace('Registrace zadání', 'Projekty')
                            .replace('Rozvrhy', 'Rozvrhy osob atd.')

                            .replace('Zápočet udělen:', 'Zápočet:')
                            .replace('Seznam termínů', 'Termíny')
                            .replace('Seznam zadání', 'Projekty')
                            .replace('Více informací o termínu získáte kliknutím na číslo nebo popis termínu.', '')
                            .replace('Více informací o zadání získáte kliknutím na číslo nebo popis zadání.', '')

                            .replace('řešitelský tým:', 'tým:')



// reorder menu items
// var sidebar = doc.getElementsByClassName("vut-sidebar")[0]
var menu = document.getElementById("vut-menu")

if (menu != null) {
    menu.insertBefore(menu.children[1], menu.children[0])
    menu.insertBefore(menu.children[2], menu.children[1])
}



// reorder upper menu
// var upperMenu = document.getElementsByClassName("nav navbar-nav")[0]
// upperMenu.insertBefore(upperMenu.children[2], upperMenu.children[1])
// upperMenu.insertBefore(upperMenu.children[2], upperMenu.children[1])


// upperMenu.insertBefore(upperMenu.children[3], upperMenu.children[2])
// upperMenu.insertBefore(upperMenu.children[3], upperMenu.children[2])


// document.getElementsByClassName("bg bg-fit")[0].background= ""
// document.getElementsByClassName("bg bg-fit")[0].innerHTML = "aaaa"
// doc = doc.replace('https://www.vut.cz/i/www_base/img/bg_img/bg-fit.jpg', '')



// remove search box
searchBox = document.getElementsByClassName("search-menu-mobile-wrap")[0]
if (searchBox != null)
    searchBox.parentNode.removeChild(searchBox)



var editCSS = document.createElement('style')

// increase margins in table of projects
editCSS.innerHTML = ".m_termin {margin-bottom: 16px}"

// remove background images
editCSS.innerHTML += ".bg-fit {background: url()};"
editCSS.innerHTML += ".bg-vut {background: url()};"

document.body.appendChild(editCSS)



// hide filter form to collapsible menu
var origFiltrArray = document.getElementsByClassName("form-filter-box")
if (origFiltr != null) {
    var origFiltr = origFiltrArray[0]
    var filtrParent = origFiltr.parentNode

    var filtr = document.createElement('details')
    filtr.innerHTML ="<summary><h2>Filtr</h2></summary>"
    filtr.appendChild(origFiltr)

    filtrParent.insertBefore(filtr, filtrParent.children[1])
}
