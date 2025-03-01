import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import clsx from 'clsx';
import {
  selectCars,
  selectIsLoading,
  selectError,
  selectTotalPages,
} from '../../redux/cars/selectors';
import { fetchAllCars } from '../../redux/cars/operations';
import { selectPaginationPage } from '../../redux/pagination/selectors';
import { nextPage } from '../../redux/pagination/slice';

import CatalogCarCard from '../CatalogCarCard/CatalogCarCard';

import css from './CatalogList.module.css';
import { useEffect } from 'react';

const CatalogList = () => {
  const cars = useSelector(selectCars);
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const currentPage = useSelector(selectPaginationPage);
  const totalPages = useSelector(selectTotalPages);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars(currentPage));
  }, [dispatch, currentPage]);

  const loadMore = () => {
    dispatch(nextPage());
  };

  if (error) {
    toast.error(error, { position: 'top-right' });
  }

  return (
    <>
      <ul className={css.list}>
        {Array.isArray(cars) &&
          cars.length > 0 &&
          cars.map(car => (
            <li className={css.item} key={car.id}>
              <CatalogCarCard car={car} />
            </li>
          ))}
      </ul>
      {error && <Toaster />}
      {cars.length > 0 && currentPage < totalPages && (
        <div className={css.buttonContainer}>
          <button
            onClick={loadMore}
            className={clsx(loading ? css.disLoadMore : css.loadMore)}
            disabled={loading}
          >
            {loading ? 'Loading...' : 'Load more'}
          </button>
        </div>
      )}
    </>
  );
};

export default CatalogList;
