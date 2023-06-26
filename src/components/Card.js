import '../styles/card.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

const Card = ({ id, source, title, price, size }) => {
  const handleClick = () => {
    console.log('clic')
  }
  
  return (
    <li>
        <img src={source} alt={title}/>
        <div className='card__text'>
          <h3>{title}</h3>
        {price && <p>{price} €</p>}
        {size && <p>Taille {size} </p>}
        </div>
        <div onClick={handleClick} className='card__close'>
          <AiOutlineCloseCircle/>
        </div>
    </li>
  )
  }

export default Card