import { useState } from "react";


const Content = () => {


  const [message, setMessage] = useState("");

  const handleClick = () => {
    // Get the text from the textarea
    const text = document.getElementById("text").value;

    // If the text is empty, show an error alert
    if (text === "") {
      alert("Please enter a message");
    } else {
      // Set the message in the p tag
      setMessage(text);
    }
  };

  

  return (
    
      <div className="container justify-content-center">
        <textarea
          className="textarea w-50 p-1 m-3"
          name="text"
          id="text"
          rows="5"
          maxLength={500}
          placeholder="Write your text here...."
        ></textarea>

        <button className="btn btn-success row-cols-1 " onClick={handleClick}>
          Click
        </button>
        
        <p className="text-success border-light fw-bold m-3" id="showMessage">{message}</p>
      </div>
    

  )
}

export default Content