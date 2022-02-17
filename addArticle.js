fetch('http://personal-portofolio1.herokuapp.com/api/post').then((data) => {
    // console.log(data);
    return data.json();
}).then((completedata) => {
    // console.log(completedata[2].title);
    let data1="";
    completedata.map((values) => {
        data1+= ` <div class="card">
        <h2 class="title">${values.title}</h2>
        <h2 class="content">${values.content}</h2>
        <img class="images" src=${values.imageUrl} alt="img">
        <h2 class="userId">${values.userId}</h2>
    </div> `
    })
    document.getElementById("cards").innerHTML=data1;
}).catch((err) => {
    console.log(err);
})

const formarticle=document.querySelector('.form-article');
window.addEventListener('load',(e)=>{
    //get all articles 
    getArticles();
    // formarticle.classList.add("show");
});
formarticle==null ? null:formarticle.addEventListener('submit',(e) =>{
    e.preventDefault();
    const title=document.querySelector('#title').value;
    const textbody=document.querySelector('#text').value;
    if(title.length==0){
        document.querySelector('error-title').innerHTML="please enter a title";
        document.querySelector('.error-title').style.color="red";
    }else if(text.length==0){
        document.querySelector('.error-text').innerHTML="please enter a text";
        document.querySelector(',error-text').style.color="red";
    }else{
        //add data to localstorage
        var textobject=[
            {
                title:title,
                content:textbody,
                imageUrl:[],
                comments:[],
            }
        ];
        if (localStorage.getItem('articles')) {
            //append
            var mytext=JSON.parse(localStorage.getItem('articles'));
            mytext.unshift(textobject);
            localStorage.clear();
            localStorage.setItem('articles',JSON.stringify(mytext));
        }else{
            //set localstorage key and value
            localStorage.setItem('articles',JSON.stringify(textobject));
        }
        window.location.href="addarticles.html";
    }
});

function getArticles(){
    var parentEl=document.querySelector('.list-articles');
    if(localStorage.getItem('articles')){
        var articles=JSON.parse(localStorage.getItem('articles'));
        articles ==null ?null :articles.forEach((element,index) => {
            for (let i = 0; i < articles[index].length; i++) {
                // console.log(articles[index][i].articletitle);
                var listEl=document.createElement('li');
                var listtext=document.createTextNode(`${articles[index][i].articletitle}`);
                listEl.appendChild(listtext);
                parentEl.appendChild(listEl);
            }                     
        });
    }  
}

