import React from 'react'
import '../styles/Header.css'

const Header = () => {

  return (
    <header>
        <div className='container'>
            <nav className='headnav'>
                <div>
                    {/* <img src='public/images/yarnlogo.png'/> */}
                    <h3>She-Crafts</h3>
                </div>
                <div className='menu-item'>
                    <ul>
                        <li><a href="#">Shop</a></li>
                        <li><a href="#">Patterns</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className='btn-cart'>
                    <button><a href='#'>Cart</a></button>
                </div>
            </nav>
            
        </div>
    </header>
    
  )
}

export default Header
