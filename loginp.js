const loginFormData = () => {
    document.getElementById('').value
}


const login = async (useremail, password) =>{
    const user = {
        email :useremail,
        password : password,
        loggedIn: false
     }
    const response = await fetch("https://personal-portofolio1.herokuapp.com/api/auth/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });

  console.log(response);
  if (response.status == 201) {
    console.log("logged in succesfully");
    const token = await response.json();
    console.log(token);
    localStorage.setItem("token", user.token);
    localStorage.setItem("userType", user.type)

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

export{
    login
}
function logout(){
    let users = JSON.parse(localStorage.getItem('users'));
    if(username==0){
        users.loggedout=true
        localStorage.setItem("users", JSON.stringify(users));
        alert("logout successfully")

    }
    else {
        window.location.href='./loginpage.html'
    }
}