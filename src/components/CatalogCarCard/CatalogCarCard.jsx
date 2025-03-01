import { Link } from 'react-router-dom';
import css from './CatalogCarCard.module.css';

const CatalogCarCard = ({ car }) => {
  const {
    id,
    year,
    brand,
    model,
    type,
    img,
    rentalPrice,
    address,
    rentalCompany,
    mileage,
  } = car;

  const addressParts = address.split(', ').slice(1);

  return (
    <>
      <div>
        <img
          className={css.image}
          src={img}
          alt={`${brand} ${model}`}
          width="276"
          height="268"
        />
        <div className={css.titleContainer}>
          <h2 className={css.title}>
            {brand} <span className={css.model}>{model}</span>, {year}
          </h2>
          <h2 className={css.title}>${rentalPrice}</h2>
        </div>

        <div className={css.info}>
          <p className={css.infoText}>
            {addressParts.join(' | ')} | {rentalCompany} |
          </p>
          <p className={css.infoText}>
            {type} | {mileage.toLocaleString('uk-UA')} km
          </p>
        </div>
        <Link className={css.button} to={`/catalog/${id}`}>
          Read more
        </Link>
      </div>
    </>
  );
};

export default CatalogCarCard;
