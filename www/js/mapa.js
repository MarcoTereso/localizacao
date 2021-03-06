var app = {
    // Application Constructor
    initialize:function(){
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
  //chamamos o método getCurrentPosition, que se encaixe no nosso GPS dispositivo e descobre onde estamos. 
        navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
    },
  //O método onSuccess, e o objecto é passado para a posição-o.
   onSuccess: function(position){ 
    //definimos a nossa longitude
    var longitude = position.coords.longitude;
    //definimos a nossa latitude
    var latitude=position.coords.latitude;
//LAtLong é definido como um objeto pela nossa API de mapas do google e nossa localização
    var lastLong = new google.maps.LatLng(latitude, longitude);

    var mapOptions={
        //construido e passado para o objeto do mapa linha 54
        center:lastLong, //dizemos ao mapa para centrar a nossa posição
        zoom:16, //indicamos ao google maps o nosso nivel de zoom
        mapTypeId: google.maps.MapTypeId.ROADMAP //informamos o tipo de mapa
//ROADMAP, SATELLITE, HYBRID and TERRAIN
    };//vamos chamar o método de API do Google Maps na nossa div
    var map=new google.maps.Map(document.getElementById("geolocation"),mapOptions);
   },
   onError:function(error){
    alert('code:' +error.code +'\n' + 'message:' + error.message + '\n');
   },

};
