//Fetching the todos api
window.onload =()=>
{
    document.getElementById('fetch').onclick=async()=>{
    const items= await fetch('https://jsonplaceholder.typicode.com/todos');
    const data= await  items.json();
    let dataitem="";
    data.map((values)=>{
        //this tag is to map all the values based on id
        dataitem+=`<div class="card">
        <h1 class="title">${values.title.toUpperCase()}</h1>
        <p>${values.id}</p>
        <p class="status">${values.completed}</p>
    </div>`
    });
    document.getElementById('cards').innerHTML=dataitem;

}

}

