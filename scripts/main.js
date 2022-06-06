let form = document.querySelector("form")
form.addEventListener("submit", mydata)

function push(name,email,address,amount){
    this.name=name
    this.email=email
    this.address=address
    this.amount=amount
}

function mydata(){
    event.preventDefault()
    var User= new push(form.name.value, form.email.value, form.address.value, form.amount.value)
    console.log(User)

    localStorage.setItem("User",JSON.stringify(User))
    form.name.value=null
    form.email.value=null
    form.address.value=null
    form.amount.value=null
}