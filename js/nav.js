$(document).ready(function(){
  var name1 = $('.menu-unclicked');
  // menu interaction
  $(".menu-unclicked").on("click",function(){
    // hide and show except this clicked
    $.each(name1,function(i,val) {
      console.log(val);
      if($(val) != $(this))
        $(val).show(300);
        $(val).next().hide(300);
    })
    // this. hide and show
    $(this).hide(300);
    $(this).next().show('hide-navContent');
  });

  $("nav a").on("click",function(){
    var hideNav = $(this).parent().parent();
    hideNav.toggle('hide-navContent');
    hideNav.prev().toggle('menu-unclicked');
  });

  // sidebar and button interaction
  $('.sidebarBtn').on("click",function(){
    $('.sidebar').toggleClass("sidebarActive");
    $(this).toggleClass("sidebarBtnActive");
  });


  // GET MID Content
  $.ajax({
    type:"GET",
    url: "https://learnwebcode.github.io/json-example/animals-2.json",
    success:function(data){
      console.log(data[0].name);
    },
    error:function(jqXHR,textStatus,error){
      console.log(error);
    }
  })
 

});
