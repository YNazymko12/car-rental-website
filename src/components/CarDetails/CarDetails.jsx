import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectCar } from '../../redux/car/selectors';
import { fetchCar } from '../../redux/car/operation';
import { useParams } from 'react-router-dom';

import Loader from '../Loader/Loader';
import CarInfo from '../CarInfo/CarInfo';
import RentalConditions from '../RentalConditions/RentalConditions';
import Specifications from '../Specifications/Specifications';
import Accessories from '../Accessories/Accessories';
import BookingForm from '../BookingForm/BookingForm';

import css from './CarDetails.module.css';

const CarDetaills = () => {
  const { id } = useParams();
  const car = useSelector(selectCar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCar(id));
    window.scrollTo(0, 0);
  }, [dispatch, id]);

  if (!car) {
    return <Loader />;
  }

  return (
    <div className={css.wrapper}>
      <div>
        <img
          className={css.image}
          src={car.img}
          alt={car.model}
          width="640"
          height="512"
        />
        <BookingForm />
      </div>
      <div>
        <CarInfo car={car} />
        <div className={css.infoWrapper}>
          <RentalConditions conditions={car.rentalConditions} />
          <Specifications
            year={car.year}
            type={css.type}
            fuelConsumption={car.fuelConsumption}
            engineSize={car.engineSize}
          />
          <Accessories
            accessories={car.accessories}
            functionalities={car.functionalities}
          />
        </div>
      </div>
    </div>
  );
};

export default CarDetaills;
