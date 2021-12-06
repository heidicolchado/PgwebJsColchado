$(".n-expert").fadeOut("fast");
$("#expertos").on("click", function(){

$(".n-expert").fadeIn(3000);

})


$("#brand").click(()=> {
    $.ajax({
        method:"GET", 
        url: "js/Datos.json",
        success: function(respuesta) {
            var contenido = "<p> ";
            for (let Datos of respuesta){
                contenido += Datos.imagen 
                contenido += "</p>"; 
            }
            $ (".contact-us").append(contenido);

        }
    })
})

