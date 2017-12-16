$(document).ready(function(){
    $(".fa-share-alt").on('click',function(){
       if($(".circle").css('display') == 'none'){
           $(".circle").css('display','block');
       }else{
           $(".circle").css('display','none');
       }
    });
});