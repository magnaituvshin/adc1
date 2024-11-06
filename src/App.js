import React, {useState, useEffect} from "react";
import dice from "./images/dice.svg";
import divider from "./images/divider.svg";
import "./App.css";
const App = ()=> {
    const [advice, setAdvice] = useState('');
    const [id, setId] = useState('');
    const fetchData = async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const result = await response.json();
        setAdvice(result.slip.advice);
        setId(result.slip.id);
    }
    useEffect(() => {
        fetchData();
    }, []);
    return(
        <div className="container">
            <p className="adviceNumber">ADVICE #{id}</p>
            <p className="advice">"{advice}"</p>
            <img className="divider" src={divider} />
            <button onClick={fetchData}>
                <img src={dice}/>
            </button>
        </div>
    );
}
export default App; 
