const login = async (useremail, password) =>{
    const credentials = {
        email :useremail,
        password : password,
        loggedIn: false,
        
     }
    const response = await fetch("https://personal-portofolio1.herokuapp.com/api/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);
  if (response.status == 201) {
    console.log("logged in succesfully");
    const token = await response.json();
    console.log(token);
    localStorage.setItem('token',token);


    window.location.href='./adminpage.html'
    
    
  }
  else{
  console.log("the credentials does not meet")
  alert("wrong credentials")
 
  
}
    // let users = JSON.parse(localStorage.getItem('users'));
    // if(username=="yannickmugisha23@gmail.com" && password=="Yannick23"){
    //     users.loggedIn=true
    //     localStorage.setItem( "users", JSON.stringify(users));
    //  window.location="adminpage.html"
    // }
    // else {
    //     alert("wrong password")
    // }
    // console.log(username)
     
};

const loginForm=document.querySelector('.loginForm');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email=document.querySelector('#email').value;
    const password=document.querySelector('#password').value;
    if(email.length==0){
        document.querySelector('.error-email').innerHTML="please enter a valid email adress";
    }else if(password.length==0){
        document.querySelector('.error-password').innerHTML="please enter a password";
    }else{
        // loginForm.submit();
        // window.location.href="adminpage.html";
        
        // console.log(login(email, password));
        const response = login(email, password)
        console.log(response)
        if (response.status!= 201) {
            e.preventDefault();
            
        }
        
    }    

});
const postEl=document.querySelectorAll('#email,#passowrd');
postEl.forEach((el,index)=>{
    el.addEventListener('change',(e)=>{
      
        var val=e.target.value;
        if(val.length>0 && e.target.id=='email'){ 
            document.querySelector('.error-email').style.display="none";
        }else if(val.length>0 && e.target.id=='password'){ 
            document.querySelector('.error-password').style.display="none";
        }
    });
});
const nav = document.getElementById("menu");
    const burger = document.getElementById("burger")

    burger.addEventListener("click", () => {
    
        if (nav.classList.contains('active')) {
            nav.classList.remove('active');
           } else {
            nav.classList.add('active');
           }
    });