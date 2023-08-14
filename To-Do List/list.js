let list =[]
const input = document.getElementById("input-el")
const addBtn = document.getElementById("add-btn")
const items = document.getElementById("ul-el")
const deleteBtn = document.getElementById("clear")
const storageItems = JSON.parse (localStorage.getItem("list"))

if(storageItems){
    list = storageItems
    render(list)
}



function render(arr){
    let listElements =""
    for(let i =0; i<arr.length;i++){
        listElements += `<li>${arr[i]}</li>`
    }
    items.innerHTML = listElements
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    list =[]
    render(list)
})





addBtn.addEventListener("click",function(){
        list.push(input.value)
        input.value =""
        localStorage.setItem("list",JSON.stringify(list))
        render(list)
})

input.addEventListener("keypress",function(press){
    if(press.key === "Enter"){
    
    list.push(input.value)
        input.value =""
        localStorage.setItem("list",JSON.stringify(list))
        render(list)}
})



