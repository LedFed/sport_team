$(document).ready(function(){
  $(".header_search").click(function(){
    $(".wrap, .search, nav").toggleClass("active");
    $("header").toggleClass("hidden");
    $("input[type='text']").focus();
    // if (!$("input[type='text']").blur()){
    //    $('.header_search').blur(function(){$(".wrap, .search").RemoveClass("active");});
    // }
  });
  // $(".menu").click(function(){
  //   $("nav").toggleClass("table");
  // });
  $(".menu").on("change", function(event){
    event.preventDefault();
    // $(this).toggleClass("table");
    $("nav").toggleClass("table");
});
});