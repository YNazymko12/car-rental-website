import { FaRegCircleCheck } from 'react-icons/fa6';
import css from './Accessories.module.css';

const Accessories = ({ accessories, functionalities }) => {
  return (
    <div>
      <h3 className={css.subtitle}>Accessories and Functionalities:</h3>
      <ul className={css.list}>
        {accessories.concat(functionalities).map((feature, index) => (
          <li className={css.item} key={index}>
            <FaRegCircleCheck />
            <p>{feature}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accessories;
