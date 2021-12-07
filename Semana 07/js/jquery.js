
  script.src = src="https://code.jquery.com/jquery-3.6.0.js"
  
// Vincular eventos con Elementos

$('p').click(function() {
    console.log('click');
    });
    
    
    
    $('p').bind('click', function() {
        console.log('click');
    });
    
    $('input').bind(
        'click change', // es posible vincular múltiples eventos al elemento
        { foo : 'bar'}, // se debe pasar la información asociada como argumento
        function (eventObject){
         console.log(eventObject.type, eventObject.data);
         // registra el tipo de evento y la información asociada { foo : 'bar'}
    
    
    });

  