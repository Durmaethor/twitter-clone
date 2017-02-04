
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

            //create a variable to house name info and pass into clone
            var name = $('.content p:first').text();
            cloneInfo.find('.fullname').text(name);
            //replace username with name
            cloneInfo.find('.username').text('@' + name.replace(/\s/g, ''));

            //replace tweet text with userInput
            cloneInfo.find('.tweet-text:first').text(userInput);

            //replace avatar image with userimage
            var imgSrc = $('.avatar:first').attr('src');
            cloneInfo.find('.avatar').attr('src', imgSrc);

        //Adds the cloned first Tweet to the stream
        $('#stream').prepend(cloneInfo);
    })
});

