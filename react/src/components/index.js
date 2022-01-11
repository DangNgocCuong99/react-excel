import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import XLSX from 'xlsx'
// import FileSaver from 'file-saver'

export default class index extends Component {
    state = {
        name: '',
        age: '',
        id: '',
        arrFile: [],
        fileName: ''
    }
    handleSelect = (id, name, age) => {
        return (
            this.setState({
                id: id,
                name: name,
                age: age
            })
        )
    }
    handleDelete = (id) => {
        return (
            this.props.deleteRequest({ id: id })
        )
    }
    handleAdd = () => {
        let form = new FormData()
        form.append('key', 'add')
        form.append('name', this.state.name)
        form.append('age', this.state.age)
        this.props.createRequest({ form: form })
    }
    handleUpdate = () => {
        let form = new FormData()
        form.append('id', this.state.id)
        form.append('name', this.state.name)
        form.append('age', this.state.age)
        this.props.updateRequest({ form: form })
    }
    handleFile = (file) => {
        this.setState({ arrFile: file })
    }
    handleImport = () => {
        let form = new FormData()
        for (let i = 0; i < this.state.arrFile.length; i++) {
            form.append('file', this.state.arrFile[i])
        }
        form.append('key', 'import')
        return (
            this.props.createRequest({ form: form })
        )
    }
    handleExport = (listExport) => {
        console.log(listExport,'sss');
        // const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
        // const fileExtension = '.xlsx';
        // const ws = XLSX.utils.json_to_sheet(listExport);
        // const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        // const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        // const data = new Blob([excelBuffer], { type: fileType });
        // FileSaver.saveAs(data, this.state.fileName + fileExtension);

        var a = this.state.fileName + '.xlsx'
        const ws = XLSX.utils.json_to_sheet(listExport);
        console.log(ws,'wsssssss');
        const wb = { SheetNames: ['data'],Sheets: { 'data': ws } };
        console.log(wb,'wbbbbbbbbbb');
        XLSX.writeFile(wb,a);

    }
    render() {
        // var Export=[]
        var listExport = []
        console.log(listExport,'ssss');
        if (this.props.listExcel) {
            // for(let i= 0 ; i < this.props.listExcel.length ; i++) {
            //     console.log(i,'ssss');
            //     if(i>=3 && i<10) {
            //         Export.push(this.props.listExcel[i])
            //     }
            //     else {
            //         console.log('khong lay')
            //     }
                
            // }

            this.props.listExcel.forEach((item, index) => {
                return(

                    listExport.push({ id: Math.floor(Math.random() * 100), name: item.name, age: item.age,sfaa:'fafa' })
        
                )
            })
        }
        let listData = []
        if (this.props.listData) {
            listData = this.props.listData.map((item, index) => {
                return (
                    <tr key={index}>
                        <th>{item.name}</th>
                        <th>{item.age}</th>
                        <th>
                            <button onClick={() => this.handleSelect(item._id, item.name, item.age)}>Select</button>
                            <button onClick={() => this.handleDelete(item._id)}>DELETE</button>
                        </th>
                    </tr>
                )
            })
        }

        let btn = []
        if (this.props.totalPages) {
            for (let i = 1; i <= this.props.totalPages; i++) {
                btn.push(
                    <button key={i}
                        style={
                            this.props.activePage !== i ?
                                { backgroundColor: 'white', color: 'black' }
                                : { backgroundColor: 'black', color: 'white' }
                        }
                        onClick={() => this.props.getRequest({ activePage: i })}
                    >{i}</button>
                )
            }
        }
        return (
            <div>
                <input type='file' onChange={(e) => this.handleFile(e.target.files)} />
                <button onClick={this.handleImport}>Import</button><br /><br/>
                <input value={this.state.fileName} onChange={(e) => this.setState({ fileName: e.target.value })} />
                <button onClick={()=>this.handleExport(listExport)}>Export</button>
                <br /><br />
                <input value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} />
                <input value={this.state.age} onChange={(e) => this.setState({ age: e.target.value })} />
                <button onClick={this.handleAdd}>add</button>
                <button onClick={this.handleUpdate}>update</button>
                <br/><br/>
                <Table striped bordered hover>
                    <tbody>
                        <tr style={{backgroundColor: 'pink'}}>
                            <th>Name</th>
                            <th>Age</th>
                            <th width="150px" height="80px"></th>
                            </tr>
                        {listData}
                    </tbody>

                </Table>
                {btn}
            </div>
        )
    }
}
