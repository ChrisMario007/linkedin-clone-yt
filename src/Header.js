import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOpiton from './HeaderOpiton';
function Header() {
    return (
        <div className='header'>

            <div className="header__left">
                <img className="ff" src="https://icons8.com/icon/13930/linkedin" alt="" />


                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>

            </div>

            <div className="header__right">
                <HeaderOpiton title='none' />
                <HeaderOpiton title='My Network' />
            </div>

        </div>
    )
}

export default Header