import { PuffLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.container}>
      <PuffLoader loading={true} color="#3470ff" />
    </div>
  );
};

export default Loader;
