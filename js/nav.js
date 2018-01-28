$(document).ready(function(){
  var items = [];
  // get midContent
  $.getJSON("https://api.myjson.com/bins/h0lj9",function(data){
    $.each(data, function(key,val) {
      items.push(val);
    });
    console.log(items);
  });

  var unclickedItems = $('.menu-unclicked');

  // menu interaction
  $(".menu-unclicked").on("click",function(){
    var clickedName = $(this).attr("name");

    // hide and show except this clicked
    $.each(unclickedItems,function(index,eachItem) {
      if($(eachItem) != $(this))
        $(eachItem).show(0);
        $(eachItem).next().hide(0);

    })

    // this. hide and show
    $(this).hide(0);
    $(this).next().show('hide-navContent');

    // midContent Display
    switch (clickedName) {
      case  "home":
        $('.home').show(0);$('.honghulin').hide(0);
        $('.projects').hide(0);$('.blogs').hide(0);
        $('.tags').hide(0);
        $('.home .introTitle').append(items[0].menuTitle);
        $('.home .introParagraph').append(items[0].paragraph);
        break;
      case  "honghulin":
        $('.honghulin').show(0);$('.home').hide(0);
        $('.projects').hide(0);$('.blogs').hide(0);
        $('.tags').hide(0);
        $('.honghulin .introTitle').append(items[1].menuTitle);
        $('.honghulin .introParagraph').append(items[1].paragraph);
        break;
      case  "projects":
        $('.projects').show(0);$('.honghulin').hide(0);
        $('.home').hide(0);$('.blogs').hide(0);
        $('.tags').hide(0);
        $('.projects .introTitle').append(items[2].menuTitle);
        $('.projects .introParagraph').append(items[2].paragraph);
        break;
      case  "blogs":
        $('.blogs').show(0);$('.honghulin').hide(0);
        $('.home').hide(0);$('.projects').hide(0);
        $('.tags').hide(0);
        $('.blogs .introTitle').append(items[3].menuTitle);
        $('.blogs .introParagraph').append(items[3].paragraph);
        break;
      case  "tags":
        $('.tags').show(0);$('.honghulin').hide(0);
        $('.home').hide(0);$('.projects').hide(0);
        $('.blogs').hide(0);
        $('.tags .introTitle').append(items[4].menuTitle);
        $('.tags .introParagraph').append(items[4].paragraph);
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



});
