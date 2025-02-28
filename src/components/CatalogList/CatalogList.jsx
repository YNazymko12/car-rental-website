import { useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import {
  selectCars,
  selectIsLoading,
  selectError,
} from '../../redux/cars/selectors';

import CatalogCarCard from '../CatalogCarCard/CatalogCarCard';

import css from './CatalogList.module.css';

const CatalogList = () => {
  const cars = useSelector(selectCars);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  if (error) {
    toast.error('An error occurred while fetching cars.', {
      position: 'top-right',
    });
  }

  return (
    <>
      <ul className={css.list}>
        {cars.map(car => (
          <li className={css.item} key={car.id}>
            <CatalogCarCard car={car} />
          </li>
        ))}
      </ul>
      {error && <Toaster />}
    </>
  );
};

export default CatalogList;
