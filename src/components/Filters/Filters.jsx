import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import Select from 'react-select';
import { NumericFormat as NumberFormat } from 'react-number-format';
import { fetchBrands } from '../../redux/brands/operations';
import { selectBrands } from '../../redux/brands/selectors';
import { addFilters } from '../../redux/filters/slice';
import { customStylesBrand } from '../../utils/selectBrand.js';
import { customStylesPrice } from '../../utils/selectPrice.js';
import css from './Filters.module.css';

const Filters = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const brandOptions =
    brands?.map(brand => ({ label: brand, value: brand })) || [];
  const priceOptions = [30, 40, 50, 60, 70, 80, 90, 100].map(price => ({
    label: price.toString(),
    value: price,
  }));

  return (
    <Formik
      initialValues={{ brand: '', price: '', mileageFrom: '', mileageTo: '' }}
      onSubmit={values => dispatch(addFilters(values))}
    >
      {({ setFieldValue, values }) => (
        <Form className={css.filtersForm}>
          <div className={css.filterGroup}>
            <label className={css.label}>Car brand</label>
            <Select
              options={brandOptions}
              styles={customStylesBrand}
              placeholder="Choose a brand"
              onChange={option => setFieldValue('brand', option?.value || '')}
              isSearchable
            />
          </div>

          <div className={css.filterGroup}>
            <label className={css.label}>Price / 1 hour</label>
            <Select
              options={priceOptions}
              styles={customStylesPrice}
              getOptionLabel={option => option.label}
              formatOptionLabel={option =>
                values.price ? `To $${option.value}` : option.label
              }
              value={
                priceOptions.find(option => option.value === values.price) ||
                null
              }
              placeholder="Choose a price"
              onChange={option => setFieldValue('price', option?.value || '')}
            />
          </div>

          <div className={css.filterGroup}>
            <label className={css.label}>Car mileage / km</label>
            <div className={css.mileageInputs}>
              <div className={css.mileageInputGroup}>
                <span className={css.mileageLabel}>From</span>
                <NumberFormat
                  name="mileageFrom"
                  value={values.mileageFrom}
                  onValueChange={({ value }) =>
                    setFieldValue('mileageFrom', value)
                  }
                  thousandSeparator={true}
                  className={css.input}
                />
              </div>
              <div className={css.mileageInputGroup}>
                <span className={css.mileageLabel}>To</span>
                <NumberFormat
                  name="mileageTo"
                  value={values.mileageTo}
                  onValueChange={({ value }) =>
                    setFieldValue('mileageTo', value)
                  }
                  thousandSeparator={true}
                  className={css.input}
                />
              </div>
            </div>
          </div>

          <button type="submit" className={css.button}>
            Search
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Filters;
