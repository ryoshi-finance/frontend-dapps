import React, { useEffect, useState } from "react";
import { BsTwitter, BsTelegram, BsMedium } from "react-icons/bs";

function Footer(){

    return (<> 
    
    <footer className='footer p-3'>

        <div className='container'>

            <section className='footer__menu d-flex justify-content-between'>

                <article className='footer__menu--list d-flex'>
                    <a href='#' className='d-block'>
                        <BsTwitter />
                    </a>
                    <a href='#' className='d-block ms-3 mx-3'>
                        <BsTelegram />
                    </a>
                    <a href='#' className='d-block'>
                        <BsMedium />
                    </a>
                </article>

                <article className='footer__menu--list'>
                    <ul className='ul'>
                        <li className='d-inline ms-3'>
                            <a href='#'>
                                About
                            </a>
                        </li>
                        <li className='d-inline ms-3'>
                            <a href='#'>
                                Guide
                            </a>
                        </li>
                        <li className='d-inline ms-3'>
                            <a href='#'>
                                Api
                            </a>
                        </li>
                        <li className='d-inline ms-3'>
                            <a href='#'>
                            Privacy Policy
                            </a>
                        </li>
                        <li className='d-inline ms-5'>
                            © RYO 2023 
                        </li>
                    </ul>
                </article>

            </section>

        </div>

    </footer>
    
    </>)

}

export default Footer;