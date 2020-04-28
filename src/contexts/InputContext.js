import React, { useState, createContext } from 'react'



export const InputContext = createContext();

export const InputProvider = props => {

    const [inputsValue, setInputs] = useState( 
        {
        inputValueClient: "-",
        inputValueFeature: "-",
        inputValueSubject: "-",
        contentValueSubject: "-",
        contentValueTips: "-",
        fade: false,
        suggestion:"",
        tips:""
      });

return <InputContext.Provider value={[inputsValue, setInputs]}>{props.children}</InputContext.Provider>
    
}

