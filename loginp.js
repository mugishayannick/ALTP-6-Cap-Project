const loginFormData = () => {
    document.getElementById('').value
}






function logout(){
    // let users = JSON.parse(localStorage.getItem('users'));
    // if(username==0){
    //     users.loggedout=true
    //     localStorage.setItem("users", JSON.stringify(users));
    //     alert("logout successfully")

    // }
    // else {
    //     window.location.href='./loginpage.html'
    // }
    localStorage.removeItem('token')
    window.location.href = 'loginpage.html'
}