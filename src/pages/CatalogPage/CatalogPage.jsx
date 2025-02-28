import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllCars } from '../../redux/cars/operations';

import CatalogList from '../../components/CatalogList/CatalogList';

import css from './CatalogPage.module.css';

export default function CatalogPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllCars());
  }, [dispatch]);

  return (
    <section className={css.section}>
      <div>
        <CatalogList />
      </div>
    </section>
  );
}
