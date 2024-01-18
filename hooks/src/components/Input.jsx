import React, { useState } from 'react'
import useStorage from './useStorage';
const InputField = () => {

    // let [inputValue,setInputValue] = useState("")
    let [value,updateValue] = useStorage("InputData")
    function savingValues(e) {
        let data = e.target.value;
        // setInputValue(data)
        updateValue(data);
    }

    return (
        <>
        <div>
            <input type="text" placeholder='Enter Here' onChange={savingValues}/>

            <h3>data stored : {value}</h3>
        </div>
        </>
    )
}
export default InputField