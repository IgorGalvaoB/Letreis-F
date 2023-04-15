import dicio from '../data/dicio';
const NUMBER_OF_LETTERS = 6
const isWordExists = async (word)=>{
    const compare = async (word2) => {
        const wordLowerCase = word2.toLowerCase()
        const dic = await fetch(dicio).then(r => r.text())
        const charsToReplace = { 'a': '(á|à|â|a|ã)', 'c': '(c|ç)', 'i': '(í|i|ì|î)', 'e': '(e|é|è|ê)', 'o': '(ó|ò|o|ô|õ)', 'u':'(ú|u|û|ù)' }
        const palavra = `\n${wordLowerCase}\n`
        const regex = palavra.replace(/[aiceou]/gi, c => charsToReplace[c])
        const teste = dic.match(regex)
        if (!teste) {
            return false
        } else {
            return teste[0].slice(1, -1)
        }
    }
    try {
        if(word.length !== NUMBER_OF_LETTERS){
            const error = new Error(`word length != ${NUMBER_OF_LETTERS}`)
            throw error
        }
        const backWord = await compare(word)
        if(!backWord){
            const error = new Error(`word does not exists`)
            throw error
        }
         
         return backWord.split("")
    } catch (error) {
    
        throw new Error(error.message)
    }
        
}

export default isWordExists
