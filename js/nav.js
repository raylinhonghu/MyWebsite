$(document).ready(function(){
  var unclickedItems = $('.menu-unclicked');

  // menu interaction
  $(".menu-unclicked").on("click",function(){
    var clickedName = $(this).attr("name");

    // hide and show except this clicked
    $.each(unclickedItems,function(index,eachItem) {
      if($(eachItem) != $(this))
        $(eachItem).show(300);
        $(eachItem).next().hide(300);

    })

    // this. hide and show
    $(this).hide(300);
    $(this).next().show('hide-navContent');

    // midContent Display
    switch (clickedName) {
      case  "home":
        $('.home').show(0);$('.honghulin').hide(0);
        $('.projects').hide(0);$('.blogs').hide(0);
        $('.tags').hide(0);
        break;
      case  "honghulin":
        $('.honghulin').show(0);$('.home').hide(0);
        $('.projects').hide(0);$('.blogs').hide(0);
        $('.tags').hide(0);
        break;
      case  "projects":
        $('.projects').show(0);$('.honghulin').hide(0);
        $('.home').hide(0);$('.blogs').hide(0);
        $('.tags').hide(0);
        break;
      case  "blogs":
        $('.blogs').show(0);$('.honghulin').hide(0);
        $('.home').hide(0);$('.projects').hide(0);
        $('.tags').hide(0);
        break;
      case  "tags":
        $('.tags').show(0);$('.honghulin').hide(0);
        $('.home').hide(0);$('.projects').hide(0);
        $('.blogs').hide(0);
        break;
    }

  });

  // click red navigation
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
  // $.ajax({
  //   type:"GET",
  //   url: "https://github.com/raylinhonghu/MyWebsite/blob/master/json/midContent.json",
  //   success:function(data){
  //     console.log(data[0].name);
  //   },
  //   error:function(jqXHR,textStatus,error){
  //     console.log(error);
  //   }
  // })


});
