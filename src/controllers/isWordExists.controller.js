import dicio from '../data/dicio';

const isWordExists = (word,setBackWord,backWord)=>{
    const compare = async (word2) => {
        const wordLowerCase = word2.toLowerCase()
        const dic = await fetch(dicio).then(r => r.text())
        const charsToReplace = { 'a': '(á|à|â|a|ã)', 'c': '(c|ç)', 'i': '(í|i|ì|î)', 'e': '(e|é|è|ê)', 'o': '(ó|ò|o)' }
        const palavra = `\n${wordLowerCase}\n`
        const regex = palavra.replace(/[aiceo]/gi, c => charsToReplace[c])
        const teste = dic.match(regex)
        if (!teste) {
            return false
        } else {
            return teste[0].slice(1, -1)
        }
    }
    
}

export default isWordExists
