import React from 'react';
import PropTypes from 'prop-types';
function Food({name,picture, rating}){
  return (
    <div>
      <h2>{name}</h2>
      <h4>{rating}/5.0</h4>
      <img src ={picture} />
    </div>
  );
}

const foodILike = [{
  id : 1,
  name : '안',
  image : 'https://1.gall-img.com/hygall/files/attach/images/82/360/121/302/7056bd8e31e02efbec0a196075fa00d5.jpg',
  rating : 5,
},
{
  id : 2,
  name : '녕',
  image : 'https://1.gall-img.com/hygall/files/attach/images/82/360/121/302/7056bd8e31e02efbec0a196075fa00d5.jpg',
  rating : 3,
}]

function renderFood(dish){
  return <Food key = {dish.id} name ={dish.name} picture = {dish.image} rating = {dish.rating} />;
}

function App() {
  return( 
    <div>
      {foodILike.map(renderFood)}
      
    </div>
  );
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
};

export default App;
