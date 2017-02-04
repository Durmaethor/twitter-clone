
$(document).ready(function(){

var keystrokes = 15;
var userInput;

    $('.tweet-compose').on('click', function(){
        $(this).height(65);
        $('#tweet-controls').show();
    });

    $('.tweet-compose').keyup(function() {
        userInput = $(this).val();
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

    //pushes the text in the tweet field to the stream
    $('.button').on('click', function(){

        //clones the first tweet DIV and houses it in a variable
        var cloneInfo = $('.tweet:first').clone();

            

        //Adds the cloned first Tweet to the stream
        $('#stream').prepend(cloneInfo);
    })
});

