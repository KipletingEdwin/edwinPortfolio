import LogoTitle from '../../assets/images/logo-s.png'
import {Link} from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () =>{

    const [letterClass, setLettetClass] = useState('text-animate')
    const nameArray = ['l','o','b','o','d','a','n']
    const jobArray = ['w','e','b','','d','e','v','e','l','o','p','e','r']

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                   <span className={letterClass}>H</span>
                   <span className={`${letterClass}-12`}>i,</span>
                    
                    <br/> 
                    <span className={`${letterClass}-13`}>I</span>
                    <span className={`${letterClass}-14`}>'m</span>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>

                <h2> Frontend Developer / JavaScript Expert / Youtuber </h2>
                <Link to="/contact" className="flat-button"> CONTACT </Link>
            </div>

        </div>
        

    );
}

export default Home