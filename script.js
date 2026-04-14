$(document).ready(function(){

$(".post").hover(
function(){
    $(this).css("transform","scale(1.02)");
},
function(){
    $(this).css("transform","scale(1)");
});

});