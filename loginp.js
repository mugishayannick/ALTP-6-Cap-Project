function login(username, password){
    // const newUser = {
    //     username :username,
    //     password : password,
    //     loggedIn: false,
        
    //  }
    let users = JSON.parse(localStorage.getItem('users'));
    if(username=="yannickmugisha23@gmail.com" && password=="Yannick23"){
        users.loggedIn=true
        localStorage.setItem( "users", JSON.stringify(users));
     window.location="adminpage.html"
    }
    else {
        alert("wrong password")
    }
    console.log(username)
     
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