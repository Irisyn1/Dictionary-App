import react, {useEffect, useState} from "react";

const Word = () => {

    const [def, setDef] = useState("hello")
    const [meaning, setMeaning] = useState('')
    const getWord = async() => {
        // console.log("button press");
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${def}`);
        // console.log(response);
        const result = await response.json();
        // console.log (result);
        // setDef(result.definitions)
        // console.log(outcome);
        // setMeaning(outcome);
        if (result.title === "No Definitions Found") {
            setMeaning(result.message);
        }else {
            setMeaning(result[0].meanings[0].definitions[0].definition)
        }
    }


    const formHelper =(event) => {
        event.preventDefault()
        // console.log(event.target.word.value);
        setDef(event.target.word.value);
    }

    useEffect(()=>{
        getWord();}, [def]
    )
    
    

    return <>
        <div className="section">
            <div className="content">
                <h1> Cool Dictionary </h1>
                <div className="form">
                    <form className="input" onSubmit={(event)=> formHelper(event)}>
                        <input type="text" id="word" placeholder="Type a word"></input>
                        <button onClick={()=>getWord()} id="search">Search</button>
                    </form>
                </div>

                <div className="data">{meaning}</div>
            </div>
        </div>
    </>
}

export default Word;
