window.addEventListener('load',(e)=>{
    var urlAddress=window.location.href;
    if(urlAddress.includes('sitemessages.html')){
        loadMessages();
    }
});
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
            // parentNode.innerHTML=element.message 
            //     var listEl=document.createElement('ol');
            //     var textNode=document.createTextNode(`Message:${element.message}`);
            //     listEl.appendChild(textNode);
            //     parentNode.append(listEl);
                    
        });
        // console.log(parentNode);

    }
}

const logout=document.querySelector('.logout')

logout.addEventListener('click', ()=>{
    window.location.href = 'loginpage.html'
})

