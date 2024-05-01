import React, {useState} from "react"

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        // setText("you have clicked on handle up click"); // correct way to change state
        props.showAlert("converted to UPPERCASE !","success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase !","success");

    }

    const handleClrClick = () => {
        let newText ='';
        setText(newText);
        props.showAlert("Cleared !","success");

    }

    const handleCopy = () => {
        let text1 = document.getElementById('myBox');
        text1.select();
        navigator.clipboard.writeText(text1.value);
        props.showAlert("Copied to Clipboard !","success");

    }
    
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra spaces !","success");

    }
    
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = "new text"; //wrong way to change the state 
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea placeholder="Enter text here!" className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#1f1f1f':'white', color: props.mode==='dark'?'white':'black'}} value= {text} id="myBox" rows="8"> </textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}> Cnvt to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}> Cnvt to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClrClick}> Clear</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Extra Spaces</button>
        </div>
        <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words , {text.length} characters</p>
            <p>needs {0.02 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter text to preview"}</p>
        </div>
        </>
    )
}