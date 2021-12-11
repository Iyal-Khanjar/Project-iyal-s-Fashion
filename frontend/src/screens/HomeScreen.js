import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { listProducts } from '../actions/productActions';

export default function HomeScreen() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
            <div className='banner-area'>
                <div className='content-area'>
                    <div className='contents'>
                        <span className='title'>Welcome To Our Shop</span>
                        <Link to="/shop"><input className='shopBtn' type="button" value='Go Shopping...' /></Link>
                        <span className='text'>All Our Products Is At Discount</span>
                    </div>
                </div>
            </div>

            <div className='allContainerAbout'>
                <div className='containerAbout'>
                    <div className='firstP'>
                        <h4 className='aboutTitle' >About Our Shop</h4>
                        <p>It is an online shop that you can order porducts and we deliver it to you</p>
                        <p>Our Shop Bridal wants to make your experience special!  From the very moment you walk through the door; our goal is to have our customers feel catered to and loved. We have passionate consultants that want to help turn your vision and dreams into reality.  </p>
                    </div>
                    <div className='secondeP'>
                        <h4 className='aboutTitle' >Your Day. Your Vision. Our Shop</h4>
                        <p>Our designer gowns are hand picked for quality, the ability to fit everyone's budget and of course breathtaking beauty!  We can also compliment your entire wedding party with bridesmaids, Mother's gowns and guests.  We also cater to Galas, Homecoming, Prom and Pagents.</p>
                    </div>
                    <div className='thirdP'>
                        <span> Contact Us today:</span><br />
                    </div>
                    <div className='contactEmail'>
                        <a href='mailto:ayalkhanjar@gmail.com'>By Our Mail</a>
                    </div>
                    <div className='song'>
                        <p>Bridal, Bridesmaids,<br /> Mothers Gowns, Gala<br />Special Events,<br />including Prom</p>
                        <p>YOU ARE ALTOGETHER<br /> BEAUTIFUL MY DARLING</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
