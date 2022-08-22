import React, {useState, useRef} from 'react'
import ScrollToTop from '../ScrollToTop.js'

// STYLE
import './about.css'

// COMPONENTS
import Privacy from './privacy/privacy.js'
import AboutInfo from './about-info/about-info.js'
import Terms from './terms/terms.js'




const About = () => {

    const [drop, setDrop] = useState('');
    const [dropContent, setDropContent] = useState('')
    const ref = useRef(null);


    const handleDrop = (e) => {
        const box = e.target.classList[0]

        

        
        if (box === 'firstbox-image') {
            setDrop('')
            setTimeout(() => {
                setDrop(box)
                setDropContent(box)
                
            }, 1000);

            setTimeout(() => {
                ref.current?.scrollIntoView({behavior: 'smooth'});
            }, 1300);
            
        } else if (box === 'secondbox-image') {
            setDrop('')
            setTimeout(() => {
                setDrop(box)
                setDropContent(box)

            }, 1000);

            setTimeout(() => {
                ref.current?.scrollIntoView({behavior: 'smooth'});
            }, 1300);
        } else if (box === 'thirdbox-image') {
            setDrop('')
            setTimeout(() => {
                setDrop(box)
                setDropContent(box)
                
            }, 1000);

            setTimeout(() => {
                ref.current?.scrollIntoView({behavior: 'smooth'});
            }, 1300);
            
        }

    }
    
    return (
        <>
            <ScrollToTop/>
            <div className='aboutsection-wrapper'>
                <div className='about-nav-bg'></div>
                <div className='about-container'>

                    <div className='about-headers'>
                        <p className='about-p'>ABOUT US</p>
                        <h1 className='about-h1'>EVERYTHING YOU NEED TO KNOW</h1>
                    </div>

                    <div className='oneplace-container'>
                        <p className='oneplace'>ALL IN ONE PLACE</p>
                        <div className='oneplace-items'>
                            <div className='about-first-box about-box'>
                                <div className='firstbox-image about-image' onClick={handleDrop}></div>
                                <div className='firstbox-title'>ABOUT & MISSION</div>
                            </div>
                            <div className='about-second-box about-box'>
                                <div className='secondbox-image about-image' onClick={handleDrop}></div>
                                <div className='secondbox-title'>PRIVACY POLICY</div>
                            </div>
                            <div className='about-thrid-box about-box'>
                                <div className='thirdbox-image about-image' onClick={handleDrop}></div>
                                <div className='thirdbox-title'>TERMS OF USE</div>
                            </div>

                        </div>
                    </div>
                </div>
                <div ref={ref} className='about-drop' style={drop != '' ? {maxHeight: '50rem', paddingBottom: 30} : {maxHeight: '0rem'}}>
                        {dropContent === 'firstbox-image' ? <AboutInfo/> 
                        : dropContent === 'secondbox-image' ? <Privacy/>
                        : dropContent === 'thirdbox-image' ? <Terms/> : null}

                </div>
    
            </div>
        </>
    )
}

export default About;