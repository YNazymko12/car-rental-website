import { useSelector } from 'react-redux';
import clsx from 'clsx';
import {
  selectVisibleCars,
  selectIsLoading,
  selectTotalPages,
} from '../../redux/cars/selectors';
import CatalogCarCard from '../CatalogCarCard/CatalogCarCard';
import css from './CatalogList.module.css';

const CatalogList = ({ loadMore }) => {
  const cars = useSelector(selectVisibleCars);
  const loading = useSelector(selectIsLoading);
  const totalPages = useSelector(selectTotalPages);
  const currentPage = useSelector(state => state.pagination.page);

  const shouldShowLoadMore =
    cars.length > 0 &&
    currentPage < totalPages &&
    (cars.length >= 12 || currentPage === 1);

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

      {shouldShowLoadMore && (
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
