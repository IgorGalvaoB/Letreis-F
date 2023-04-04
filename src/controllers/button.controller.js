const NUMBER_OF_LETTERS = 6
const button = (word,letter,select,setSelect,setWord)=>{

    const handleSelect = (space) => {
        if(select===null)return
        let aux = null
        let k = select+1
        for(let i=0;i<NUMBER_OF_LETTERS-1;i++,k++){

            if(k>NUMBER_OF_LETTERS-1){

                k=0

            }
            if(!word[k]){
                aux = k
                break
            }
        }

        if(space){

            if(aux===null){

                setSelect(word[select]?aux:select)

            } else{

                setSelect(aux)

            }
            
        }else{

            setSelect(aux)

        }
    }
    switch(letter){
        case "ENTER":
            return;
        case "DEL":
            if(select === null){

                setSelect(NUMBER_OF_LETTERS-1)
                setWord(word.slice(0,NUMBER_OF_LETTERS-1).concat(''))
                
            }else{
    
                if(word[select]){
    
                    setWord(word.slice(0,select).concat('').concat(word.slice(select+1,NUMBER_OF_LETTERS)))
                    
                }else{
    
                    if(select===0)return
                    
                    setWord(word.slice(0,select-1).concat('').concat(word.slice(select,NUMBER_OF_LETTERS)))
                    setSelect(select===0?0:select-1)
    
                }
            }
           
            break;
            
        default:
            if(select!== null){

                setWord(word.slice(0,select).concat(letter).concat(word.slice(select+1,NUMBER_OF_LETTERS)))
                handleSelect()
            }
            
    }

}
export default button