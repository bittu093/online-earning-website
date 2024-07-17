document.getElementById('menu').addEventListener("click",function (){
    var navMenu = document.getElementById("ul_list");
    if(navMenu.classList.contains('show')) {
        navMenu.classList.remove('show')
    }
    else{
        navMenu.classList.add('show');
    }
});