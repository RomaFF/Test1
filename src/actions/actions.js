export const fetchData = () => (dispatch) => {
    dispatch(dataFetching());
        fetch(`https://61fbc6493f1e34001792c5dd.mockapi.io/data/test`)
            .then(res => res.json())
            .then(data => {
                dispatch(dataFetched(data[0].products))
                /*dispatch(dataFiltered(data[0].products))*/
                const select = [...new Set(data[0].products.map(item => item.bsr_category))]
                dispatch(speciesSelect(select))
            })
            .catch(() => dispatch(dataFetchingError()))
}

export const dataFetching = () => {
    return {
        type: 'DATA_FETCHING'
    }
}

export const dataFetched = (data) => {
    return {
        type: 'DATA_FETCHED',
        payload: data
    }
}

export const dataFetchingError = () => {
    return {
        type: 'DATA_FETCHING_ERROR'
    }
}

export const dataFiltered = (data) => {
    return {
        type: 'DATA_FILTERED', 
        payload: data
    }
}

export const filteredInputValue = (inputValue) => {
    return {
        type: 'FILTER_VALUE',
        payload: inputValue
    }
}

export const speciesSelect = (data) => {
    return {
        type: 'SPECIES_LIST',
        payload: data
    }
}

export const changeProducts = (select) => {
    return {
        type: 'SELECTED_PRODUCT',
        payload: select
    }
}


