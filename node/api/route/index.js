const { getExcel,createExcel, updateExcel,deleteExcel } = require('../controller')
const routes = (app) =>{
    app.get('/',getExcel),
    app.post('/',createExcel),
    app.put('/',updateExcel),
    app.delete('/',deleteExcel)
}
module.exports = routes