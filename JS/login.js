function openLogin() { 
    document.getElementById("loginForm").style.display = "block";
    
}
function closeLogin() { 
    document.getElementById("loginForm").style.display = "none";
    
}
function openRegisterPanel() {
    document.getElementById("loginFormPanel").style.transform = "rotateY(-180deg)";
}
function openLoginPanel() {
    document.getElementById("loginFormPanel").style.transform = "rotateY(0deg)";
}
