const NUMBER_OF_LETTERS = 6


const keyboardControl = (keys, setKeys, newWord) => {
    const auxKeys = { ...keys }
    const word = {...newWord}
    const gridWord = word[0][word[0].length-1]===true||word[0][word[0].length-1]===false

    console.log(gridWord)
    const changer = (wordItem)=>{
        wordItem.forEach(item=> {
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
        for(let i=0;i<word.length;i++){
            console.log(word.slice(0,-1))
            changer(word[i].slice(0,-1))
        }
    }
    
    setKeys(auxKeys)
}
export default keyboardControl