import * as Api from '../fetchAPIs/callAPI'
import * as types from '../constants'
import * as actions from '../actions'
import { takeEvery,put } from 'redux-saga/effects'

function * getExcel(action) {
    try {
        const res = yield Api.getApi(action.payload)
        yield put (actions.getExcelSuccess({
            listData:res.listData,
            listExcel:res.listExcel,
            activePage:res.activePage,
            totalPages:res.totalPages,
        }))
    } catch (error) {
        yield put (actions.getExcelFailure({
            errorMessage:error.message
        }))
    }
}

function * createExcel (action) {
    try {
        yield Api.createApi(action.payload)
        yield put (actions.createExcelSuccess())
        yield put (actions.getExcelRequest({activePage:1}))
    } catch (error) {
        yield put (actions.createExcelFailure({
            errorMessage:error.message
        }))
    }
}
function * updateExcel (action) {
    try {
        yield Api.updateApi(action.payload)
        yield put (actions.updateExcelSuccess())
        yield put (actions.getExcelRequest({activePage:1}))
    } catch (error) {
        yield put (actions.updateExcelFailure({
            errorMessage:error.message
        }))
    }
}
function * deleteExcel (action) {
    try {
        yield Api.deleteApi(action.payload)
        yield put (actions.deleteExcelSuccess())
        yield put (actions.getExcelRequest({activePage:1}))
    } catch (error) {
        yield put (actions.deleteExcelFailure({
            errorMessage:error.message
        }))
    }
}

export const excelSaga =[
    takeEvery(types.GET_EXCEL_REQUEST,getExcel),
    takeEvery(types.CREATE_EXCEL_REQUEST,createExcel),
    takeEvery(types.DELETE_EXCEL_REQUEST,deleteExcel),
    takeEvery(types.UPDATE_EXCEL_REQUEST,updateExcel)
]