const contactForm=document.querySelector('.contact-form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const w3review = document.getElementById('w3review');
contactForm.addEventListener('submit',(e)=>{
    console.log('saved')
    e.preventDefault();
    const name=document.querySelector('#name').value;
    const email=document.querySelector('#email').value;
    const message=document.querySelector('#w3review').value;
    if(name.length==0){
        document.querySelector('.error-name').innerHTML="Please enter a name";
        document.querySelector('.error-name').style.color="red";
    }else if(email.length==0){
        document.querySelector('.error-email').innerHTML="Please enter your email";
        document.querySelector('.error-email').style.color="red";
    }else if(message.length==0){
        document.querySelector('.error-text').innerHTML="Please enter your query";
        document.querySelector('.error-text').style.color="red";
    }else{
        //contactForm.submit();
        //add data to localstorage
        var messageObject=
            {
                visitorname:name,
                visitoremail:email,
                message:message,
            }
        
        if (localStorage.getItem('messages')) {
            //append 
            var mymessages=JSON.parse(localStorage.getItem('messages'));
            mymessages.unshift(messageObject);
            localStorage.setItem('messages',JSON.stringify(mymessages)); 
        } else {
            //set localstorage key and value 
            localStorage.setItem('messages',JSON.stringify(messageObject));           
        }
        console.log(JSON.parse(localStorage.getItem('messages')));
    }
});
const contactFormEl=document.querySelectorAll('#name,#email,#phone,#w3review');
contactFormEl.forEach((el,index)=>{
    el.addEventListener('change',(e)=>{
        var val=e.target.value;
        if(val.length>0 && e.target.id=='name'){ 
            document.querySelector('.error-name').style.display="none";
        }else if(val.length>0 && e.target.id=='email'){
            document.querySelector('.error-email').style.display="none";
        }else if(val.length>0 && e.target.id=='w3review'){ 
            document.querySelector('.error-text').style.display="none";
        }      
    });
});

contactForm.addEventListener('submit', (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault
    fetch('http://personal-portofolio1.herokuapp.com/api/message').then(data), {
        method: '',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          name: name,
          email: email,
          w3review: w3review,
         
        })
        // .then(res => res.json())
      }
      return data.json();
     
    //   .then(data => {
    //     const dataArr = [];
    //     dataArr.push(data);
    //     renderPosts(dataArr);
      })

const nav = document.getElementById("menu");
    const burger = document.getElementById("burger")

    burger.addEventListener("click", () => {
    
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
           } else {
            nav.classList.add('active');
           }
    });


    const submit = () => {
        console.log('clickeed')
    }