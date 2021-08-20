var wrapper = document.getElementsByTagName('html')[0];

var toggler = document.getElementById('toggler');


function changeTheme(e) {
    var style, target;
    target = e.target;
    if(target.hasAttribute('id')) {
        style = target.getAttribute('id');
        wrapper.className = style;
        console.log(wrapper.className);
    }  
    
}


toggler.addEventListener('click', function(e){
    changeTheme(e);
});




