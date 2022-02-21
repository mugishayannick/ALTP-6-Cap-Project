const url = 'http://personal-portofolio1.herokuapp.com/api/message'
window.addEventListener('load',(e)=>{
    var urlAddress=window.location.href;
    if(urlAddress.includes('sitemessages.html')){
        loadMessages();
    }
});

fetch(url).then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].title);
    let data1="";
    completedata.map((values) => {
        data1+= ` <div class="card">
        <h1 class="name">${values.name}</h1>
        <h2 class="email">${values.email}</h2>
        <h2 class="message">${values.message}</h2>
    </div> `
    })
    document.getElementById("cards").innerHTML=data1;
    document.getElementById("cards").innerHTML=data1;
    const card =document.querySelector('.card');
    card.addEventListener('click', (e, name,email,message,id) => {
       
    })
})
// }).catch((err) => {
//     console.log(err);
// })

function loadMessages(){
    if(localStorage.getItem('messages')){
        var mymessages=JSON.parse(localStorage.getItem('messages'));
        console.log(mymessages);
        var parentNode=document.querySelector('.messages');
        mymessages.forEach((element,index) =>{
            for (let message in element) {
                for (let a in element[message]){
                    console.log(element[message][a])
                }
                // console.log(element[message])
                var listEl=document.createElement('ol');
                var textNode=document.createTextNode(`Message:${element.message}`);
                listEl.appendChild(textNode);
                parentNode.append(listEl);
               
            }   
            parentNode.innerHTML=element.message 
                var listEl=document.createElement('ol');
                var textNode=document.createTextNode(`Message:${element.message}`);
                listEl.appendChild(textNode);
                parentNode.append(listEl);
                    
        });
        console.log(parentNode);

    }
}

const logout=document.querySelector('.logout')

logout.addEventListener('click', ()=>{
    window.location.href = 'loginpage.html'
})

