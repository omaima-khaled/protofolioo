//botton fadein AND OUT 
$(window).scroll(function(){
  
    wcsroll=$(window).scrollTop();
    if(wcsroll > 936){
      $('#up-btn').fadeIn(1000)
    }
    else{
      $('#up-btn').fadeOut(1000)
    }
  })
  $('#up-btn').click(function(){
    $('body,html').animate({scrollTop:0},10  )
  })
  //sections with navitems
  $("a[href^='#']").click(function(e){
    let ahref = $(e.target).attr('href')
    let secoffset=$(ahref).offset().top;
    $('html,body').animate({scrollTop:secoffset},50)
   
 
 })
 //fadeout loading page
 
 $(document).ready(function(){
 
  
    $('.sk-chase').fadeOut(1000,()=>{
        $('#lodeingPage').fadeOut(1000,()=>{
            $('#lodeingPage').remove();
            $('body').css('overflow-y','auto')
        })
    })
    
})
//


let skillOffset = $("#Skills").offset().top 
$(window).scroll(function(){
    let x = $(window).scrollTop()
   
    if(x > skillOffset-100) 
    {
     let x=  setInterval(() => {
         if(count<=97)
         {
            welcome("#counter")
         }
         else clearInterval(x)  
        }, 100);
    }
    if(x > skillOffset-100) 
    {
     let x=  setInterval(() => {
         if(count<=95)
         {
            welcome("#counter2")
         }
         else clearInterval(x)  
        }, 100);
    }
    if(x > skillOffset-100) 
    {
     let x=  setInterval(() => {
         if(count <=95 )
         {
            welcome("#counter3")
         }
         else clearInterval(x)  
        }, 100);
    }
    if(x > skillOffset-100) 
    {
     let x=  setInterval(() => {
         if(count<=92)
         {
            welcome("#counter4")
         }
         else clearInterval(x)  
        }, 100);
    }
})
let count = 0
function welcome (x){
    count ++
    $(x).html(count)
}







