import React from 'react'
import './HeaderOption.css'
function HeaderOpiton({ Icon, title }) {
    return <div className='headerOption'>
        {Icon && <Icon className='headerOption__icon' />} {/* will render the icon only if we pass the icon */}
        <h3 className='headerOption__title'>{title}</h3>
    </div>

}

export default HeaderOpiton