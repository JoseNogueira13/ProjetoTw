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
function loginUser() {
    input = document.getElementById("userEmail").value;
    input2 = document.getElementById("userPassword").value
    alert('Bem vindo de volta' + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + (input));
}
function registerUser() {
    input = document.getElementById("userEmail").value;
    input2 = document.getElementById("userPassword").value
    alert('O seu registo foi bem sucedido!'  +  (input));
}
function openSubscricao() {
    window.location.href="subscricao.html"
}

function subscricao() {
    document.getElementById("result").innerHTML = "";
    var sub = document.getElementsByTagName('input');
    alert("A sua inscrição foi feita com sucesso!")  
    for(i = 0; i < sub.length; i++) {
          
        if(sub[i].type="radio") {
          
            if(sub[i].checked)
                document.getElementById("result").innerHTML
                += " A sua " + sub[i].name + " : "
                + sub[i].value + "<br>";

                    
        }
    }
}
var post= document.getElementById("post");
post.addEventListener("click", function(){
    var commentBoxValue= document.getElementById("commentBox").value;
 
    var li = document.createElement("li");
    var text = document.createTextNode(commentBoxValue);
    li.appendChild(text);
    document.getElementById("unordered").appendChild(li);
 
});
function newsletterMessage() { 
    document.getElementById("newsLetterDiv").style.display = "block";
}
function closeNewsletter() { 
    document.getElementById("newsLetterDiv").style.display = "none";
    
}