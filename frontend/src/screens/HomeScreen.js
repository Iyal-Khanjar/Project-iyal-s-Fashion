import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { listProducts } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product';
import Rating from '../components/Rating';

export default function HomeScreen() {
    const [showTopThree, setShowTopThree] = useState([])
    const dispatch = useDispatch();
    const productList = useSelector((state) => state.productList);
    const { loading, error, products } = productList;
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <div>
            <div className='banner-area'>
                <div className='content-area'>
                    <div className='contents'>
                        <span className='title'>Ayal's Fashion</span>
                        <Link to="/shop"><input className='shopBtn' type="button" value='Go Shopping...' /></Link>
                        <span className='text'>All Our Products Is At Discount</span>
                    </div>
                </div>
            </div>

            <div className='allContainerAbout'>
                <div className='containerAbout'>
                    <div className='firstP'>
                        <h4 className='aboutTitle' >About Our Shop</h4>
                        <p>Located just east of the Twin Cities in Woodbury, MN right off I-94 in the Woodbury Lakes outdoor shopping center!</p>
                        <p>Our Shop Bridal wants to make your experience special!  From the very moment you walk through the door; our goal is to have our customers feel catered to and loved. We have passionate consultants that want to help turn your vision and dreams into reality.  </p>
                    </div>
                    <div className='secondeP'>
                        <h4 className='aboutTitle' >Your Day. Your Vision. Our Shop</h4>
                        <p>Our designer gowns are hand picked for quality, the ability to fit everyone's budget and of course breathtaking beauty!  We can also compliment your entire wedding party with bridesmaids, Mother's gowns and guests.  We also cater to Galas, Homecoming, Prom and Pagents.</p>
                        <p>We are "Appointment Only" to make sure you are helped one and one with a personal consultant to assist you throughout your appointment.  </p>
                        <p>Our newest and current gowns on our Bridal Floor range in price from about $700 - $5000 and ranging in sizes 4 -28.  We also have a Past Season Sample Selection in good shape that we have discounted up to 80% and all gowns priced in that area are $1000 and under.  </p>
                        <p>We look forward to serving you well and helping you feel beautiful on your special day!  </p>
                    </div>
                    <div className='thirdP'>
                        <span> Contact Us today:</span><br />
                    </div>
                    <div className='contactEmail'>
                        ayalkhanjar@gmail.com
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
