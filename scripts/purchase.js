main()

function main(){
    var pdata=JSON.parse(localStorage.getItem("purchase"))

    append(pdata)
    var Udata=JSON.parse(localStorage.getItem("User"))
    var balance=Udata.wallet
    document.querySelector("#wallet_balance").innerText=balance
    document.querySelector("#balance").innerText=balance
}

function append(data){
    var container = document.querySelector("#purchased_vouchers")

    data.forEach(function (ele){
        var div = document.createElement("div")
        div.setAttribute("class","voucher")

        var image= document.createElement("img")
        image.src=ele.image

        var name= document.createElement("p")
        name.src=ele.name

        var price= document.createElement("p")
        price.src=ele.price

        div.append(image,name,price)
        container.append(div)
    })
}