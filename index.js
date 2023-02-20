var drinks = ["americano", "flat-white", "drip", "espresso", "cappuccino"]


window.onload = function () {
    drinks.forEach((val) => {
        var i = localStorage.getItem(val)
        if (i) {
            document.getElementById(val).innerText = i
        }
    })
}


clicked = (drink) => {
    var text = document.getElementById(drink).innerText
    document.getElementById(drink).innerText = +text + 1;
    localStorage.setItem(drink, document.getElementById(drink).innerText)
}