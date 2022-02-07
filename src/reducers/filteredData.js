const initialState = {
    filteredData: [],
    filterValue: "",
    speciesList: [],
    selectedProduct: ""
}

const filteredData = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_FILTERED':
            return {
                ...state,
                filteredData: action.payload
            }
        case 'FILTER_VALUE':
        return {
            ...state,
            filterValue: action.payload
        }
        case 'SPECIES_LIST':
            return {
                ...state,
                speciesList: action.payload
            }
        case 'SELECTED_PRODUCT':
            return {
                ...state,
                selectedProduct: action.payload
            }
        default: return state
    }
}

export default filteredData