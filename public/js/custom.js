(function($){
  $(document).ready(function(){
    $('#progress-bar').on('click', function(evn){
      evn.preventDefault();
      $(this).attr('value', 80);
      $(this).text('80%');
    })
  })
})(jQuery)
