import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail= (e) =>{
    e.preventDefault()

    emailjs
    .sendForm(
      'gmail',
      'template_7fgvhsb',
      refForm.current,
      'IJxmrRNypM_Ss9vCf'
    )
    .then(
      () => {
        alert('Message successfully sent')
        window.location.reload(false)
      },
      () => {
        alert('Failed to send the message,please try again')
      }
    )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            {' '}
            I am interested in freelance opportunities - especially on ambitious
            or large projects. However, if you have any other requests or
            questions, don't hesitate to contact me using below form either.
          </p>

          <div className="contact-me">
            <form ref={refForm} onSubmit={sendEmail} >
              <ul>
                <li className="half">
                  <input
                    type="text"
                    name="text"
                    placeholder="Name"
                    required
                  />
                </li>

                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>

                <li>
                    <input placeholder="Subject" type="text" name="subject" required />
                </li>

                <li>
                    <textarea  name='message' placeholder='Message' required ></textarea>
                     
                </li>

                <li> 
                    <input type='submit' className='flat-button' value="SEND"/>
                </li>


              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
