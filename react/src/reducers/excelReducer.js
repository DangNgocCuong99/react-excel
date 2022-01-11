import * as types from '../constants'
const initialState = {
    activePage:1,
    totalPages:1,
    listData:[],
    listExcel:[],
    isFetching:false,
    error:false,
    errorMessage:null
}

export default (state = initialState, action) => {
    switch (action.type) {

    case types.GET_EXCEL_REQUEST:
    case types.CREATE_EXCEL_REQUEST:
        case types.UPDATE_EXCEL_REQUEST:
            case types.DELETE_EXCEL_REQUEST:
        return { ...state,isFetching: true}


    case types.GET_EXCEL_SUCCESS:
        return { ...state, 
                listExcel:action.payload.listExcel,
                listData:action.payload.listData,
                activePage:action.payload.activePage,
                totalPages:action.payload.totalPages
        }


    case types.CREATE_EXCEL_SUCCESS:
        case types.UPDATE_EXCEL_SUCCESS:
            case types.DELETE_EXCEL_SUCCESS:
        return { ...state }


    case types.GET_EXCEL_FAILURE:
        case types.CREATE_EXCEL_FAILURE:
            case types.DELETE_EXCEL_FAILURE:
                case types.UPDATE_EXCEL_FAILURE:
        return { ...state, error: true, errorMessage:action.payload.errorMessage}

    default:
        return state
    }
}
