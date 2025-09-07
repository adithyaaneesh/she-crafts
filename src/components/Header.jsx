import React from 'react'
import '../styles/Header.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GestureIcon from '@mui/icons-material/Gesture';

const Header = () => {

  return (
    <header>
        <div className='container'>
            <nav className='headnav'>
                <div>
                    <h3><GestureIcon/>She-Crafts</h3>
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
                    <button><a href='#'><ShoppingCartIcon/></a></button>
                </div>
            </nav>
            
        </div>
    </header>
    
  )
}

export default Header
