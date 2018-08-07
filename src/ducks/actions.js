import ActionTypes from '../constants/ActionTypes';

export const mapDispatchToProps = dispatch => {
    return { fetchData: url => dispatch(itemsFetchData(url)) };
};

function itemsFetchData() {
    return dispatch => {
        dispatch(itemsIsLoading(true));
        fetch(`https://5826ed963900d612000138bd.mockapi.io/items`)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(items => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}

function itemsHasErrored(bool) {
    return {
        type: ActionTypes.ITEMS_HAS_ERRORED,
        hasErrored: bool
    };
}

function itemsIsLoading(bool) {
    return {
        type: ActionTypes.ITEMS_IS_LOADING,
        isLoading: bool
    };
}

function itemsFetchDataSuccess(items) {
    return {
        type: ActionTypes.ITEMS_FETCH_DATA_SUCCESS,
        items
    };
}
