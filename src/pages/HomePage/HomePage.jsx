import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <section className={css.hero}>
      <div className={css.container}>
        <h1 className={css.title}>Find your perfect rental car</h1>
        <p className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <button className={css.button} type="button">
          View Catalog
        </button>
      </div>
    </section>
  );
}
