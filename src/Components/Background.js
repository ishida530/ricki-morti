import React from 'react';
import logo from '../Images/logo.png'

class Background extends React.Component {

    render() {
        return (
            <div className='d-flex justify-content-center align-items-center wrapper w-80 '>
                <img src={logo} alt="" className='img-fluid logo m-auto' />
            </div>);
    }
}

export default Background;