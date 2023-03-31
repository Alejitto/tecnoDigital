$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.conte article').hide();
    $('.conte article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.conte article').hide();

        var activeTab= $(this).attr('href');
        $(activeTab).show();
        return false;
    });
    
});

function redireccion(){
    location.href="https://api.whatsapp.com/send?phone=+528714639782&text=Hola!%20estoy%20interesado%20en%20sus%20servicios"
}

