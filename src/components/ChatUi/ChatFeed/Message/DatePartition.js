import React, { Component } from 'react'

const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

export default class DatePartition extends Component {
    getDate(date) {
        return date ? date.substr(0, 10) : null
    }

    formatDate(date_time) {
        const year = date_time.substr(0, 4)
        const monthIndex = parseInt(date_time.substr(5, 2)) - 1
        const month = months[monthIndex]
        const day = date_time.substr(8, 2)

        var time = date_time.substr(11, 5)
        var timeSuffix = ''

        //si la hora es menor o igual a 12, conservar
        if(parseInt(time.substr(0, 2)) >= 12){
            //si la hora es mayor a 12, restar 12
            //13hs - 12 = 1 pm
            if(parseInt(time.substr(0, 2)) > 12){
            time = String(parseInt(time.substr(0, 2)) - 12) + ':' + time.substr(3, 2)
            }
            timeSuffix = 'PM'

        } else {
            timeSuffix = 'AM'
        }

        return time + timeSuffix + ', ' + month + ' ' + day + ', ' + year
    }

    render() {
        //las props traen la fecha del último mensaje enviado
        //y la fecha del mensaje actual
        const { lastCreated, created } = this.props

        //sacamos el día de ambas fechas
        const lastDate = this.getDate(lastCreated)
        const thisDate = this.getDate(created)

        //si el último mensaje fue hoy no hace falta mostrar fecha
        if (lastCreated && lastDate === thisDate ) {
            return <div />
        }

        //de otra manera, enviar un separador de fecha
        return (
            <div className='ce-message-date-text'>
                { this.formatDate(created) }
            </div>
        )
    }
}