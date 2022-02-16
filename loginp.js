
const login = async (useremail, password) =>{
    const credentials = {
        email :useremail,
        password : password,
        loggedIn: false,
        
     }
    const response = await fetch("http://127.0.0.1:8000/api/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: { "Content-Type": "application/json" },
  });

  
  if (response.status == 200) {
    console.log("logged in succesfully");
    const res = await response.json();
    token = res.accesstoken;
    check = true;
  }
  else{
  console.log("I got there")
  check = false;
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
        window.location="loginpage.html"
    }
}