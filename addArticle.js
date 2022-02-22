var imageUrl
document.getElementById("imageUrl-value").addEventListener('change', function() {
  const image = new FileReader()
  image.readAsDataURL(this.files[0])
  image.addEventListener('load' , ()=>{
    imageUrl = image.result
    console.log(imageUrl);
  })
})

const postsList = document.getElementById('posts-list-row');
let output = '';  
const form = document.querySelector('form');
const titleValue = document.getElementById('title-value');
const contentValue = document.getElementById('content-value');
const imageUrlValue = document.getElementById('imageUrl-value');
const userIdValue = document.getElementById('userId-value');
const btnSubmit = document.querySelector('.btn')
const renderPosts = (posts) => {
  posts.forEach(post => {
    
    output += `<div class="card">
    <div class="card-body" data-id=${post._id}>
      <h5 class="card-title">${post.title}</h5>
      <img class="card-imageURL" src=${post.imageUrl}>
      <p class="card-text">${post.content}?</p>
      <h7 class="card-userId">${post.userId}</h7>
      <a href="#" class="card-link" id="edit-post">Edit</a>
      <a href="#" class="card-link" id="delete-post" >Delete</a>
      <textarea class="form-comment" placeholder="Leave a comment here" rows="5"></textarea>
      <button class"from-button" id="comment-post">comment</button>
      <h7 class="card-comment">${post.comment}</h7>
     
     

    </div>
   
  </div>`;
  
});
postsList.innerHTML=output;

}

  

const url =  'https://personal-portofolio1.herokuapp.com/api/post';



// Get -  read the posts
//method Get
fetch(url)
.then(res => res.json())
.then (data => renderPosts(data))

postsList.addEventListener('click', (e) => {
  const token = localStorage.getItem("token");
  e.preventDefault();
  let delButtonIsPressed = e.target.id == 'delete-post';
  let editButtonIsPressed = e.target.id == 'edit-post';
  // let commentButtonIsPressed = e.target.id == 'comment-post'

  let id = e.target.parentElement.dataset.id;
  //  if(commentButtonIsPressed) {
  //    fetch(`${https}/${id}`, {
  //      method:'GET',
  //      headers: {
  //       'content-type': 'application/json',
  //       'authorization': `Bearer ${token}`
  //      }
  //    })
  //    .then(res => res.json())
  //    .then(() => location.reload())
  //  }
  //delete - remove existing post
  //method:DELETE
  if(delButtonIsPressed) {
    fetch(`${url}/${id}`, {
      method:'DELETE',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`
      },
    })
    .then(res => res.json())
    .then(() => location.reload())
  }

  if(editButtonIsPressed) {
    
    const parent = e.target.parentElement;
    let titleContent = parent.querySelector('.card-title').textContent;
    let contentContent = parent.querySelector('.card-text').textContent;
    let imageUrlContent = parent.querySelector('.card-imageUrl');
    let userIdContent = parent.querySelector('.card-userId').textContent;
   

    titleValue.value = titleContent;
    contentValue.value = contentContent;
    imageUrlValue.value = imageUrlContent;
    userIdValue.value = userIdContent;
    
  }

  // update - update the existing post
  // METHOD: PATCH
  btnSubmit.addEventListener('click', (e) => {
    
    e.preventDefault();
    const token = localStorage.getItem("token");
    
    fetch(`${url}/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify( {
        title: titleValue.value,
        content: contentValue.value,
        imageUrl: imageUrlValue.value,
        userId: userIdValue.value
      
      })
     
    }) .then(res => res.json())
    .then(() =>  location.reload())
  })
})


    
  
// create = Insert new post
// Method: POST
let image = document.getElementById("imageUrl-value").files[0]
form.addEventListener('submit', (e) => {
  const token = localStorage.getItem("token");
  e.preventDefault();

const formData = new FormData()
formData.append('title', titleValue.value)
formData.append('content', contentValue.value)
formData.append('imageUrl', document.getElementById("imageUrl-value").files[0])
formData.append('userId', userIdValue.value)
 fetch(url,
 {
   method: 'POST',
   headers: {
     'authorization': `Bearer ${token}`
   },
  //  body: JSON.stringify({
  //    title: titleValue.value,
  //    content: contentValue.value,
  //    imageUrl: image,
  //    userId: userIdValue.value
  //  })
  body: formData
 })
 
 .then((res) => {
   const dataArr = [];
   dataArr.push(res.json);
   renderPosts(dataArr);
 })

 //reset input field to empty

 titleValue.value = '';
 contentValue.value = '';
 imageUrlValue.value = '';
 userIdValue.value = '';
})




// fetch('http://personal-portofolio1.herokuapp.com/api/post').then((data) => {
//     // console.log(data);
//     return data.json();
// }).then((completedata) => {
//     // console.log(completedata[2].title);
//     let data1="";
//     completedata.map((values) => {
//         data1+= ` <div class="card">
//         <h2 class="title">${values.title}</h2>
//         <h2 class="content">${values.content}</h2>
//         <img class="images" src=${values.imageUrl} alt="img">
//         <h2 class="userId">${values.userId}</h2>
//     </div> `
//     })
//     document.getElementById("cards").innerHTML=data1;
//     const card =document.querySelector('.card');
//     card.addEventListener('click', (e, title,content,imageUrl,id) => {
//         window.location.href="editpage.html";
//     })
//     //add eventlistener of card click (e, title,content,imageUrl,id) => {
//         //navigate to edit page 
//         //in edit page 
//         //ck editor get data from parameter
//         //form add eventlistener submit
//         // submitting it will fetch on the end point y k editinga
//     //}
// }).catch((err) => {
//     console.log(err);
// })

// const formarticle=document.querySelector('.form-article');
// window.addEventListener('load',(e)=>{
//     //get all articles 
//     getArticles();
//     // formarticle.classList.add("show");
// });
// formarticle==null ? null:formarticle.addEventListener('submit',(e) =>{
//     e.preventDefault();
//     const title=document.querySelector('#title').value;
//     const textbody=document.querySelector('#text').value;
//     if(title.length==0){
//         document.querySelector('error-title').innerHTML="please enter a title";
//         document.querySelector('.error-title').style.color="red";
//     }else if(text.length==0){
//         document.querySelector('.error-text').innerHTML="please enter a text";
//         document.querySelector(',error-text').style.color="red";
//     }else{
//         //add data to localstorage
//         var textobject=[
//             {
//                 title:title,
//                 content:textbody,
//                 imageUrl:[],
//                 comments:[],
//             }
//         ];
//         if (localStorage.getItem('articles')) {
//             //append
//             var mytext=JSON.parse(localStorage.getItem('articles'));
//             mytext.unshift(textobject);
//             localStorage.clear();
//             localStorage.setItem('articles',JSON.stringify(mytext));
//         }else{
//             //set localstorage key and value
//             localStorage.setItem('articles',JSON.stringify(textobject));
//         }
//         window.location.href="addarticles.html";
//     }
// });

// function getArticles(){
//     var parentEl=document.querySelector('.list-articles');
//     if(localStorage.getItem('articles')){
//         var articles=JSON.parse(localStorage.getItem('articles'));
//         articles ==null ?null :articles.forEach((element,index) => {
//             for (let i = 0; i < articles[index].length; i++) {
//                 // console.log(articles[index][i].articletitle);
//                 var listEl=document.createElement('li');
//                 var listtext=document.createTextNode(`${articles[index][i].articletitle}`);
//                 listEl.appendChild(listtext);
//                 parentEl.appendChild(listEl);
//             }                     
//         });
//     }  
// }

