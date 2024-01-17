import React, { useState } from 'react'


export default function About(props) {
    //for dark mode
    // const [myStyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor: '#28282B'
    // });

    // const [btnText, setBtnText] = useState('Enable Dark Mode');
    let myStyle = {
        color : props.mode ==='dark'?'white':'#042743',
        backgroundColor : props.mode === 'dark'?'rgb(36,74,104)':'white',
    }

    // Condition to enable toggle
    // let toggleStyle = () => {
    //     if (myStyle.color === 'white') {
    //         setMyStyle({
    //             color: '#28282B',
    //             backgroundColor: 'white',
    //             border: '2px solid white'
    //         });
    //         setBtnText('Enable Dark Mode');
    //     } else {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: '#28282B'
    //         });
    //         setBtnText('Enable Light Mode');
    //     }
    // };


    return (
        <div className="container">
            <h2 className="my-2" style={{color:props.mode ==='dark'?'white':'#042743'}}>About us </h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Analyze your text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Word count gives you a way to analyze your text quickly and efficiently be it word count,character count,speak your words.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to use
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>Word count is a free character tool that provides instant character count & word count statistics for a given text. Word count reports the number of words and characters.Thus it is a suitable for writing text with word / character limits.</strong>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser Compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            <strong>This Software works in any browser such as Chrome, Firefox,yahoo,Internet Explorer, Safari, Opera By Gauhar Nawab.</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
