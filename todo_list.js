function init() {
  addTask();
  selectTask();
  hideInput();
  removeTask();
};

function addTask() {
  $('input').keypress(function(event) {
    if(event.which === 13) {
      $('ul').append('<li><span><i class="far fa-trash-alt"></i></span>' + $(this).val() + '</li>');
      $(this).val("");
    };
  });
};

function selectTask() {
  $('ul').on('click', 'li', function(){
    $(this).toggleClass("completed");
  });
};

function hideInput() {
  $('h1 span').on('click', function() {
    $('input').fadeToggle();
  });
};

function removeTask(){
  $('ul').on('click', 'span', function(event) {
    $(this).parent().fadeOut(500, function() {
      $(this).remove();
    });
    event.stopPropagation();
  });
};

init();
