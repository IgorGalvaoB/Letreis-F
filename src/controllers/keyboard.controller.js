const NUMBER_OF_LETTERS = 5


const keyboardControl = (keys, setKeys, word) => {
    const auxKeys = { ...keys }

    word.forEach((item, index, arr) => {
        if (arr.length === index + 1) {
            return
        }
        const letter = Object.keys(item)[0]
        const keyboardLetter = letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        
        switch(item[letter]){
            case 0:
                if(auxKeys[keyboardLetter]>0){
                    break;
                }
                auxKeys[keyboardLetter]=-1
                break;
            case 1:
                if(auxKeys[keyboardLetter]>1){
                    break;
                }
                auxKeys[keyboardLetter]=1
                break;
            case 2:
                auxKeys[keyboardLetter]=2
                break;
            default:
                console.log(letter)
                break;
        }
        

    })
    
 
    setKeys(auxKeys)
}
export default keyboardControl