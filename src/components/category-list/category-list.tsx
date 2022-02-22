import React from 'react';
import { Container, Row, Col, Image, Stack } from 'react-bootstrap';

import pasta from 'assets/images/menus/menu8.png';
import pizza from 'assets/images/menus/menu9.png';
import vegan from 'assets/images/menus/menu10.png';
import desserts from 'assets/images/menus/menu11.png';
import smoothies from 'assets/images/menus/menu12.png';
import breakfast from 'assets/images/menus/menu13.png';
import seafood from 'assets/images/menus/menu91.png';
import soup from 'assets/images/menus/menu92.png';
import pancakes from 'assets/images/menus/menu93.png';
import meat from 'assets/images/menus/menu94.png';
import chicken from 'assets/images/menus/menu95.png';
import cake from 'assets/images/menus/menu99.png';
import pastries from 'assets/images/menus/menu100.png';
import salad from 'assets/images/menus/menu106.png';
import sandwiches from 'assets/images/menus/menu107.png';
import waffles from 'assets/images/menus/menu108.png';
import ramen from 'assets/images/menus/menu109.png';
import dips from 'assets/images/menus/menu110.png';

import './category-list.scss';

interface Category {
  name: string;
  title: string;
  imageSrc: string;
  tag?: string;
}

interface CategoryItemProps {
  category: Category;
}

const CATEGORIES: Category[] = [
  {
    name: 'seafood',
    title: 'Seafood',
    imageSrc: seafood
  },
  {
    name: 'soup',
    title: 'Soup',
    imageSrc: soup
  },
  {
    name: 'pasta',
    title: 'Pasta',
    imageSrc: pasta,
    tag: 'popular'
  },
  {
    name: 'pizza',
    title: 'Pizza',
    imageSrc: pizza,
    tag: 'popular'
  },
  {
    name: 'vegan',
    title: 'Vegan',
    imageSrc: vegan,
    tag: 'popular'
  },
  {
    name: 'desserts',
    title: 'Desserts',
    imageSrc: desserts,
    tag: 'popular'
  },
  {
    name: 'smoothies',
    title: 'Smoothies',
    imageSrc: smoothies,
    tag: 'popular'
  },
  {
    name: 'breakfast',
    title: 'Breakfast',
    imageSrc: breakfast,
    tag: 'popular'
  },
  {
    name: 'pancakes',
    title: 'Pancakes',
    imageSrc: pancakes
  },
  {
    name: 'meat',
    title: 'Meat',
    imageSrc: meat
  },
  {
    name: 'chicken',
    title: 'Chicken',
    imageSrc: chicken
  },
  {
    name: 'cake',
    title: 'Cake',
    imageSrc: cake
  },
  {
    name: 'pastries',
    title: 'Pastries',
    imageSrc: pastries
  },
  {
    name: 'salad',
    title: 'Salad',
    imageSrc: salad
  },
  {
    name: 'sandwiches',
    title: 'Sandwiches',
    imageSrc: sandwiches
  },
  {
    name: 'waffles',
    title: 'Waffles',
    imageSrc: waffles
  },
  {
    name: 'ramen',
    title: 'Ramen',
    imageSrc: ramen
  },
  {
    name: 'dips',
    title: 'Dips',
    imageSrc: dips
  }
];

const CategoryItem = ({ category }: CategoryItemProps) => {
  const { title, imageSrc, name } = category;
  return (
    <Col key={name}>
      <Stack className="category-item">
        <Image src={imageSrc} rounded />
        <span>{title}</span>
      </Stack>
    </Col>
  );
};

const CategoryList = () => {
  return (
    <Row lg={6} md={4} sm={2} xs={1} className="category-list">
      {CATEGORIES.filter((category) => category.tag === 'popular').map((category) => (
        <CategoryItem category={category} />
      ))}
    </Row>
  );
};

export default CategoryList;
