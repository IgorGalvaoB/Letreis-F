
import isWordExists from "./isWordExists.controller"
const NUMBER_OF_LETTERS = 6


const click = async (event, select, setSelect, word, setWord, setBackWord, answer, attempt, setAttempt, wrongAnimation, setWrongAnimation) => {
    
    const charCode = event.keyCode
    
    
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

    if(65<=charCode&&charCode<=90){
        
        if(select!==null){
        
            setWord(word.slice(0,select).concat(String.fromCharCode(charCode)).concat(word.slice(select+1,NUMBER_OF_LETTERS)))
            handleSelect()

        }   

    } else if(charCode===8){

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
    } else if(charCode === 37){

        if(select === 0)return

        if(select === null){

            setSelect(NUMBER_OF_LETTERS-1)

        }else{

            setSelect(select - 1)

        }
        
    } else if(charCode === 39){

        if(select===NUMBER_OF_LETTERS - 1)return

        if(select === null){

            setSelect(0)

        } else{

            setSelect(select + 1)

        }
    } else if( charCode === 32 ){

        handleSelect(true)
        
    } else if( charCode === 13 ){

        try {
            const data = await isWordExists(word.join(""))
            //await compareAnswer˜
            setBackWord(data)
            setAttempt(attempt+1)
            setSelect(0)
            setWord((new Array(NUMBER_OF_LETTERS).fill('')))
        } catch (error) {
            console.log(error.message)
            setWrongAnimation(!wrongAnimation)
        }

    } else {
       
        return 

        
    }

    

}
export default click