$(document).ready(function () {
    // TODO, consultas a las web services

    $.ajax({
        method: "GET",
        dataType: "json",
        url: "https://api.covid19api.com/summary"
    }).done(function (data) {

        console.log(data);
        $("#newConfirmed").html(data.Global.NewConfirmed);
        $("#totalConfirmed").html(data.Global.TotalConfirmed);
        $("#newDeaths").html(data.Global.NewDeaths);
        $("#totalDeaths").html(data.Global.TotalDeaths);
        $("#newRecovered").html(data.Global.NewRecovered);
        $("#totalRecovered").html(data.Global.TotalRecovered);

        var lista = data.Countries;
        var contentHtml = "";
        listaordenada = lista.sort(compare);
        console.log(listaordenada);
        $.each(listaordenada, function (i, country) {
            var a = i + 1;
            contentHtml += "<tr>";
            contentHtml += "<td>" + a + "</td>";
            contentHtml += "<td>" + country.Country + "</td>";
            contentHtml += "<td>" + country.TotalConfirmed + "</td>";
            contentHtml += "<td>" + country.TotalDeaths + "</td>";
            contentHtml += "<td>" + country.TotalRecovered + "</td>";
            contentHtml += "<td>" + country.NewConfirmed + "</td>";
            contentHtml += "<td>" + country.NewDeaths + "</td>";
            contentHtml += "<td>" + country.NewRecovered + "</td>";
            contentHtml += "<td>" + "<a class='btn btn-primary btn-block' href='"+'detallePais/detallePais.html?name=' + country.Country +
                '&slug=' + country.Slug + '&countryCode=' + country.CountryCode + "' role = 'button'>Ver Detalles </a>" + "</td >";
            contentHtml += "<tr>";
        })
        $("#body-paises").html(contentHtml);


    }).fail(function (err) {
        var jsonData = err.responseJSON;
        console.log(jsonData.msg);
        alert(jsonData.msg);
        return false;
    })
})
;


function compare(a, b) {

    const bandA = a.TotalConfirmed;
    const bandB = b.TotalConfirmed;
    let comparison = 0;
    if (bandA < bandB) {
        comparison = 1;
    } else if (bandA > bandB) {
        comparison = -1;
    }
    return comparison;


}

// Función para devolver un formato de fecha
function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    // TODO
    return '';
}


