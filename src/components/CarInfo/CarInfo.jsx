import { SlLocationPin } from 'react-icons/sl';

import css from './CarInfo.module.css';

const CarInfo = ({ car }) => {
  const extractedId = car.img ? car.img.match(/(\d+)-ai\.jpg$/)?.[1] : null;
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <h2 className={css.title}>
          {car.brand} {car.model}, {car.year}
        </h2>
        <p className={css.id}>Id: {extractedId}</p>
      </div>
      <div className={css.textWrapper}>
        <div className={css.addressWrapper}>
          <SlLocationPin />
          <p className={css.address}>
            {car.address.split(', ').slice(1).join(', ')}
          </p>
        </div>
        <p className={css.mileage}>Mileage: {car.mileage}</p>
      </div>
      <p className={css.price}>${car.rentalPrice}</p>
      <p className={css.description}>{car.description}</p>
    </div>
  );
};
export default CarInfo;
