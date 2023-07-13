import React from 'react'

export default function About(props) {

    //const [myStyle, setmyStyle] = useState({
    //   color: 'black',
    //    backgroundColor: 'white',
    //    border: '1px solid white'
    //})
    let myStyle = {
        color: props.mode === 'dark'?'white':'#040c30',
        backgroundColor: props.mode === 'dark'?'#3f4661':'white'
    } 

  return (
    <div className='container'>
        <h1 className='my-3' style={{color: props.mode === 'dark'?'white':'#040c30'}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <strong>Analyze Your Text</strong>
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or anything.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong>Free to Use</strong>
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                TextUtils is a  free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word / character limit.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong>Browser Compatible</strong>
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
                This word counter software works i any web browsers such as Chrome, Firefox, Edge, Safari, Opera, etc. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
