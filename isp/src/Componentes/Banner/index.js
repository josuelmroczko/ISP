//import './script'
import './Banner.css'

function Banner (){
  return(
    
    

    

    <div className="container-slider">
       
       <div className='seta1'>
        <button id="prev-button"><img src="./imagens/arrow.png" alt="prev-button"/></button>
</div>
   
    <div className="container-images">

      <img src="./imagens/banner1.jpg" alt="girl" className="slider on"/>
      <img src="./imagens/capoeira1.jpg" alt="girl" className="slider"/>
    </div>

<div className='seta2'>
    <button id="next-button"><img src="./imagens/arrow.png" alt="next-button"/></button>
 </div>

  </div>
)
  }

 export default Banner 