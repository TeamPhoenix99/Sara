import React from 'react'
import './Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


export const Footer = () => {
    return (
        <div className='footer'>
            <div className="social-icon">
               <FaFacebookF />
               <FaInstagram />
               <FaWhatsapp />
               <CiTwitter />
            </div>

            <div className="footer-list">
                <p>About Us</p>
                <p>Terms and Conditions</p>
                <p>Return Policy</p>
            </div>
            <div className="footer-desc">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias ipsa necessitatibus ea tempora eum facilis optio. Nobis ut recusandae explicabo.</p>
            </div>
            <div className="copy-right">
                <p>CopyRight &copy; HolidayNepal 2024</p>
            </div>
    </div>
  )
}
