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
                res.send('Datos insertados correctamente!')
            })
        } catch (error) {
            console.log('EL error en ejecucucion es: ' + error);
            res.send(error)
        }
    })
})


// metodo Put - Actualizar Datos en tb_servicios

routes.put('/:id', (req, res)=>{
    req.getConnection((error, conn) => {
        const barberos = ['','Edward','Joan','Carlos']
        const nombre_barbero = barberos[req.params.id]
        console.log(nombre_barbero)
         const barbero= {
             "nombre_barbero": req.params.id
         }
         const body = Object.assign(req.body,barbero)    
         console.log(body)
        //  console.log(barberos[1])
        // try {
        //     conn.query('UPDATE tb_servicios SET ? WHERE id = ? ', [req.body, req.params.id], (error, rows) => {
        //         res.send('Datos Actualizados correctamente!')
        //         console.log('Datos Actualizados correctamente!')
        //     })
        // } catch (error) {
        //     console.log('EL error en ejecucucion es: ' + error);
        //     res.send(error)
        // }
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