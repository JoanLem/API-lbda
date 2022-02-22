const express = require('express')
const routes = express.Router()



// metodo Get - trae la indormacion de la tabla. 
routes.get('/', (req, res) => {
    req.getConnection((error, conn) => {
        try {
            conn.query('SELECT * FROM tb_servicios', (error, rows) => {
                res.json(rows)
            })
        } catch (error) {
            console.log('EL error en ejecucucion es: ' + error);
            res.send(error)
        }
    })
})

// metodo Post - insertar Datos en tb_servicios

routes.post('/', (req, res)=>{
    req.getConnection((error, conn) => {
        // console.log(req.body)
        try {
            conn.query('INSERT INTO tb_servicios set ? ', [req.body], (error, rows) => {
                if(error) res.send('EL error en ejecucucion es: ' + error);
                else{
                    res.send({
                        "status": 200,
                        "mensaje": 'Datos insertados correctamente!', 
                        "data": req.body
                    })
                }
            })
        } catch (error) {
            console.log('EL error en ejecucucion es: ' + error);
            res.send(error)
        }
    })
})


// metodo Put - Actualizar Datos en tb_servicios

routes.put('/:id', (req, res)=>{
    const barberos = ['','Edward','Joan','Carlos']
    let nombre_barbero = barberos[req.body.id_barbero]
    const barbero= {
        "nombre_barbero": nombre_barbero
    }
    const data = Object.assign(req.body,barbero)    
    req.getConnection((error, conn) => {
        try {
            console.log(data)
            conn.query('UPDATE tb_servicios SET ? WHERE id = ? ', [data, req.params.id], (error, rows) => {
                if(error) res.send('EL error en ejecucucion es: ' + error);
                else{
                    res.send({
                        "status": 200,
                        "mensaje": 'Datos Actualizados correctamente!', 
                        "data": data
                    })
                }
            })
        } catch (error) {
            console.log('EL error en ejecucucion es: ' + error);
            res.send(error)
        }
    })
})

// metodo Delete - Eliminar Datos en tb_servicios

routes.delete('/:id', (req, res)=>{
    req.getConnection((error, conn) => {
        // console.log(req.body)
        try {
            conn.query('DELETE FROM tb_servicios WHERE id = ? ', [req.params.id], (error, rows) => {
                res.send('Datos Eliminados correctamente!')
                console.log('Datos Eliminados correctamente!')
            })
        } catch (error) {
            console.log('EL error en ejecucucion es: ' + error);
            res.send(error)
        }
    })
})


module.exports = routes