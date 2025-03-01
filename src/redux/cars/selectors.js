export const selectCars = state => state.allCars.cars || [];
export const selectIsLoading = state => state.allCars.isLoading;
export const selectError = state => state.allCars.error;
export const selectTotalPages = state => state.allCars.totalPages;
