import * as types from '../constants'
export function getExcelRequest(payload) {
    return ({
        type: types.GET_EXCEL_REQUEST,
        payload
    })
}
export function getExcelSuccess(payload) {
    return ({
        type: types.GET_EXCEL_SUCCESS,
        payload
    })
}
export function getExcelFailure(payload) {
    return ({
        type: types.GET_EXCEL_FAILURE,
        payload
    })
}

export function createExcelRequest(payload) {
    return ({
        type: types.CREATE_EXCEL_REQUEST,
        payload
    })
}

export function createExcelSuccess(payload) {
    return({
        type: types.CREATE_EXCEL_SUCCESS,
        payload
    })
}

export function createExcelFailure(payload) {
    return({
        type: types.CREATE_EXCEL_FAILURE,
        payload
    })
}

export function updateExcelRequest(payload) {
    return ({
        type: types.UPDATE_EXCEL_REQUEST,
        payload
    })
}
export function updateExcelSuccess(payload) {
    return({
        type: types.UPDATE_EXCEL_SUCCESS,
        payload
    })
}
export function updateExcelFailure(payload) {
    return({
        type: types.UPDATE_EXCEL_FAILURE,
        payload
    })
}

export function deleteExcelRequest(payload) {
    return({
        type: types.DELETE_EXCEL_REQUEST,
        payload
    })
}
export function deleteExcelSuccess(payload) {
    return({
        type: types.DELETE_EXCEL_SUCCESS,
        payload
    })
}
export function deleteExcelFailure(payload) {
    return({
        type: types.DELETE_EXCEL_FAILURE,
        payload
    })
}