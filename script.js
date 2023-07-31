
let input=document.querySelector('#input')
input.addEventListener('keyup',function(e){
    if(e.key=="Enter"){
        console.log(input.value)
        add_to_do(input.value)
        input.value=""
    }
})

let itemul=document.querySelector('#item')
const add_to_do=(item)=>{
    const listitem=document.createElement('li')
    listitem.innerHTML=`${item}
    <button id="btn">remove</button>`

    listitem.addEventListener('click',function(){
        this.classList.toggle('done')
    })

    listitem.querySelector('button').addEventListener('click',function(){
        listitem.remove()
    })

    itemul.append(listitem)
}
