// middleware pattern (chain of responsability)

// 1. Passamos o contexto.
// 2. Chamamos a próxima instrução utilizando a função next()
const passo1 = (ctx, next) => {
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

// Aqui passamos apenas o contexto
const passo3 = ctx => ctx.valor3 = 'mid3'

const exec = (ctx, ...middlewaes) => {
    const execPasso = indice => {
        middlewaes && indice < middlewaes.length && 
        middlewaes[indice](ctx, () => execPasso(indice + 1))
    }
    execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)