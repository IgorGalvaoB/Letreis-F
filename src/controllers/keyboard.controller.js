
const keyboardControl = (keys, setKeys, word) => {
    const auxKeys = { ...keys }
    const gridWord = word[0][0]?true:false 
    const changer = (wordItem)=>{
        wordItem.forEach((item, index, arr) => {
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
                    break;
            }
            
    
        })
    }
    if(!gridWord){
        changer(word)
    }else{
        word.forEach(item=>{
            changer(item)
        })
    }
    
 
    setKeys(auxKeys)
}
export default keyboardControl