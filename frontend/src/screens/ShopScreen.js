import React, { useEffect, useState } from 'react';

import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';

export default function ShopScreen() {
  const [showCopyCategory, setShowCopyCategory] = useState(true)
  const [productCategory, setProductCategory] = useState('All')
  const [copyProducts, setCopyProducts] = useState([])
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  useEffect(() => {
    if (productCategory === 'All') {
      setCopyProducts(products)
    } else {
      const copy = products.filter(item => {
        return item.category.includes(productCategory)
      })
      setCopyProducts(copy)

    }
    // eslint-disable-next-line
  }, [productCategory])
  const handlePeriodChange = (e) => {
    setProductCategory(e.target.value);
    setShowCopyCategory(false)
  }
  return (
    <div>
      <div className='fillterForm'>
        <div className='formGroup'>
          <label className='category' htmlFor='type'>Category</label><br />
          <select onChange={handlePeriodChange} name="type" id="type">
            <option value="All" >All</option>
            <option value="Shirts">Shirts</option>
            <option value="Pants">Pants</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
      </div>

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="row center">
          {showCopyCategory ? products.map((product) => (
            <Product key={product._id} product={product}></Product>
          )) : copyProducts.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))
          }
        </div>
      )}
    </div>
  );
}
