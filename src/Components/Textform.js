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
        navigator.clipboard.writeText(text);
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
            <h1 className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text}  onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#3f4661':'white', color: props.mode === 'dark'?'white':'#040c30'}} id="myBox" rows="10"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>  
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-2" style={{color: props.mode === 'dark'?'white':'#040c30'}}>
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Nothing to Preview!"}</p>
        </div>
        </>
  ) 
}
