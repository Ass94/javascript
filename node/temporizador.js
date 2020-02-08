const schedule = require('node-schedule')

// Executar de 5 em 5 segundos às 6h ignorando mês e semana no sábado.
const tarefa1 = schedule.scheduleJob('*/5 * 6 * * 7', function () {
    console.log('Excecutando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Cancelamento Tarefa 1!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1, 5)]
regra.hour = 6
regra.second = 30

const regra2 = schedule.scheduleJob(regra, function() {
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})

