function menubartoggle(){
    var menu = document.getElementById("hamburgermenu");
    var toggle = document.getElementById("mobilemenu");
    if(toggle.style.display === "block"){
        toggle.style.display = "none";
    }
    else{
        menu.style.display = "block";
        toggle.style.display = "block";
    }
}
