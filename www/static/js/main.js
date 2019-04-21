// check off specific todos by clicking
$('ul').on('click', 'li', function() {
  $(this).toggleClass('completed');
});

// click on X to delete todo
$('ul').on('click', 'span', function(event) {
  $(this).parent().fadeOut(1000, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// add new todo
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    var newTodoText = $(this).val();
    $(this).val('');
    // create a new li and add to ul
    $('ul').append("<li><span><i class='fa fa-trash'></i></span>" + newTodoText + '</li>');
  }
});

$('.fa-plus').on('click', function() {
  $("input[type='text']").fadeToggle();
});
