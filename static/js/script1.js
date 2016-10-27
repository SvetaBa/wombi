$(document).ready(function(){
    city = 'Moscow';
    $('#weather').click(function() {
        $.get({
            url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=11c0d3dc6093f7442898ee49d2430d20&units=metric',
            success: function(response) {
                temperature = response['main']['temp'];
                if (temperature >= 20) {
                    $('#dude').attr('src', 'static/vombapanam.png');
                    alert('Погода на улице: ' + temperature + 'C. Как бы Сергей не схватил солнечный удар!');
                } else if (temperature >= 5) {
                    $('#dude').attr('src', 'static/vombat.png');
                    alert('Погода на улице: ' + temperature + 'C. Сергею как никогда хорошо.');
                } else {
                    $('#dude').attr('src', 'static/vombahat.png');
                    alert('Погода на улице: ' + temperature + 'C. Сергею изнывает от холода!');
                }
            }
        });
    });
    $('#city').click(function() {
        city = prompt('Currently Sergey is living in ' + city + '. Where would you like him to move?');
    });
    $('#info').click(function(){
       alert('Это вомбат Сергей. Он потерялся');
       });
    $(document).keydown(function(key){
        switch (parseInt(key.which, 10)) {
            case 37:
                $('#dude').animate({left: "-=20px"}, 'fast');
                break;
            case 38:
                $('#dude').animate({top: "-=20px"}, 'fast');
                break;
            case 39:
                $('#dude').animate({left: "+=20px"}, 'fast');
                break;
            case 40:
                $('#dude').animate({top: "+=20px"}, 'fast');
                break;
            case 116:
                break;
            case 18:
                break;
            case 9:
                break;
            default:
                alert('Используйте клавишы \u2190 \u2192 \u2191  \u2193');
        };
        // if (check){
        //     alert('You saved his life!!!');
        // }
    });
});
