import { diasHabiles } from '../constants/diasHabiles.js'
import diasFeriados from '../data/feriados.json'

// Función para sumar días hábiles saltandose los feriados y fines de semana
function sumarDiasHabiles(fecha, dias) {
  let fechaNueva = new Date(fecha)
  while (dias > 0) {
    fechaNueva.setDate(fechaNueva.getDate() + 1)
    let diaSemana = fechaNueva.getDay()
    console.log(diaSemana)
    let esDiaHabil = diasHabiles.includes(diaSemana) && !esFeriado(fechaNueva, diasFeriados)

    if (esDiaHabil) {
      dias--
    }
  }
  return fechaNueva
}

// Funcion que verifica si el dia se encuentra en el array de dias feriados
function esFeriado(fecha, diasFeriados) {
  let fechaStr = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear()
  return diasFeriados.includes(fechaStr)
}

export const diasParaCobrar = fecha => {
  let fechaCobro = new Date(fecha)
  let fechaCobroFinal = sumarDiasHabiles(fechaCobro, 2)
  let diferenciaDias = Math.ceil((fechaCobroFinal - fechaCobro) / (1000 * 60 * 60 * 24))
  return diferenciaDias
}
