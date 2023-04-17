
const compareAnswer = async (word, answer,NUMBER_OF_LETTERS) => {
    const auxAnswer = [...answer.split("")]
    const auxWord = [...word]

    const exactMatch = (str, strToMatch) => {
        
        for (let i = 0; i < NUMBER_OF_LETTERS; i++) {
            const match = !str[i].localeCompare(strToMatch[i], 'pt-BR', { sensitivity: 'base' })
            if (match) {
                
                const aux = {}
                aux[str[i]] = 2
                str[i] = aux
                strToMatch[i] = [strToMatch[i], 'matched']

            } else {
                
                const aux = {}
                aux[str[i]] = 0
                str[i]=aux
                strToMatch[i] = [strToMatch[i], 'notMatched']

            }
        }
    }
    const halfMatch = (str, strToMatch) => {
        
        for (let i = 0; i < NUMBER_OF_LETTERS; i++) {
            if (Object.values(str[i])[0] === 2) {
                continue
            }
            for (let j = 0; j < strToMatch.length; j++) {
                const matchedBefore = strToMatch[j][1] === 'matched'

                if (matchedBefore) {
                    continue
                }
                
                const match = !Object.keys(str[i])[0].localeCompare(strToMatch[j][0], 'pt-BR', { sensitivity: 'base' })

                if (match) {
            
                    const aux = Object.keys(str[i])[0]
                    str[i][aux] = 1
                    strToMatch.splice(j, 1)
                }

            }
        }


    }

    try {
        
        exactMatch(auxWord, auxAnswer)
    
        halfMatch(auxWord, auxAnswer)
    
        auxWord[auxWord.length] = auxWord.reduce((prev,current)=>{
    
            const aux = Object.values(current)[0]
    
            return prev+aux
            
        },0) 
    
        auxWord[auxWord.length-1] === NUMBER_OF_LETTERS*2?auxWord[auxWord.length-1]=true:auxWord[auxWord.length-1]=false
        
        return auxWord
    } catch (error) {
        console.log(error)
    }

    
}

export default compareAnswer