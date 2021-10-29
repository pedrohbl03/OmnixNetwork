import React from 'react'
import { FaLinkedin, FaInstagramSquare, FaFacebookSquare} from "react-icons/fa"


function Footer() {
  return (
    <footer className="h-full">
      <div className="footer bg-light">
        <div className="container flex flex-col md:flex-row justify-center mx-auto text-lg items-center md:justify-between text-primary font-bold">
          <div className="band-logo text-center">
            <img src="https://omnixperience.com.br/wp-content/uploads/2020/11/omnix_logo-1.svg" alt="omnix-logo" width="140px" height="35px"></img>
          </div>
          <div className="sell-number-area md:px-10">
            <p>Portal de Privacidade | Política de Privacidade</p>
            <p>Todos os direitos reservados 2021 Omnix. ©</p>
          </div>
          <div className="social-media-area flex text-4xl py-3">
            <a href="https://www.facebook.com/" target="blank_" className="facebook px-3"><FaFacebookSquare></FaFacebookSquare></a>
            <a href="https://www.linkedin.com/feed/" target="blank_" className="linkedin px-3"><FaLinkedin></FaLinkedin></a>
            <a href="https://instagram.com/" target="blank_" className="instagram px-3"><FaInstagramSquare></FaInstagramSquare></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer