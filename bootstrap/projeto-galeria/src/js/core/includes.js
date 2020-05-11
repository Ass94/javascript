import $ from 'jquery' // importa o jquery do node_modules e atruibui a variável $

const loadHtmlSuccessCallbacks = []

export function onLoadHtmlSuccess(callback){
    // Se não estiver incluida no array
    if(!loadHtmlSuccessCallbacks.includes(callback))
        // Adiciona
        loadHtmlSuccessCallbacks.push(callback)
}

// Irá ler as propriedade wm-include
function loadincludes(parent) {
    // Se vazio, procurar em todo body
    if(!parent) parent = 'body'
    // buscar pela propriedade wm-include.
    $(parent).find('[wm-include]').each(function(i, e){
        const url = $(e).attr('wm-include')
        $.ajax({
            url,
            success(data) {
                $(e).html(data)
                $(e).removeAttr('wm-include')
                
                loadHtmlSuccessCallbacks.forEach(callback => callback(data))
                loadincludes(e) // Para carregar tudo de forma recursiva.
            }
        })
    })
}

// Passando vazio ele irá passar o body como primeiro parent. Logo, irá verificar tudo dentro de body
loadincludes()
