import React from 'react';
import { FiMenu, FiMoon } from "react-icons/fi";

function Header(){

    return (<> 

        <header className='header__main'>

            <section className='header__main--contain container'>

                <div className='container__show d-flex justify-content-between align-items-center'>
                
                    <article className='main__logo'>
                        <h1>RYO.</h1>
                        <span>HOME</span>
                    </article>

                    <div className='main__search'>
                        <form className='main__search--form'>
                            <input type='text' placeholder='Search only Ryoshi' className='input' />
                        </form>
                    </div>

                    <div className='main__options d-flex justify-content-between align-items-center'>

                        <article className='main__options--menu'>
                            <a href='#'>
                                <FiMenu />
                            </a>
                        </article>

                        <article className='main__options--theme'>
                            <a href='#'>
                                <FiMoon />
                            </a>
                        </article>

                        <article className='main__options--user'>
                            <a href='#'>
                            <img src='https://hpluspedia.org/images/f/f7/Matrix-avatar.jpg' alt='@user' width='50px' />
                            </a>
                        </article>

                    </div>
                
                </div>

            </section>

        </header>
    
    
    </>)

}

export default Header;