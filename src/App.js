import {useState} from 'react';
import {AiOutlineCaretRight,AiOutlineCaretLeft } from "react-icons/ai";import "./style.css";
import "./style.css"
const images = [
  "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
  "https://fastly.picsum.photos/id/38/1280/960.jpg?hmac=HBrgyJHQOGVicaWoXgvdSfTakkAyv4BxAt4rF0DhWkU",
  "https://fastly.picsum.photos/id/107/5000/3333.jpg?hmac=RA_wrO9Hs-AelIqfc3yu08bk_5CZ6FhFyy1CQ_qhgjs",
  "https://fastly.picsum.photos/id/112/4200/2800.jpg?hmac=8Qhr0ehkFOnlKO__aKhLMQTu2qzcAten9LHpBO6uk-k",
  "https://fastly.picsum.photos/id/37/2000/1333.jpg?hmac=vpYLNsQZwU2szsZc4Uo17cW786vR0GEUVq4icaKopQI",
];

function App() {
  const [kaydir,setKaydir]=useState(0);

  function next() {
    setKaydir(kaydir === images.length - 1 ? 0 : kaydir + 1);
  }

  function back() {
    setKaydir(kaydir === 0 ? images.length - 1 : kaydir - 1);
  }

  return (
    <div>
    <h2>Project 1: Carousel</h2>
    <div className='buttonConteiner'> 
    <button className='next'>
        <AiOutlineCaretRight onClick={next}/>
      </button>

     <button className='back'>
        <AiOutlineCaretLeft onClick={back}/>
      </button>
      
    
    </div>
    
        {images.map(
          (image, index) =>
            kaydir === index && (
              <div key={image} className="kaydir">
                <img src={image} alt="images" />
              </div>
            )
        )}
      </div>
   

  );
}

export default App;
