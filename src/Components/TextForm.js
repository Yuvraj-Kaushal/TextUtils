import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUppercaseClick = () => {
        // console.log("Uppercase was clicked.." + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase..", "success");
    }

    const handleLowercaseClick = () => {
        // console.log("Lowercase was clicked.." + text)
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase..", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied..", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("ExtraSpaces Removed..", "success");
    }
    
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
        <div className='container' style={{color : props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'grey':'white' , color : props.mode === 'dark'?'white':'black'}} id="myBox" rows="9"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleUppercaseClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleLowercaseClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary..</h2>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Minute read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview.."}</p>
        </div>
        </>
    )
}
