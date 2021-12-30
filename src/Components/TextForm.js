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
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
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
  <button className="btn btn-primary"onClick={handleUppercaseClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-3"onClick={handleLowercaseClick}>Convert to Lowercase</button>
  <button className="btn btn-primary"onClick={handleCopy}>Copy Text</button>
  <button className="btn btn-primary mx-3"onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color : props.mode === 'dark'?'white':'black'}}>
            <h2>Your text summary..</h2>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.008 * text.split(" ").length} Minute read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox to preview it here.."}</p>
        </div>
        </>
    )
}
