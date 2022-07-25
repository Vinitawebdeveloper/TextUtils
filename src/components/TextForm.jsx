import React, {useState} from 'react';



export default function Textform(props)
{
  const handleUpClick=()=>{
    // console.log("uppercase was clicked" + text);
    let newText=text.toUpperCase();
    setText(newText)
    // setText("you have clicked on handleclick")
     props.showAlert("converted to uppercase","success");
  }
  const handlelowClick=()=>{
    // console.log("lowercase was clicked" + text);
    let newText=text.toLowerCase();
    setText(newText)
    // setText("you have clicked on handleclick")
    props.showAlert("converted to lowercase","success");
  }
  const handleclearClick=()=>{
    
    let newText="";
    setText(newText)
    // setText("you have clicked on handleclick")
     props.showAlert("converted to clear","success");
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
    
  }

  const handleCopy=()=>{
    console.log("I am copy");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
     props.showAlert("copy","success");
      }

  const removeExtraSpace=()=>{
    let newText=text.split(/[]+/);
    setText(newText.join( ""))
  }
  
  const [text, setText]=useState("");
  return(
  <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" >
     <h1>{props.heading}</h1>
     <div className="mb-3">
     
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8" ></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowClick}>Convert to LowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleclearClick}>Clear Text </button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text </button>
   <button className="btn btn-primary mx-2" onClick={removeExtraSpace}> Remove Extra Space </button>
  </div>
     <div className="Container my-3"  style={{color:props.mode==='dark'?'white':'#042743'}}>
     <h2>Your Text summary</h2>
     <p>{text.split(" ").length}words and {text.length}</p>
       <p>{0.008* text.split(" ").length}Minute read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something to preview here"}</p>
     </div>    
  </>
  )
}