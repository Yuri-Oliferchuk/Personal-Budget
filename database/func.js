const { pool } = require('../config')

const getAll = (req, res) => {
    pool.query('SELECT * FROM budget_database ORDER BY id', (error, results) => {
      if (error) {
        throw error
      }
      res.status(200).json(results.rows)
    })
}

const getById = (req, res) => {
    let id = req.params.id;
    pool.query('SELECT * FROM budget_database WHERE id = $1', [id], (error, results) => {
        if (error) {
          throw error
        }
        res.status(200).json(results.rows)
    })
}

const addToDatabase = (req, res) => {
    let title = req.body.title;
    let quantity = req.body.quantity;
    pool.query('INSERT INTO budget_database (title, quantity) VALUES ($1, $2)', [title, quantity], (error, results) => {
        if (error) {
            throw error
          }
        res.status(201).json({ status: 'success', message: 'Envelope added.' })
    })
}

const updateElement = (req, res) => {
    let title = req.body.title;
    let quantity = req.body.quantity;
    let id = req.body.id;
    pool.query('UPDATE budget_database SET title=$1, quantity=$2 WHERE id=$3', [title, quantity, id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(202).json({ status: 'success', message: 'Envelope updated.'})
    })
}

const deleteById = (req, res) => {
    let id = req.params.id
    pool.query('DELETE FROM budget_database WHERE id=$1', [id], (error, results) => {
        if(error) {
            throw error
        }
        res.status(200).json({ status: 'success', message: `Envelope #${id} - deleted.`})
    })
}

const moveQuantity = async(req, res) => {
    let quantity = req.body.quantity;
    let sql = 'SELECT quantity FROM budget_database WHERE id = $1';
    let sqlUpdate = 'UPDATE budget_database SET quantity=$1 WHERE id=$2'

    let oldQuantitiesFrom = await pool.query(sql, [req.params.from])
    let oldQuantitiesTo = await pool.query(sql, [req.params.to])

    let quantity1 = String(Number(oldQuantitiesFrom.rows[0].quantity)-Number(quantity))
    let quantity2 = String(Number(oldQuantitiesTo.rows[0].quantity)+Number(quantity))
    
    await pool.query(sqlUpdate, [quantity1, req.params.from])
    await pool.query(sqlUpdate, [quantity2, req.params.to])

    res.status(200).send('Quantities was changed')
}

 
module.exports = { 
    getAll,
    getById,
    addToDatabase,
    updateElement,
    deleteById,
    moveQuantity,
};