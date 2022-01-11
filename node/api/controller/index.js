const itemModel = require('../model')
const XLSX = require('xlsx')
const path = require('path')
exports.getExcel = async (req, res) => {
    try {
        // const limit = + req.query.limit
        // const activePage = + req.query.activePage
        // const skip = (activePage - 1) * limit
        // const model1 = req.query.model1
        const a = +req.query.a
        // const b =req.query.b
        const model = req.query.model
        const model2 = req.query.model2
        const kk = await itemModel.find({})
        const arr = await itemModel.find({},[model]).select(['-_id'])
        listExcel = []
        for (let i = 0; i < arr.length; i++) {
            i===(a-1) ?
            listExcel.push(arr[i])
            :null
        }
        console.log(kk)
        // console.log(listExcel,'sss');
        // const totalPages = Math.ceil(arr.length / limit)
        // const listData = await itemModel.find({}).skip(skip).limit(limit)
        res.send({
            // listExcel, totalPages, activePage, listData
            listExcel
        })
    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.createExcel = async (req, res) => {
    try {
        const key = req.body.key
        console.log(key);

        switch (key) {
            case 'import':
                let file = req.files[0]
                console.log(file, "dang  o day");
                var workbook = XLSX.readFile(file.path)
                var sheet_name_list = workbook.SheetNames
                console.log(workbook,'workbook');
                var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]])
                console.log(xlData,'dataJson')
                const DataExcel = itemModel.insertMany(xlData)
                return (
                    res.json(DataExcel)
                )
            case 'add':
                const name = req.body.name
                const age = req.body.age
                return (
                    await itemModel.create({ name: name, age: age }),
                    res.send({ mess: 'them thanh cong' })
                )
        }

    } catch (error) {
        res.send({ error: error.message })
    }
}

exports.updateExcel = async (req, res) => {
    try {
        const id = req.body.id
        const name = req.body.name
        const age = req.body.age
        await itemModel.findByIdAndUpdate(id, { name: name, age: age })
        res.send({ mess: 'sua thanh cong' })
    } catch (error) {
        res.send({ error: error.message })
    }
}
exports.deleteExcel = async (req, res) => {
    try {
        const id = req.query.id
        await itemModel.findByIdAndDelete(id)
        res.send({ mess: 'da xoa' })
    } catch (error) {
        res.send({ error: error.message })
    }
}
