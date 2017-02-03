
$(document).ready(function(){

var keystrokes = 5;

    $('.tweet-compose').on('click', function(){
        $(this).height(65);
        $('#tweet-controls').show();
    });

    $('.tweet-compose').keyup(function() {
        var length = $(this).val().length;
        var text = keystrokes-length;
        $('#char-count').text(text);

        if (keystrokes <= 10) {
            $('#char-count').css('color', 'red')
        }

        if (keystrokes <= 0) {
            $('.button').attr('disabled', 'disabled');
        } 
    });


});

