var datos;

async function leerJSON() {
    try {
        let respuesta = await fetch('https://martinmedinaruvian.github.io/json/covid19ColombiaMarzo.json');
        datos = await respuesta.json();
    } catch (error) {
        console.log(error);
    }
}


async function cargarFuncionesDptos() {
    await leerJSON();
    construirSelectorDepartamentos();
    mostrarTabla_and_Torta();
}


async function cargarFuncionesMunicipios() {
    await leerJSON();
    construirSelectorMunicipios();
    mostrarTabla_and_Torta2();
}

async function cargarFuncionesTodos() {
    await leerJSON();
    mostrarTabla_and_Barras3();
    mostrarAndSumarCasosAcumulado();
}

function getDepartamentos() {
    let arregloDptos = [];
    for (let i = 0; i < datos.length; i++) {
        arregloDptos.push(datos[i].departamento_nom);
    }
    return arregloDptos;
}

function getMunicipios() {
    let arregloMunicipios = [];
    for (let i = 0; i < datos.length; i++) {
        arregloMunicipios.push(datos[i].ciudad_municipio_nom);
    }
    return arregloMunicipios;
}


function getDepartamentosNoRepetidos(arregloDptos) {
    let arregloNoRepetido = new Set(arregloDptos);
    arregloNoRepetido = Array.from(arregloNoRepetido);
    arregloNoRepetido.sort();
    return arregloNoRepetido;
}

function getMunicipiosNoRepetidos(arregloMunicipios) {
    let municipioNoRepetido = new Set(arregloMunicipios);
    municipioNoRepetido = Array.from(municipioNoRepetido);
    municipioNoRepetido.sort();
    return municipioNoRepetido;
}

function construirSelectorDepartamentos() {

    let arregloDptos = getDepartamentosNoRepetidos(getDepartamentos());
    let cadena = "";

    for (let i = 0; i < arregloDptos.length; i++) {

        cadena += `<option value="${arregloDptos[i]}">${arregloDptos[i]}</option>`;
    }
    document.getElementById("depSelect").innerHTML = cadena;
}

function construirSelectorMunicipios() {

    let arregloMunicipios = getMunicipiosNoRepetidos(getMunicipios());
    let msg = "";

    for (let i = 0; i < arregloMunicipios.length; i++) {

        msg += `<option value="${arregloMunicipios[i]}">${arregloMunicipios[i]}</option>`;
    }
    document.getElementById("munSelect").innerHTML = msg;
}

function mostrarCasosDepartamentoSexo(dpto, tipoSexo) {

    let sumaCasosTotal = 0;
    let casosHombres = 0;
    let casosRta = 0;


    for (let i = 0; i < datos.length; i++) {
        if (datos[i].departamento_nom == dpto) {
            sumaCasosTotal++;
            if (datos[i].sexo == "M") casosHombres++;
        }
    }

    if (tipoSexo == 1) casosRta = casosHombres;
    else casosRta = sumaCasosTotal - casosHombres;

    return casosRta;
}

function mostrarCasosMunicipiosFuente(municip, tipoFuente) {

    let casosRelacionados = 0;
    let casosImportados = 0;
    let casosRta = 0;

    for (let i = 0; i < datos.length; i++) {

        if (datos[i].ciudad_municipio_nom == municip) {

            if (datos[i].fuente_tipo_contagio == "Relacionado") casosRelacionados++;
            if (datos[i].fuente_tipo_contagio == "Importado") casosImportados++;
        }
    }


    if (tipoFuente == 1) casosRta = casosRelacionados;
    else casosRta = casosImportados;

    return casosRta;
}


function mostrarTabla_and_Torta() {
    let select = document.querySelector("#depSelect");
    let departamento = select.options[select.selectedIndex].value;

    let casosHombres = mostrarCasosDepartamentoSexo(departamento, 1);
    let casosMujeres = mostrarCasosDepartamentoSexo(departamento, 2);

    crearTablaGoogleCharts(2, "Masculino", "Femenino", casosHombres, casosMujeres, 1, "table_div");
    crearGraficoTorta(2, "Masculino", "Femenino", casosHombres, casosMujeres, "piechart_3d");

    document.getElementById("dpto").innerHTML = "Departamento: " + departamento;

}

function mostrarTabla_and_Torta2() {
    let select = document.querySelector("#munSelect");
    let municipio = select.options[select.selectedIndex].value;

    let relacionado = mostrarCasosMunicipiosFuente(municipio, 1);
    let importado = mostrarCasosMunicipiosFuente(municipio, 2);

    crearTablaGoogleCharts(2, "Relacionado", "Importado", relacionado, importado, 2, "table_div2");
    crearGraficoTorta(2, "Relacionado", "Importado", relacionado, importado, "piechart_3d2");

    document.getElementById("muncip").innerHTML = "Municipio: " + municipio;
}

function mostrarTabla_and_Barras3() {
    crearTablaGoogleCharts3();
    crearGraficoBarras();
}


function crearTablaGoogleCharts(cantidadFilas, tipo1, tipo2, casos1, caso2, tipoEncabezado, idDiv) {

    var data = new google.visualization.DataTable();

    if (tipoEncabezado == 1) crearEncabezadosTabla(data);
    else crearEncabezadosTabla2(data);

    data.addRows(cantidadFilas);
    //Filas y columnas setCell(indicefila, indiceColumna, dato)
    data.setCell(0, 0, tipo1);
    data.setCell(0, 1, casos1);
    data.setCell(1, 0, tipo2);
    data.setCell(1, 1, caso2);

    var table = new google.visualization.Table(document.getElementById(idDiv));

    var cssClassNames = { headerCell: 'bg-primary text-white text-center p-2', tableCell: 'text-center p-2', hoverRowNumberCell: 'text-white' };
    let opcionesTabla = { showRowNumber: true, width: '50%', height: '100%', cssClassNames: cssClassNames };
    table.draw(data, opcionesTabla);
}

function crearTablaGoogleCharts3() {

    var data = new google.visualization.DataTable();

    let arregloDptos = getDepartamentosNoRepetidos(getDepartamentos());
    let arregloCasos = obtenerCasosDptos();


    crearEncabezadosTabla3(data);
    data.addRows(arregloDptos.length);

    //Filas y columnas setCell(indicefila, indiceColumna, dato)
    for (let i = 0; i < arregloDptos.length; i++) {
        data.setCell(i, 0, arregloDptos[i] + "");
        data.setCell(i, 1, arregloCasos[i]);
    }

    var table = new google.visualization.Table(document.getElementById('table_div3'));

    var cssClassNames = { headerCell: 'bg-primary text-white text-center p-2', tableCell: 'text-center p-2', hoverRowNumberCell: 'text-white' };
    let opcionesTabla = { showRowNumber: true, width: '50%', height: '100%', cssClassNames: cssClassNames };
    table.draw(data, opcionesTabla);

}


function mostrarAndSumarCasosAcumulado() {
    let arregloCasos = obtenerCasosDptos();
    let acumulado = 0;

    for (let i = 0; i < arregloCasos.length; i++) {
        acumulado += arregloCasos[i];
    }

    document.getElementById("acumul").innerHTML = acumulado;
}


function crearGraficoTorta(cantidadFilas, tipo1, tipo2, casosHombres, casosMujeres, idDiv) {
    var data2 = new google.visualization.DataTable();
    crearEncabezadosTorta(data2);
    data2.addRows(cantidadFilas);
    //Crear tabla para graficar:
    data2.setCell(0, 0, tipo1);
    data2.setCell(0, 1, casosHombres);
    data2.setCell(1, 0, tipo2);
    data2.setCell(1, 1, casosMujeres);

    var options = {
        title: 'Casos positivos de Coronavirus:',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById(idDiv));
    chart.draw(data2, options);

}


function crearGraficoBarras() {

    var data2 = new google.visualization.DataTable();
    let dptos = getDepartamentosNoRepetidos(getDepartamentos());
    let casos = obtenerCasosDptos();


    crearEncabezadosBarra(data2);
    data2.addRows(dptos.length);



    for (let i = 0; i < dptos.length; i++) {
        data2.setCell(i, 0, dptos[i] + "");
        data2.setCell(i, 1, casos[i]);
    }

    var options = {
        title: 'Casos positivos de COVID de cada departamento:',
        bar: { groupWidth: '85%' },
        chartArea: { width: '55%' },
        hAxis: {
            title: 'Casos Positivos',
            minValue: 0
        },
        vAxis: {
            title: 'Departamentos'
        }
    };

    var chart = new google.visualization.BarChart(document.getElementById('bar_chart'));
    chart.draw(data2, options);
}



function crearEncabezadosTabla(data) {
    data.addColumn('string', 'Sexo');
    data.addColumn('number', 'Casos Positivos');

}


function crearEncabezadosTabla2(data) {
    data.addColumn('string', 'Tipo de Contagio');
    data.addColumn('number', 'Casos Positivos');

}


function crearEncabezadosTabla3(data) {
    data.addColumn('string', 'Departamentos');
    data.addColumn('number', 'Casos Positivos');

}


function crearEncabezadosTorta(data2) {
    data2.addColumn('string', 'Descripción');
    data2.addColumn('number', 'Valor');


}

function crearEncabezadosBarra(data2) {
    data2.addColumn('string', 'Departamento');
    data2.addColumn('number', 'Casos positivos');

}


function obtenerCasosDptos() {
    let sumasCasosDptos = [];
    let arregloDptos = getDepartamentosNoRepetidos(getDepartamentos());
    for (let i = 0; i < arregloDptos.length; i++) {
        sumasCasosDptos.push(mostrarTotalCasos(arregloDptos[i]));
    }

    return sumasCasosDptos;
}

function mostrarTotalCasos(departamento) {

    let sumatoria = 0;
    for (let i = 0; i < datos.length; i++) {
        if (datos[i].departamento_nom == departamento) {
            sumatoria++;
        }
    }
    return sumatoria;
}
