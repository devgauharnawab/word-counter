import React, { useState } from 'react'

export default function TextForm(props) {
    // is a array distructuring syntax
    //we have to create functions
    const handleUpprCase = () => {
        console.log("Upper case was clicked" + text)
        //to upper case
        let newText = text.toUpperCase();
        setText(newText);
    }
    //convert to lower case
    const handleLowerCase = () => {
        let text1 = text.toLowerCase();
        setText(text1);
    }
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value)
    }
    //clear the text
    const handleClearText = () => {
        setText('');
    }
    //copy to clipboard
    const handleCopyToClipboard = () => {
        const textarea = document.getElementById('myBox');
        textarea.select();
        document.execCommand('copy');
    }
    // handle capitalized case
    const handleCapitalizeCase = () => {
        let text2 = text.replace(/\b\w/g, char => char.toUpperCase());
        setText(text2);
    }
    //download the text

    const handleDownloadText = () => {
        const blob = new Blob([text], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'text.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    //speak
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }
    const [text, setText] = useState('')
    return (
        <>
          <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743' }}>

                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3 my-3">
                    <textarea className="form-control" value={text} style={{backgroundColor:props.mode === 'dark'?'#13466e':'white',color: props.mode === 'dark' ? 'white' : '#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" onClick={handleUpprCase} className="btn btn-primary mx-2 my-2">UPPER CASE</button>
                <button type="button" onClick={handleLowerCase} className="btn btn-secondary my-2">LOWER CASE</button>
                <button type="button" onClick={handleClearText} className="btn btn-info mx-2 my-2">CLEAR TEXT</button>
                <button type="button" onClick={handleCopyToClipboard} className="btn btn-success my-2">COPY SENTENCE</button>
                <button type="button" onClick={handleCapitalizeCase} className="btn btn-dark mx-2 my-2">CAPITALIZED TEXT</button>
                <button type="button" onClick={handleDownloadText} className="btn btn-warning mx-2 my-2">DOWNLOAD TEXT</button>
                <button type="button" onClick={speak} className="btn btn-primary mx-2">SPEAK</button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(/\s+/).filter(word => word.length > 0).length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter Something to preview it here.."}</p>
            </div>

        </>
    )
}
