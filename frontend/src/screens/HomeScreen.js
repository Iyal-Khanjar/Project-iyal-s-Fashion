import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <div className='banner-area'>
                <div className='content-area'>
                    <div className='contents'>
                        <span className='title'>Iyal's Fashion</span>
                        <Link to="/shop"><input className='shopBtn' type="button" value='Go Shopping...' /></Link>
                        <span className='text'>All Our Products Is At Discount</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
