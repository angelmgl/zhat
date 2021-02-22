export function timeSinceDate(date) {
    if (!date) return ''

    //2021-02-13T19:35:56.797952Z

    const day = date.substr(8,2) //desde la posición 8 recorta 2 = 13
    const month = date.substr(5,2) //desde la posición 5 recorta 2 = 02
    const year = date.substr(0,4) //desde la posición 0 recorta 4 = 2021

    const hour = date.substr(11,2) //desde la posición 11 recorta 2 = 19
    const minute = date.substr(14,2) //desde la posición 14 recorta 2 = 35
    const second = date.substr(17,2) //desde la posición 17 recorta 2 = 56

    var sent = new Date(`${month} ${day} ${year}`) //crea una nueva fecha
    sent.setHours(hour) // establece las horas minutos y segundos
    sent.setMinutes(minute)
    sent.setSeconds(second)
    sent = sent.toString() //convierte a string

    const dayStr = sent.substr(0, 10) //de 0 a 10 es el dia
    const timeStr = sent.substr(15, 6) //de 15 a 21 es la hora
    return `${dayStr} at ${timeStr}` //devuelve Feb 12 2021 at 19:35:56
}

export function daySinceSent(date) { //tiempo desde que fue enviado
    if (!date) return ''
    const day = date.substr(8,2)
    const month = date.substr(5,2)
    const year = date.substr(0,4)
    const sent = new Date(`${month} ${day} ${year}`).toString()
    return sent.substr(4, 6)
}
