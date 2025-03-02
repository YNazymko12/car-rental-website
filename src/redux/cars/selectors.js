import { createSelector } from '@reduxjs/toolkit';
import { selectFilters } from '../filters/selectors';

export const selectCars = state => state.allCars.cars || [];
export const selectIsLoading = state => state.allCars.isLoading;
export const selectError = state => state.allCars.error;
export const selectTotalPages = state => state.allCars.totalPages;

export const selectVisibleCars = createSelector(
  [selectCars, selectFilters],
  (cars, filters = {}) => {
    return cars.filter(car => {
      return (
        (filters.brand ? car.brand === filters.brand : true) &&
        (filters.price
          ? Number(car.rentalPrice) <= Number(filters.price)
          : true) &&
        (filters.mileageFrom
          ? Number(car.mileage) >= Number(filters.mileageFrom)
          : true) &&
        (filters.mileageTo
          ? Number(car.mileage) <= Number(filters.mileageTo)
          : true)
      );
    });
  }
);
