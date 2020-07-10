var submit = document.getElementById("submit")
var reset = document.getElementById("reset")

var LC00 = document.querySelector(".LC00")
var LC01 = document.querySelector(".LC01")
var LC02 = document.querySelector(".LC02")
var LC03 = document.querySelector(".LC03")
var LC04 = document.querySelector(".LC04")
var LC05 = document.querySelector(".LC05")
var LC06 = document.querySelector(".LC06")
var LC07 = document.querySelector(".LC07")
var LC08 = document.querySelector(".LC08")

var LC10 = document.querySelector(".LC10")
var LC11 = document.querySelector(".LC11")
var LC12 = document.querySelector(".LC12")
var LC13 = document.querySelector(".LC13")
var LC14 = document.querySelector(".LC14")
var LC15 = document.querySelector(".LC15")
var LC16 = document.querySelector(".LC16")
var LC17 = document.querySelector(".LC17")
var LC18 = document.querySelector(".LC18")

var LC20 = document.querySelector(".LC20")
var LC21 = document.querySelector(".LC21")
var LC22 = document.querySelector(".LC22")
var LC23 = document.querySelector(".LC23")
var LC24 = document.querySelector(".LC24")
var LC25 = document.querySelector(".LC25")
var LC26 = document.querySelector(".LC26")
var LC27 = document.querySelector(".LC27")
var LC28 = document.querySelector(".LC28")

var LC30 = document.querySelector(".LC30")
var LC31 = document.querySelector(".LC31")
var LC32 = document.querySelector(".LC32")
var LC33 = document.querySelector(".LC33")
var LC34 = document.querySelector(".LC34")
var LC35 = document.querySelector(".LC35")
var LC36 = document.querySelector(".LC36")
var LC37 = document.querySelector(".LC37")
var LC38 = document.querySelector(".LC38")

var LC40 = document.querySelector(".LC40")
var LC41 = document.querySelector(".LC41")
var LC42 = document.querySelector(".LC42")
var LC43 = document.querySelector(".LC43")
var LC44 = document.querySelector(".LC44")
var LC45 = document.querySelector(".LC45")
var LC46 = document.querySelector(".LC46")
var LC47 = document.querySelector(".LC47")
var LC48 = document.querySelector(".LC48")

var LC50 = document.querySelector(".LC50")
var LC51 = document.querySelector(".LC51")
var LC52 = document.querySelector(".LC52")
var LC53 = document.querySelector(".LC53")
var LC54 = document.querySelector(".LC54")
var LC55 = document.querySelector(".LC55")
var LC56 = document.querySelector(".LC56")
var LC57 = document.querySelector(".LC57")
var LC58 = document.querySelector(".LC58")

var LC60 = document.querySelector(".LC60")
var LC61 = document.querySelector(".LC61")
var LC62 = document.querySelector(".LC62")
var LC63 = document.querySelector(".LC63")
var LC64 = document.querySelector(".LC64")
var LC65 = document.querySelector(".LC65")
var LC66 = document.querySelector(".LC66")
var LC67 = document.querySelector(".LC67")
var LC68 = document.querySelector(".LC68")

var LC70 = document.querySelector(".LC70")
var LC71 = document.querySelector(".LC71")
var LC72 = document.querySelector(".LC72")
var LC73 = document.querySelector(".LC73")
var LC74 = document.querySelector(".LC74")
var LC75 = document.querySelector(".LC75")
var LC76 = document.querySelector(".LC76")
var LC77 = document.querySelector(".LC77")
var LC78 = document.querySelector(".LC78")

var LC80 = document.querySelector(".LC80")
var LC81 = document.querySelector(".LC81")
var LC82 = document.querySelector(".LC82")
var LC83 = document.querySelector(".LC83")
var LC84 = document.querySelector(".LC84")
var LC85 = document.querySelector(".LC85")
var LC86 = document.querySelector(".LC86")
var LC87 = document.querySelector(".LC87")
var LC88 = document.querySelector(".LC88")

var BIGaRRAY = [
    LC00, LC01, LC02, LC03, LC04, LC05, LC06, LC07, LC08,
    LC10, LC11, LC12, LC13, LC14, LC15, LC16, LC17, LC18,
    LC20, LC21, LC22, LC23, LC24, LC25, LC26, LC27, LC28,
    LC30, LC31, LC32, LC33, LC34, LC35, LC36, LC37, LC38,
    LC40, LC41, LC42, LC43, LC44, LC45, LC46, LC47, LC48,
    LC50, LC51, LC52, LC53, LC54, LC55, LC56, LC57, LC58,
    LC60, LC61, LC62, LC63, LC64, LC65, LC66, LC67, LC68,
    LC70, LC71, LC72, LC73, LC74, LC75, LC76, LC77, LC78,
    LC80, LC81, LC82, LC83, LC84, LC85, LC86, LC87, LC88
]
var ArraySearch = []
var NoArraySearch = []

var loadArraySearch = function() {
    ArraySearch = []
    for (let i = 0; i < 9; i++) {
        let element = document.querySelectorAll(".ligne" + i);
        for (let j = 0; j < element.length; j++) {
            let element2 = element[j];
            if (element2.value == "") {
                ArraySearch.push(element2)
            } else {
                element2.classList.add('tabsearch')
                NoArraySearch.push(element2)
            }
        }

    }
}


var isAtArraySearch = function(e) {
    for (let i = 0; i < ArraySearch.length; i++) {
        let element = ArraySearch[i];
        if (e == element) {
            return true
        }

    }
    return false
}


var isAtRow = function(e) {
    var R = parseInt(e.classList[0].charAt(2))
    var row = document.querySelectorAll(".ligne" + R)

    for (let i = 0; i < row.length; i++) {
        let element = row[i];

        if (e != element) {
            if (e.value == element.value) {
                return true
            }
        }

    }
    return false
}

var isAtColumn = function(e) {
    var C = parseInt(e.classList[0].charAt(3))
    var column = document.querySelectorAll(".colone" + C)

    for (let i = 0; i < column.length; i++) {
        let element = column[i];

        if (e != element) {
            if (e.value == element.value) {
                return true
            }
        }

    }
    return false
}

var isAtGuetto = function(e) {
    var G = parseInt(e.classList[3].charAt(5))
    var carre = document.querySelectorAll(".carre" + G)

    for (let i = 0; i < carre.length; i++) {
        let element = carre[i];

        if (e != element) {
            if (e.value == element.value) {
                return true
            }
        }

    }
    return false
}

var checkSeat = function(e) {
    if (!isAtGuetto(e) && !isAtColumn(e) && !isAtRow(e)) {
        return true
    }
    return false
}



var getValue = function(e) {

    if (e.value == "") {
        e.value = 0
    }

    var i = parseInt(e.value) + 1

    while (i < 10) {
        e.value = i
        if (checkSeat(e)) {
            return true
        }
        i++
    }
    e.value = ""
    return false
}

var sudoku = function() {
    let i = 0
    loadArraySearch()
    var niroso = true


    while (i < BIGaRRAY.length) {
        const elementBIGaRRAY = BIGaRRAY[i];

        if (isAtArraySearch(elementBIGaRRAY)) {
            if (getValue(elementBIGaRRAY)) {
                i++
                niroso = true
            } else {
                i--
                niroso = false
            }
        }

        if (!isAtArraySearch(elementBIGaRRAY)) {
            if (niroso) {
                i++
            } else {
                i--
            }
        }
    }

}

var cancel = function() {
    for (let i = 0; i < BIGaRRAY.length; i++) {
        const element = BIGaRRAY[i];
        element.value = ""
        if (element.classList.contains('tabsearch')) {
            element.classList.remove('tabsearch')
        }
    }

}

submit.addEventListener('click', sudoku)
reset.addEventListener('click', cancel)