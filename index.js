const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true)

xhr.send()
xhr.onload = function () {
    var data = JSON.parse(this.response)
    console.log("data", data)
    console.log(data[153].name.common)
    console.log(data[0].cca3)
    console.log(data[0].coatOfArms.svg)
    //object => for in loop
    for (var i in data) {
        const res = data[i].name.common
        console.log(res)
    }
}

