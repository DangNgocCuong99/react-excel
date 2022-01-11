import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
import Item from '../components'
export class index extends Component {
    componentDidMount(){
        this.props.getRequest({activePage:1})
    }
    render() {
        return (
            <div>
                <  Item {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    listData:state.item.listData,
    listExcel:state.item.listExcel,
    totalPages:state.item.totalPages,
    activePage:state.item.activePage
})

const mapDispatchToProps = (dispatch) => ({
    getRequest:(data) => dispatch(
        actions.getExcelRequest(data)
    ),
    createRequest:(data) => dispatch(
        actions.createExcelRequest(data)
    ),
    updateRequest:(data) => dispatch(
        actions.updateExcelRequest(data)
    ),
    deleteRequest:(data) => dispatch(
        actions.deleteExcelRequest(data)
    )
})

export default connect(mapStateToProps, mapDispatchToProps)(index)
