module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePonctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')
                .map(word => word.toLowerCase())
                .map(word => word.replace('"', ''))

            resolver(words)
        } catch (e) {
            reject(e)
        }
    })
}

function filterValidRow(row) {
    // se retornar verdadeiro: é pq nao tenho um numero e trim retira epaços em branco
    const notNumber = !parseInt(row.trim())
    // se a linha for diferente de vazia
    const notEmpty = !!row.trim()
    // se n é um intervalo (00:00:01, ---> ...)
    const notInterval = !row.includes('-->')
    return notNumber && notEmpty && notInterval
}


const removePonctuation = row => row.replace(/[,.?!-]/g, '')

const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim()

const mergeRows = (fullText, row) => `${fullText} ${row}`