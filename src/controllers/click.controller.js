const click = (event, select, setSelect, word, setWord) => {
    console.log(event)
    const wor = [...word]
    const handleSelect = () => {
        if (select !== 5) {
            if (word[select + 1] === '') {
                wor[select] = "A"
                setWord(wor)
                setSelect(select+1)
            }
        }else{
            wor[5] = 'a'
            setWord(wor)
        }
    }
    handleSelect()
}
export default click