import notFoundImage from '../../assets/images/404.webp';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.container}>
      <img className={css.image} src={notFoundImage} alt="404 image" />
    </div>
  );
};

export default NotFoundPage;
