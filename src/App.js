import './App.css';
import {useState, useRef, useEffect} from 'react';


function App() {
  const [Slider,SetSlider] = useState(0);
  const sliderRef = useRef();
  const [startX, setStartX] = useState();

  const [Toggle,SetToggle]=useState(false);
  
  function mouseDown(e)
  {
    e.preventDefault();
    SetToggle(true);
    setStartX(e.pageX + sliderRef.current.scrollLeft);
  }

  function mouseUp()
  {
    SetToggle(false);
  }



  function Next() {
    
    if(Slider>=3) return;
    
    SetSlider(Slider + 1)
  }

  function Prev() {
    if(Slider<=0) return;

    SetSlider(Slider -1)
  }

  function DragStart(e)
  {
   if(Toggle) 
    sliderRef.current.scrollLeft = startX - e.pageX;
    console.log(sliderRef.current.scrollLeft)
  }

  console.log(startX)
  useEffect(()=>
  
  {
    const prevRef = sliderRef.current.style;
    prevRef.transform  = `translateX(${Slider*-900}px)`;
   
  },[Slider])
  
  console.log(Slider);
  return (
    <div className="App">
      <div className="full-container">
        <div className="inner-container" ref={sliderRef} style={{transition:'0.3s'}} onMouseDown={mouseDown} onMouseUp={mouseUp}  onMouseMove={DragStart}>
          <div className="item item1">
            item1
          </div>
          <div className="item item2">
            item2
          </div>

          <div className="item item3">
            item3
          </div>

          <div className="item item4">
            item4
          </div>
          

        </div>
    
          {Slider}
          <button onClick={Prev}>
            prev
          </button>

          <button onClick={Next}>
            next
          </button>
      </div>
    </div>
  );
}

export default App;
