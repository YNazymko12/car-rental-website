import { BsCalendar2Week } from 'react-icons/bs';
import { BsCarFront } from 'react-icons/bs';
import { BsFuelPump } from 'react-icons/bs';
import { GoGear } from 'react-icons/go';

import css from './Specifications.module.css';

const Specifications = ({ year, type, fuelConsumption, engineSize }) => {
  return (
    <div>
      <h3 className={css.subtitle}>Car Specifications:</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <BsCalendar2Week />
          <p>Year: {year}</p>
        </li>
        <li className={css.item}>
          <BsCarFront />
          <p>Type: {type}</p>
        </li>
        <li className={css.item}>
          <BsFuelPump />
          <p>Fuel Consumption: {fuelConsumption}</p>
        </li>
        <li className={css.item}>
          <GoGear />
          <p>Engine Size: {engineSize}</p>
        </li>
      </ul>
    </div>
  );
};

export default Specifications;
