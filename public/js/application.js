$(document).ready(function(){
  $("#get_color").on("click",function(){
    $.ajax({
      method: "POST",
      url: "/color"
    }).done(function(response){
      $("ul li").eq(response.cell).css("background-color", response.color)
    });
  });
});

//Can also be written as: 
// $(document).ready(function(){
//   $('#get_color').on('click', function(e) {
//     e.preventDefault();
//     $.post('/color').done(function(response) {
//       $('ul li').eq(response.cell).css('background-color', response.color);
//     });
//   });
// });
