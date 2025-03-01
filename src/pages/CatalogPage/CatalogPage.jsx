import CatalogList from '../../components/CatalogList/CatalogList';

import css from './CatalogPage.module.css';

export default function CatalogPage() {
  return (
    <section className={css.section}>
      <div>
        <CatalogList />
      </div>
    </section>
  );
}
