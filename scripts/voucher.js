main()

var Udata=JSON.parse(localStorage.getItem("User"))

async function main(){
    var res=getdata()
    var data=await res
    console.log(data)
    append(data)

    var balance=Udata.wallet
    document.querySelector("#wallet_balance").innerText=balance
}

async function getdata(){
    try{
        const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`
        var res=await fetch(url)
        var data=await res.json()

        return data[0].vouchers
    }
    catch(err){
        console.log(err)
    }
}

function append(data){
    var container= document.querySelector("#voucher_list")

    data.forEach(function(ele){
        var div = document.createElement("div")
        div.setAttribute("class","voucher")

        var image= document.createElement("img")
        image.src=ele.image

        var name= document.createElement("p")
        name.src=ele.name

        var price= document.createElement("p")
        price.src=ele.price

        var button= document.createElement("button")
        button.innerText="Buy"
        button.setAttribute("class","buy_voucher")
        button.addEventListener("click",function(){
            addvoucher(ele)
        })

        div.append(image,name,price,button)
        container.append(div)
    })
}

function addvoucher(ele){
    var balance=Udata.wallet
    if(balance < ele.price){
        alert("Sorry! insufficient balance")
    }
    else{
        alert("Hurray! purchase successful")
        balance=balance.ele.price
        Udata.wallet=balance
        document.querySelector("#wallet_balance").innerText=balance
        localStorage.setItem("User",JSON.stringify(Udata))

        var parr=JSON.parse(localStorage.getItem("purchase"))||[]
        parr.push(ele)
        localStorage.setItem("purchase",JSON.stringify(parr))
    }
}