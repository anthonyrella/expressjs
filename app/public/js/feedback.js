$(function() {
  $.getJSON('api', updateFeedback);

  $('.feedback-form').submit(function(e){

    //need to prevent form from reloading server!!! This is a temporary fix so you can keeping adding to replies before refresh
    e.preventDefault();
    //jquery post send some data to url . updateFeedback as third parameter to run after post to update the page 
    $.post('api', {
      name: $('#feedback-form-name').val(), 
      title: $('#feedback-form-title').val(), 
      message: $('#feedback-form-message').val()
    }, updateFeedback);

  });

  function updateFeedback(data) {
   var output = '';
   $.each(data,function(key, item) {
     output += '     <div class="feedback-item item-list media-list">';
     output += '       <div class="feedback-item media">';
     output += '         <div class="feedback-info media-body">';
     output += '           <div class="feedback-head">';
     output += '             <div class="feedback-title">' + item.title + ' <small class="feedback-name label label-info"> '+ item.name +'</small></div>';
     output += '           </div>';
     output += '           <div class="feedback-message">' + item.message + '</div>';
     output += '         </div>';
     output += '       </div>';
     output += '     </div>';
   });
   $('.feedback-messages').html(output);
  }
});
