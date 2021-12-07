import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
            name: 'iyal',
            email: 'admin@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true,
        },
        {
            name: 'ilan',
            email: 'ilan@gmail.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false,
        },
    ],
    products: [
        {
            name: 'Nike Fit Shirt',
            category: 'Shirts',
            image: '/images/s1.webp',
            price: 251,
            brand: 'Nike',
            countInStock: 0,
            rating: 4.3,
            numReviews: 23,
            description: 'high quality product',
        },
        {
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/s2.webp',
            price: 451,
            brand: 'Adidas',
            countInStock: 10,
            rating: 2.6,
            numReviews: 33,
            description: 'high quality product',
        },
        {
            name: 'Lacoste Fit Shirt',
            category: 'Shirts',
            image: '/images/s3.webp',
            price: 26,
            brand: 'Lacoste',
            countInStock: 4,
            rating: 1.2,
            numReviews: 20,
            description: 'high quality product',
        },
        {
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/s4.webp',
            price: 277,
            brand: 'Nike',
            countInStock: 7,
            rating: 3.4,
            numReviews: 40,
            description: 'high quality product',
        },
        {
            name: 'Adidas Slim Shirt',
            category: 'Shirts',
            image: '/images/s5.webp',
            price: 488,
            brand: 'Adidas',
            countInStock: 4,
            rating: 2.0,
            numReviews: 32,
            description: 'high quality product',
        },
        {
            name: 'Lacoste Slim Shirt',
            category: 'Shirts',
            image: '/images/s6.webp',
            price: 68,
            brand: 'Lacoste',
            countInStock: 7,
            rating: 4.9,
            numReviews: 22,
            description: 'high quality product',
        },
        {
            name: 'Nike Shirt',
            category: 'Shirts',
            image: '/images/s7.webp',
            price: 277,
            brand: 'Nike',
            countInStock: 6,
            rating: 3.4,
            numReviews: 16,
            description: 'high quality product',
        },
        {
            name: 'Adidas Shirt',
            category: 'Shirts',
            image: '/images/s8.webp',
            price: 488,
            brand: 'Adidas',
            countInStock: 1,
            rating: 2.0,
            numReviews: 40,
            description: 'high quality product',
        },
        {
            name: 'Lacoste Shirt',
            category: 'Shirts',
            image: '/images/s9.webp',
            price: 68,
            brand: 'Lacoste',
            countInStock: 8,
            rating: 1.3,
            numReviews: 21,
            description: 'high quality product',
        },
        {
            name: 'Puma Shirt',
            category: 'Shirts',
            image: '/images/s10.webp',
            price: 426,
            brand: 'Lacoste',
            countInStock: 5,
            rating: 4.1,
            numReviews: 42,
            description: 'high quality product',
        },
        {
            name: 'Nike Fit Pant',
            category: 'Pants',
            image: '/images/p1.webp',
            price: 148,
            brand: 'Nike',
            countInStock: 4,
            rating: 3.5,
            numReviews: 23,
            description: 'high quality product',
        },
        {
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: '/images/p2.webp',
            price: 148,
            brand: 'Adidas',
            countInStock: 1,
            rating: 3.4,
            numReviews: 45,
            description: 'high quality product',
        },
        {
            name: 'Lacoste Fit Pant',
            category: 'Pants',
            image: '/images/p3.webp',
            price: 393,
            brand: 'Lacoste',
            countInStock: 8,
            rating: 4.0,
            numReviews: 19,
            description: 'high quality product',
        },
        {
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/images/p4.webp',
            price: 257,
            brand: 'Nike',
            countInStock: 1,
            rating: 3.7,
            numReviews: 42,
            description: 'high quality product',
        },
        {
            name: 'Adidas Slim Pant',
            category: 'Pants',
            image: '/images/p5.webp',
            price: 78,
            brand: 'Adidas',
            countInStock: 6,
            rating: 3.4,
            numReviews: 14,
            description: 'high quality product',
        },
        {
            name: 'Lacoste Slim Pant',
            category: 'Pants',
            image: '/images/p6.webp',
            price: 49,
            brand: 'Lacoste',
            countInStock: 3,
            rating: 3.4,
            numReviews: 43,
            description: 'high quality product',
        },
        {
            name: 'Nike Pant',
            category: 'Pants',
            image: '/images/p7.webp',
            price: 206,
            brand: 'Nikes',
            countInStock: 8,
            rating: 1.5,
            numReviews: 17,
            description: 'high quality product',
        },
        {
            name: 'Adidas Pant',
            category: 'Pants',
            image: '/images/p8.webp',
            price: 100,
            brand: 'Adidas',
            countInStock: 6,
            rating: 3.0,
            numReviews: 6,
            description: 'high quality product',
        },
        {
            name: 'Lacoste Pant',
            category: 'Pants',
            image: '/images/p9.webp',
            price: 106,
            brand: 'Lacoste',
            countInStock: 5,
            rating: 4.8,
            numReviews: 10,
            description: 'high quality product',
        },
        {
            name: 'Puma Pant',
            category: 'Pants',
            image: '/images/p10.webp',
            price: 160,
            brand: 'Puma',
            countInStock: 0,
            rating: 1.0,
            numReviews: 30,
            description: 'high quality product',
        },
        {
            name: 'Nike Fit Shoe',
            category: 'Shoes',
            image: '/images/shoes1.webp',
            price: 223,
            brand: 'Nike',
            countInStock: 5,
            rating: 3.3,
            numReviews: 28,
            description: 'high quality product',
        },
        {
            name: 'Adidas Fit Shoe',
            category: 'Shoes',
            image: '/images/shoes2.webp',
            price: 168,
            brand: 'Adidas',
            countInStock: 1,
            rating: 1.6,
            numReviews: 41,
            description: 'high quality product',
        },
        {
            name: 'Lacoste Fit Shoe',
            category: 'Shoes',
            image: '/images/shoes3.webp',
            price: 301,
            brand: 'Lacoste',
            countInStock: 10,
            rating: 1.3,
            numReviews: 26,
            description: 'high quality product',
        },
        {
            name: 'Nike Slim Shoe',
            category: 'Shoes',
            image: '/images/shoes4.webp',
            price: 119,
            brand: 'Nike',
            countInStock: 4,
            rating: 3.7,
            numReviews: 39,
            description: 'high quality product',
        },
        {
            name: 'Adidas Slim Shoe',
            category: 'Shoes',
            image: '/images/shoes5.webp',
            price: 83,
            brand: 'Adidas',
            countInStock: 0,
            rating: 1.2,
            numReviews: 28,
            description: 'high quality product',
        },
        {
            name: 'Lacoste Slim Shoe',
            category: 'Shoes',
            image: '/images/shoes6.webp',
            price: 390,
            brand: 'Lacoste',
            countInStock: 3,
            rating: 1.5,
            numReviews: 12,
            description: 'high quality product',
        },
        {
            name: 'Nike Shoe',
            category: 'Shoes',
            image: '/images/shoes7.webp',
            price: 55,
            brand: 'Nike',
            countInStock: 4,
            rating: 1.1,
            numReviews: 48,
            description: 'high quality product',
        },
        {
            name: 'Adidas Shoe',
            category: 'Shoes',
            image: '/images/shoes8.webp',
            price: 404,
            brand: 'Adidas',
            countInStock: 8,
            rating: 1.9,
            numReviews: 7,
            description: 'high quality product',
        },
        {
            name: 'Lacoste Shoe',
            category: 'Shoes',
            image: '/images/shoes9.webp',
            price: 158,
            brand: 'Lacoste',
            countInStock: 2,
            rating: 1.3,
            numReviews: 1,
            description: 'high quality product',
        },
        {
            name: 'Puma Shoe',
            category: 'Shoes',
            image: '/images/shoes10.webp',
            price: 278,
            brand: 'Puma',
            countInStock: 10,
            rating: 2.5,
            numReviews: 31,
            description: 'high quality product',
        },
    ],
};
export default data;
