export const selectCars = state => state.allCars.items || [];
export const selectIsLoading = state => state.allCars.isLoading;
export const selectError = state => state.allCars.error;
