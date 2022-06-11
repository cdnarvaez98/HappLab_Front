import React, { useState } from 'react'
import Navbar1 from '../../navegation/navbar/Navbar1'
import Footer from '../../navegation/footer/Footer'
import './Noticias.css'
import '../../../assets/css/style.min.css'
import '../../../assets/css/global.css'
import '../../../assets/css/post-9.css'
import '../../../assets/css/frontend-lite.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink, faSearch} from '@fortawesome/free-solid-svg-icons';
import {Fade} from 'react-bootstrap'

const Noticias = () => {

    const ContenidoNoticias=(props)=>{
        const [open, setOpen]=useState(false);
        return(
        <div className={props.clase} >
            
            <span >
                <Fade timeout={20000} in={!open}>
                    <img src={props.srcImg} alt="Switch Pro" onMouseEnter={()=>setOpen(!open)} onMouseLeave={()=>setOpen(!open)} aria-controls="sombra" aria-expanded={open}/>
                </Fade>
            </span>
            <span className="portfolio-buttons">
            <Fade className='test-popup-link' timeout={20000} in={open}>
            <a href={props.linkImg}>
                <FontAwesomeIcon icon={faLink} size='2x' fixedWidth/>
            </a>
            </Fade>
            <Fade className='test-popup-link' timeout={20000} in={open}>
                <a href={props.LinkPage} target="_blank">
                    <i className='fa fa-search'><FontAwesomeIcon icon={faSearch} size='2x' fixedWidth/></i>
                </a>
            </Fade>
            </span>
        </div>
        );

    }
    
    return(

    <div className='main-noticias'>
        <Navbar1 />
        <section className="elementor-section elementor-top-section elementor-element elementor-element-bdd763f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="bdd763f" data-element_type="section">
			<div className="elementor-shape elementor-shape-top" data-negative="false">
			    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
	                <path className="elementor-shape-fill" d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z"></path>
                </svg>		
            </div>
            <div className="elementor-container elementor-column-gap-default">
				<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b43338a" data-id="b43338a" data-element_type="column">
			        <div className="elementor-widget-wrap elementor-element-populated">
				        <div className="elementor-element elementor-element-3cfed6b elementor-widget elementor-widget-heading" data-id="3cfed6b" data-element_type="widget" data-widget_type="heading.default">
				            <div className="elementor-widget-container">
			                    <h1 className="elementor-heading-title elementor-size-default">Sección de noticias</h1>
                            </div>
			            </div>
				    </div>
		        </div>
			</div>
			<div className="elementor-shape elementor-shape-bottom" data-negative="false">
			    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 20" preserveAspectRatio="none">
	                <path className="elementor-shape-fill" d="M0,0v3c0,0,393.8,0,483.4,0c9.2,0,16.6,7.4,16.6,16.6c0-9.1,7.4-16.6,16.6-16.6C606.2,3,1000,3,1000,3V0H0z"></path>
                </svg>		
            </div>
		</section>  
        <section className="elementor-section elementor-top-section elementor-element elementor-element-1a63a0d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1a63a0d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
			<div className="elementor-container elementor-column-gap-default">
				<div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-55e9d7d" data-id="55e9d7d" data-element_type="column">
			        <div className="elementor-widget-wrap elementor-element-populated">
						<div className="elementor-element elementor-element-082e3a1 elementor-widget elementor-widget-widgetkit-for-elementor-portfolio" data-id="082e3a1" data-element_type="widget" data-widget_type="widgetkit-for-elementor-portfolio.default">
				            <div className="elementor-widget-container">
			                    <div className="tgx-portfolio">
                                    <ul className="portfolio-filter round text-center">
                                        <li><a className="" href="#" data-filter="*">Todas</a></li>       
                                        <li><a href="#" data-filter=".noticas-082e3a1">Noticas</a></li>    
                                        <li><a href="#" data-filter=".cursosdisponibles-082e3a1">Cursos disponibles</a></li>          
                                        <li><a href="#" data-filter=".próximoseventos-082e3a1">Próximos eventos</a></li>
                                    </ul>
                                    <div id="hover-1" className="hover-1">
                                        <div className="row">
                                            <ContenidoNoticias
                                                clase="col-md-4 col-sm-6 mix mix-082e3a1 portfolio-item business-082e3a1 onepage-082e3a1 " 
                                                srcImg="https://thumbs.dreamstime.com/b/ilustraci%C3%B3n-de-vectores-fondo-live-breaking-news-im%C3%A1genes-noticias-%C3%BAltima-hora-en-directo-eps-170013711.jpg" 
                                                linkImg="https://james.amigos4all.com/wp-content/plugins/widgetkit-for-elementor/dist/images/placeholder.jpg" 
                                                LinkPage="https://www.unicauca.edu.co/versionP/acerca-de-unicauca/centros/cecav"
                                            />
                                            <ContenidoNoticias 
                                                clase="col-md-4 col-sm-6 mix mix-082e3a1 portfolio-item business-082e3a1 blog-082e3a1 "
                                                srcImg="https://thumbs.dreamstime.com/b/ilustraci%C3%B3n-de-vectores-fondo-live-breaking-news-im%C3%A1genes-noticias-%C3%BAltima-hora-en-directo-eps-170013711.jpg" 
                                                linkImg="https://james.amigos4all.com/wp-content/plugins/widgetkit-for-elementor/dist/images/placeholder.jpg" 
                                                LinkPage="https://www.facebook.com/AInteligentePop"
                                            />
                                            <ContenidoNoticias
                                                clase="col-md-4 col-sm-6 mix mix-082e3a1 portfolio-item education-082e3a1 blog-082e3a1 " 
                                                srcImg="https://thumbs.dreamstime.com/b/ilustraci%C3%B3n-de-vectores-fondo-live-breaking-news-im%C3%A1genes-noticias-%C3%BAltima-hora-en-directo-eps-170013711.jpg" 
                                                linkImg="https://james.amigos4all.com/wp-content/plugins/widgetkit-for-elementor/dist/images/placeholder.jpg" 
                                                LinkPage="http://www.unicauca.edu.co/versionP/"
                                            />
                                        </div>
                                    </div>

                                </div>
                                {/*<script type="text/javascript">
                                    {jQuery(function($){
                                        if(!$('body').hasClass('wk-portfolio')){
                                            $('body').addClass('wk-portfolio');
                                        }
                                    })};
                                </script>*/}		
                            </div>
                         
				        </div>
					</div>
		        </div>
			</div>
		</section>
        <Footer />
    </div>
    );
}

export default Noticias