import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { fetchAllCars } from '../../redux/cars/operations';
import { resetFilters } from '../../redux/filters/slice';
import { selectTotalPages, selectError } from '../../redux/cars/selectors';
import { selectPaginationPage } from '../../redux/pagination/selectors';
import { nextPage } from '../../redux/pagination/slice';

import Filters from '../../components/Filters/Filters';
import CatalogList from '../../components/CatalogList/CatalogList';

import css from './CatalogPage.module.css';

export default function CatalogPage() {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectPaginationPage);
  const totalPages = useSelector(selectTotalPages);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllCars(currentPage));
    dispatch(resetFilters());
  }, [dispatch, currentPage]);

  useEffect(() => {
    if (error) {
      toast.error(error, { position: 'top-right' });
    }
  }, [error]);

  const loadMore = () => {
    if (currentPage < totalPages) {
      dispatch(nextPage());
    }
  };

  return (
    <section className={css.section}>
      <Toaster />
      <Filters />
      <CatalogList loadMore={loadMore} />
    </section>
  );
}
