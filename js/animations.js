
$(document).ready(function(){

var keystrokes = 15;

    $('.tweet-compose').on('click', function(){
        $(this).height(65);
        $('#tweet-controls').show();
    });

    $('.tweet-compose').keyup(function() {
        var length = $(this).val().length;
        var text = keystrokes-length;
        $('#char-count').text(text);

        if (text <= 10) {
            $('#char-count').css('color', 'red')
        } else {
            $('#char-count').css('color', '#a9a9a9')
        }

        if (text <= 0) {
            $('.button').prop('disabled', true);
        } else {
            $('.button').prop('disabled', false);
        }
    });


});

