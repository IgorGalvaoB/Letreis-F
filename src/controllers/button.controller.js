
import isWordExists from "./isWordExists.controller"
import compareAnswer from "./compareAnswer.controller"
import keyboardControl from "./keyboard.controller"

const button = async (letter, select, setSelect, word, setWord, setBackWord, answer, attempt, setAttempt, wrongAnimation, setWrongAnimation, setWon, keyboardKeys, setKeyboardKeys, NUMBER_OF_LETTERS,setAlertSnack,won) => {
    if(won){
        return;
    }
    const handleSelect = (space) => {
        if (select === null) return
        let aux = null
        let k = select + 1
        for (let i = 0; i < NUMBER_OF_LETTERS - 1; i++, k++) {

            if (k > NUMBER_OF_LETTERS - 1) {

                k = 0

            }
            if (!word[k]) {
                aux = k
                break
            }
        }

        if (space) {

            if (aux === null) {

                setSelect(word[select] ? aux : select)

            } else {

                setSelect(aux)

            }
        } else {

            setSelect(aux)

        }
    }
    const handleEnter=async()=>{
        try {

            const auxWord = await isWordExists(word.join(""), NUMBER_OF_LETTERS)
            const data = await compareAnswer(auxWord, answer, NUMBER_OF_LETTERS)
            setBackWord(data)
            data[NUMBER_OF_LETTERS] === true && setWon(true)
            setAttempt(attempt + 1)
            setSelect(0)
            setWord((new Array(NUMBER_OF_LETTERS).fill('')))
            keyboardControl(keyboardKeys, setKeyboardKeys, data)
            const arr = JSON.parse(localStorage.getItem(`Letreis${NUMBER_OF_LETTERS}`))
            if (arr && arr.date === new Date().toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }).slice(0, -10)) {
                arr.data.push(data)
                localStorage.setItem(`Letreis${NUMBER_OF_LETTERS}`, JSON.stringify(arr));
            } else {
                const date = new Date().toLocaleString("pt-BR", { timeZone: "America/Fortaleza" }).slice(0, -10)
                const newLog = {
                    data: [],
                    date: date
                }
                newLog.data.push(data)
                localStorage.setItem(`Letreis${NUMBER_OF_LETTERS}`, JSON.stringify(newLog));
            }
        } catch (error){
            switch(error.message){
                case "ESSA PALAVRA NÃO É ACEITA":
                    setAlertSnack({
                        message:error.message,
                        show:true,
                    })
                    setWrongAnimation(!wrongAnimation);
                    break;
                case `SÓ PALAVRAS COM ${NUMBER_OF_LETTERS} LETRAS`:
                    setAlertSnack({
                        message:error.message,
                        show:true,
                    })
                    setWrongAnimation(!wrongAnimation);
                    break;
                default:
                    console.log(error.message);
                    break;
            }
        }
    }
    switch (letter) {
        case "ENTER":

            handleEnter();
            break;
        case "DEL":
            if (select === null) {

                setSelect(NUMBER_OF_LETTERS - 1)
                setWord(word.slice(0, NUMBER_OF_LETTERS - 1).concat(''))

            } else {

                if (word[select]) {

                    setWord(word.slice(0, select).concat('').concat(word.slice(select + 1, NUMBER_OF_LETTERS)))

                } else {

                    if (select === 0) return

                    setWord(word.slice(0, select - 1).concat('').concat(word.slice(select, NUMBER_OF_LETTERS)))
                    setSelect(select === 0 ? 0 : select - 1)

                }
            }

            break;

        default:
            if (select !== null) {

                setWord(word.slice(0, select).concat(letter).concat(word.slice(select + 1, NUMBER_OF_LETTERS)))
                handleSelect()
            }

    }

}
export default button