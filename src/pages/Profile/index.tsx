import Food from '../../models/Food'

import FoodsList from "../../components/FoodsList"
import ProfileHeader from "../../components/ProfileHeader"

import pizza from '../../assets/images/pizza.png'

const foodsList: Food[] = [
  {
    id: 1,
    name: 'Pizza Marguerita', 
    image: pizza,
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 2,
    name: 'Pizza Marguerita', 
    image: pizza,
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 3,
    name: 'Pizza Marguerita', 
    image: pizza,
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 4,
    name: 'Pizza Marguerita', 
    image: pizza,
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 5,
    name: 'Pizza Marguerita', 
    image: pizza,
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  },
  {
    id: 6,
    name: 'Pizza Marguerita', 
    image: pizza,
    description: 'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!'
  }
]

const Profile = () => (
  <>
    <ProfileHeader />
    <FoodsList food={foodsList} />
  </>
)

export default Profile
