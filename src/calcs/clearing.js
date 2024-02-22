import { diasHabiles } from '../constants/diasHabiles.js'
import diasFeriados from '../data/feriados.json'

// Función para sumar dos días habiles (clearing bancario) saltandose los feriados y fines de semana
function sumarDiasHabiles(fecha, dias) {
  let fechaNueva = new Date(fecha)
  while (dias > 0) {
    let diaSemana = fechaNueva.getDay()
    let esDiaHabil = diasHabiles.includes(diaSemana) && !esFeriado(fechaNueva, diasFeriados)
    if (esDiaHabil) {
      dias--
    }
    fechaNueva.setDate(fechaNueva.getDate() + 1)
  }
  while (!diasHabiles.includes(fechaNueva.getDay()) || esFeriado(fechaNueva, diasFeriados)) {
    fechaNueva.setDate(fechaNueva.getDate() + 1)
  }
  return fechaNueva
}

// Funcion que verifica si el dia se encuentra en el array de dias feriados
function esFeriado(fecha, diasFeriados) {
  let fechaStr = fecha.getDate() + '/' + (fecha.getMonth() + 1) + '/' + fecha.getFullYear()
  return diasFeriados.includes(fechaStr)
}

// La funcion calcula la diferencia de días entre la fecha de cobro y la fecha seleccionada
export const diasParaCobrar = fechaCobro => {
  let fechaCobroFinal = sumarDiasHabiles(fechaCobro, 2)
  let diferenciaDias = Math.ceil((fechaCobroFinal - fechaCobro) / (1000 * 60 * 60 * 24))
  return diferenciaDias
}
