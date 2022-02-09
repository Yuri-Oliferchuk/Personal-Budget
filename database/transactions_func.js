const { pool } = require('../config')

const addMoveTransaction = async(req, res) => {
    let date = new Date()
    let envelope_id = req.params.from
    let payment_recipient = req.params.to
    let quantity = req.body.quantity

    let sql = 'SELECT quantity FROM budget_database WHERE id = $1'
    let sqlAddTransaction = 'INSERT INTO transaction (date, payment_amount, payment_recipient, envelope_id) VALUES ($1, $2, $3, $4);'
    let sqlUpdate = 'UPDATE budget_database SET quantity=$1 WHERE id=$2'

    let oldQuantitiesFrom = await pool.query(sql, [envelope_id])
    let oldQuantitiesTo = await pool.query(sql, [payment_recipient])

    let quantity1 = oldQuantitiesFrom.rows[0].quantity - quantity
    let quantity2 = oldQuantitiesTo.rows[0].quantity + quantity
    
    await pool.query(sqlUpdate, [quantity1, envelope_id])
    await pool.query(sqlUpdate, [quantity2, payment_recipient])

    await pool.query(sqlAddTransaction, [date, quantity, payment_recipient, envelope_id])

    res.send('Date:' + date + ' transaction ' + quantity + ' from:' + envelope_id + ' to:' + payment_recipient )
}

const addNewTransaction = async(req, res) => {
    let date = new Date()
    let payment_recipient = req.params.to
    let quantity = req.body.quantity

    let sql = 'SELECT quantity FROM budget_database WHERE id = $1'
    let sqlAddTransaction = 'INSERT INTO transaction (date, payment_amount, payment_recipient) VALUES ($1, $2, $3);'
    let sqlUpdate = 'UPDATE budget_database SET quantity=$1 WHERE id=$2'

    let oldQuantitiesTo = await pool.query(sql, [payment_recipient])

    let quantity2 = oldQuantitiesTo.rows[0].quantity + quantity
    
    await pool.query(sqlUpdate, [quantity2, payment_recipient])

    await pool.query(sqlAddTransaction, [date, quantity, payment_recipient])

    res.send('Date:' + date + ' transaction ' + quantity + ' to:' + payment_recipient )
}

const addSubTransaction = async(req, res) => {
    let date = new Date()
    let payment_recipient = req.body.payment_recipient
    let quantity = req.body.quantity

    let sql = 'SELECT quantity FROM budget_database WHERE id = $1'
    let sqlAddTransaction = 'INSERT INTO transaction (date, payment_amount, payment_recipient) VALUES ($1, $2, $3);'
    let sqlUpdate = 'UPDATE budget_database SET quantity=$1 WHERE id=$2'

    let oldQuantitiesTo = await pool.query(sql, [payment_recipient])

    let quantity2 = oldQuantitiesTo.rows[0].quantity - quantity
    
    await pool.query(sqlUpdate, [quantity2, payment_recipient])

    await pool.query(sqlAddTransaction, [date, 0-quantity, payment_recipient])

    res.send('Date:' + date + ' take money '+ quantity + ' from:' + payment_recipient )
}

const getAllTransactions = (req, res) => {
    pool.query('SELECT * FROM transaction ORDER BY id', (error, results) => {
      if (error) {throw error}
      res.status(200).json(results.rows)
    })
}

const getTransaction = (req, res) => {
    pool.query('SELECT * FROM transaction WHERE id=$1', [req.params.id], (error, results) => {
      if (error) {throw error}
      res.status(200).json(results.rows)
    })
}

const deleteTransactionById = (req, res) => {
    pool.query('DELETE FROM transaction WHERE id=$1', [req.params.id], (error, results) => {
        if(error) {throw error}
        res.status(200).json({ status: 'success', message: `Transaction #${req.params.id} - deleted.`})
    })
}

module.exports = { 
    addMoveTransaction,
    addNewTransaction,
    addSubTransaction,
    getAllTransactions,
    getTransaction,
    deleteTransactionById,
};