const fechaActual = new Date();
const añoActual = fechaActual.getFullYear();
const hoy = fechaActual.getDate();
const mesActual = fechaActual.getMonth() + 1;
console.log(`${hoy}/${mesActual}/${añoActual}`);
const date = document.createElement("h1")

const diaDeMuertos = new Date(fechaActual.getFullYear(), 10, 2);
var mesesRestantes = diaDeMuertos.getMonth() - fechaActual.getMonth();
const diasEnEsteMes = new Date(fechaActual.getFullYear(), fechaActual.getMonth() + 1, 0).getDate();
const diasRestantesEnEsteMes = diasEnEsteMes - fechaActual.getDate();
var diasRestantesTotales = diasRestantesEnEsteMes +  diaDeMuertos.getDate();
if (diasRestantesTotales >= diasEnEsteMes) {
    diasRestantesTotales -= diasEnEsteMes;
}

date.innerText=`Fecha Actual : ${hoy}/${mesActual}/${añoActual}, Faltan ${mesesRestantes}  mes(es) y ${diasRestantesTotales} día(s) para el Día de Muertos.`;

document.body.append(date)

function changeImage() {
        var image = document.getElementById('my-image');
        if (image.src.match("on")) {
            image.src = "https://img.icons8.com/cotton/100/christmas-candle.png";
           
        } else {
             image.src = "https://img.icons8.com/cotton/100/christmas-candle--v2.png";
        }
    }

function cambiarFondo() { 
        var nuevaImagen = 'https://i0.wp.com/mexicodailypost.com/wp-content/uploads/2021/10/el-hombre-del-sombreron.jpg?fit=1200%2C675&ssl=1'; 
        document.body.style.backgroundImage = 'url(' + nuevaImagen + ')'; // Establecer la nueva imagen de fondo
    }