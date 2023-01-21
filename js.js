var icons = document.querySelectorAll('.outros, .js');

icons.forEach(function(icon){
    icon.addEventListener('mouseover', function(){
        icon.style.transform = 'translateY(-10px)';
    });
});
icons.forEach(function(icon){
    icon.addEventListener('mouseout', function(){
        icon.style.transform = 'translateY(+10px)';
    });
});