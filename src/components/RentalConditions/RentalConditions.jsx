import { FaRegCircleCheck } from 'react-icons/fa6';
import css from './RentalConditions.module.css';

const RentalConditions = ({ conditions }) => {
  return (
    <div className={css.wrapper}>
      <h3 className={css.subtitle}>Rental Conditions:</h3>
      <ul className={css.list}>
        {conditions.map((condition, index) => (
          <li className={css.item} key={index}>
            <FaRegCircleCheck />
            <p>{condition}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RentalConditions;
