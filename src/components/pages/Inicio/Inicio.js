import React from 'react'
import './Inicio.css'
import imagenes from '../../../assets/imagenes'
import ReactPlayer from 'react-player'
import Navbar1 from '../../navegation/navbar/Navbar1'
import Footer from '../../navegation/footer/Footer'

const Inicio = () => {
  return (
    <div className='main-inicio'>
      <Navbar1 />
            <div className='container-inicio'>
              <hr/>
                <div className='row'>
                    <div className='col'>
                        <h3>HappLab</h3>
                        <p className='text-lore'>Happlab Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.</p>
                    </div>
                    <div className='col'>
                        <img 
                        src = {imagenes.img1} alt="" width={500} height={200}
                        />
                    </div>
                  </div>
                  <hr className='hr-line-white'/>
              <h2 className='title-h2'>Destacados de la semana</h2>
              <hr className='hr-line-white'/>       
              </div>
              <div className='content-video'>
              <div className='row'>
                 <div className='col'>
                   <h3> Contenido destacado 1</h3>
                   <p className='text-lore'>Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.</p>
                 </div>
                 <div className='col'>
                   <ReactPlayer
                    url='https://www.youtube.com/watch?v=N029UUlH1Dc'
                    width='100%'
                    height='100%'
                    controls
                    loop
                    />

                 </div>
              </div>
            </div>
            <hr/>  
            <div className='content-video'>
              <div className='row'>
                 <div className='col'>
                   <h3> Contenido destacado 1</h3>
                   <p className='text-lore'>Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.Lorem fistrum por la gloria de mi madre esse jarl aliqua llevame al sircoo. De la pradera ullamco qué dise usteer está la cosa muy malar.</p>
                 </div>
                 <div className='col'>
                   <ReactPlayer
                    url='https://www.youtube.com/watch?v=N029UUlH1Dc'
                    width='100%'
                    height='100%'
                    controls
                    loop
                    />
                 </div>
              </div>
            </div>
            <hr/>  
            <Footer/>
    </div>
  )
}
export default Inicio