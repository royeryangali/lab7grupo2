$(document).ready(function () {

    // Metodo de obtención de parámetros
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const CC = urlParams.get('countryCode');
    const slug = urlParams.get('slug');

    // TODO: Metodo para cambiar el href, cambiar de acuerdo a la conveniencia
    $("#redirect-grafico").attr("href", '');

    var bandera = document.getElementById("bandera-div");
    bandera.innerHTML = "<img src='https://www.countryflags.io/" + CC + "/flat/64.png'>"
    /*$.ajax({
     method: "GET",
     dataType: "image/png",
     crossDomain: true,
     url: "https://www.countryflags.io/PE/flat/64.png"
     })
     .done(function (msg) {
     console.log(msg);
     $("#bandera-div").html(msg);

     //todo funcion
     }).fail(function (error) {
     console.log(error);

     });
     */

//
    // todo insertar a la tabla
    var tabla = document.getElementById("Tabla1");
    $.ajax({
        method: "GET",
        crossDomain: true,
        url: "https://restcountries.eu/rest/v2/alpha/" + CC
    })
        .done(function (msg) {
            console.log(msg);
            tabla.innerHTML =
                "<tr>" +
                "<td> Capital </td>" +
                "<td> " + msg.capital + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td> Poblacion </td>" +
                "<td> " + msg.population + "</td>" +
                "</tr>" +
                "<tr>" +
                "<td> Sub region </td>" +
                "<td> " + msg.subregion + "</td>" +
                "</tr>"
            //todo funcion
        }).fail(function (error) {
        console.log(error);
    });









    var tabla2 = document.getElementById("casos-pais");
    //
    $.ajax({
        method: "GET",
        crossDomain: true,
        url: "https://api.covid19api.com/total/dayone/country/"+slug+"/status/confirmed"
    })
        .done(function (msg2) {
            console.log(msg2);
            var i;
            var text = "";
            for (i = 0; i < msg2.length; i++) {
                text += "<tr align='center' >";
                text += "<td> " + fechasas(msg2[i].Date) + "</td>";
                text += "<td> " + msg2[i].Cases + "</td>";
                text += "</tr>";
            }

            tabla2.innerHTML = text;


            //todo funcion
        }).fail(function (error2) {
        console.log(error2);
    });

    function fechasas(string){
        var lomejor = "";
        lomejor += string.substring(0, 4);
        lomejor += "/";
        lomejor += string.substring(5, 7);
        lomejor += "/";
        lomejor += string.substring(8, 10);
        return lomejor;
    }

    //tabla.innerHTML =

    // TODO: Consultas a la web service
});
