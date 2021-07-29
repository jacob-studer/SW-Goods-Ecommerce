const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'New' },
    { name: 'Mens Apparel' },
    { name: 'Womens Apparel' },
    { name: 'Living' },
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Laptop',
      description:
        'A laptop computer, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer generally smaller than a briefcase that can easily be transported and conveniently used in temporary spaces such as on airplanes, in libraries, temporary offices, and at meetings.',
      image: 'laptop.jpg',
      category: categories[0]._id,
      price: 599.99,
      quantity: 1
    },
    {
      name: 'TV',
      description:
        'An electronic system of transmitting transient images of fixed or moving objects together with sound over a wire or through space by apparatus that converts light and sound into electrical waves and reconverts them into visible light rays and audible sound.',
      image: 'tv.jpg',
      category: categories[0]._id,
      price: 399.99,
      quantity: 1
    },
    {
      name: 'Shirt',
      category: categories[1]._id,
      description:
        'A shirt is a cloth garment for the upper body (from the neck to the waist).',
      image: 'shirt.jpg',
      price: 19.99,
      quantity: 1
    },
    {
      name: 'Pants',
      category: categories[1]._id,
      description:
        'an outer garment covering each leg separately and usually extending from the waist to the ankle',
      image: 'pants.jpg',
      price: 29.99,
      quantity: 1
    },
    {
      name: 'Shoes',
      category: categories[1]._id,
      description:
        'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion',
      image: 'shoes.jpg',
      price: 69.99,
      quantity: 1
    },
    {
      name: 'Blouse',
      category: categories[2]._id,
      description:
        'a usually loose-fitting garment especially for women that covers the body from the neck to the waist',
      image: 'blouse.jpg',
      price: 19.99,
      quantity: 1
    },
    {
      name: 'Skirt',
      category: categories[2]._id,
      description:
        'A skirt is the lower part of a dress or a separate outer garment that covers a person from the waist downwards',
      image: 'skirt.jpg',
      price: 29.99,
      quantity: 1
    },
    {
      name: 'Shoes',
      category: categories[2]._id,
      description:
        'A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion',
      image: 'womens-shoes.jpg',
      price: 69.99,
      quantity: 1
    },
    {
      name: 'Bed Frame',
      category: categories[3]._id,
      description:
        'A bed frame or bedstead is the part of a bed used to position the mattress and base (foundation)',
      image: 'bedframe.jpg',
      price: 159.99,
      quantity: 1
    },
    {
      name: 'nightstand',
      category: categories[3]._id,
      description:
        'A nightstand, alternatively night table, bedside table, daystand or bedside cabinet, is a small table or cabinet designed to stand beside a bed or elsewhere in a bedroom',
      image: 'nightstand.jpg',
      price: 79.99,
      quantity: 1
    },
    {
      name: 'office chair',
      category: categories[3]._id,
      description:
        'An office chair, or desk chair, is a type of chair that is designed for use at a desk in an office.',
      image: 'office-chair.jpg',
      price: 199.99,
      quantity: 1
    }

  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@email.com',
    password: 'johndoe123!',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  console.log('users seeded');

  process.exit();
});
