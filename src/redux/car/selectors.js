export const selectCar = state => state.car?.car || null;
export const selectIsLoading = state => state.car.isLoading;
export const selectError = state => state.car.error;
