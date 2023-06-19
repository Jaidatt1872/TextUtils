import React, {useState} from 'react'


export default function Textform(props) {
    
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" Converted to Uppercase", "success ");
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" Converted to Lowercase", "success ");
    }

    const handleClearClick = ()=>{
        let newText = ('');
        setText(newText);
        props.showAlert(" Cleared Text", "success ");
    }

    const handleCopy = ()=>{
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text copied to Clipboard", "success ");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/); 
        setText(newText.join(" "));
        props.showAlert(" Removed Extra spaces", "success ");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    
    return (
        <>
        <div className='container' style={{color: props.mode === 'dark'?'white':'#040c30'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#040c30'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>  
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#040c30'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(" ").length} words {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter text in the above box to preview it here"}</p>
        </div>
        </>
  ) 
}
