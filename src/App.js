import './App.css';
import {useState} from 'react';

function App() {

  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [image, setImage] = useState("");

  const putTopText = (e) =>{
    setTopText(e.target.value);
  }
  const putBottomText = (e) =>{
    setBottomText(e.target.value);
  }
  const putImage = (e) => {
    setImage(e.target.value);
  }
  const exportMeme = () => {
    alert("exportando...")
  }
  
  return (
    <div className='App'>
      <select onChange={putImage}>
        <option value="Disaster-Girl">Disaster girl</option>
        <option value="Ancients-Aliens">Ancients aliens</option>
        <option value="Futurama-Fry">Futurama</option>
        <option value="Duck-Meme">Duck</option>
      </select> <br/>

      <input onChange={putTopText} type="text" placeholder='Top text'/><br/>
      <input onChange={putBottomText}type="text" placeholder='Bottom text'/><br/>
      <button onClick={exportMeme}>Export!</button>
      <div className='meme'>
        <span className='meme__topText'>{topText}</span><br/>
        <span className='meme__bottomText'>{bottomText}</span><br/>

        <img src = {`/img/${image}.jpg`}  alt="Meme"/>
      </div>

    </div>
  );
}
//Select image
//Input text - First line
//Input text - Second line
//Export button

export default App;
