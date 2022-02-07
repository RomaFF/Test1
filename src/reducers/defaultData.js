const initialState = {
    data: "",
    dataLoadingStatus: 'fetched'
}

const defaultData = (state = initialState, action) => {
    switch (action.type) {
        case 'DATA_FETCHING':
            return {
                ...state,
                dataLoadingStatus: 'fetching'
            }
        case 'DATA_FETCHED':
            return {
                ...state,
                data: action.payload,
                dataLoadingStatus: 'fetched'
            }
        case 'DATA_FETCHING_ERROR':
            debugger
            return {
                ...state,
                dataLoadingStatus: 'error'
            }
        default: return state
    }
}

export default defaultData