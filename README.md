# API links

**GET**<br>
http://localhost:3000/api/envelopes/ - get all envelopes.<br>
http://localhost:3000/api/envelopes/:id/ - get envelop by it`s ID.<br>
http://test:3000/api/transactions/ - get all transactions from base<br>
http://test:3000/api/transactions/:id/ - get transaction from base<br>

**POST**<br>
http://localhost:3000/api/envelopes/ - create new envelop. Request must have JSON data with new envelop information.<br>
http://localhost:3000/api/transactions/:from/:to/ - copy quantity from envelope with id(:from) to envelope with id(:to). Request must have JSON data with quantity.<br>
http://localhost:3000/api/transactions/:to/ - add money to envelope with id(:to). Request must have JSON data with quantity.<br>
http://localhost:3000/api/transactions/ - take money from envelope. Request must have JSON data with quantity and payment_recipient.<br>


**PUT**<br>
http://localhost:3000/api/envelopes/ - edit element in base. Request must have JSON data with envelop information.<br>

**DELETE**<br>
http://localhost:3000/api/envelopes/:id/ - delete element by it`s ID.<br>
http://localhost:3000/api/transactions/:id/ - delete transaction0 by it`s ID.<br>



# Data base structure
    id: - envelope ID<br>
    title: - description<br>
    quantity: - money in an envelope<br>

# Transactions database
    id: - SERIAL PRIMARY KEY<br>
    date: - timestamp<br>
    payment_amount: - INTEGER NOT NULL<br>
    payment_recipient: - INTEGER NOT NULL<br>
    envelope_id: - INTEGER REFERENCES budget_database(ID)<br>


# Function for working with database

__"cat init.sql | heroku pg:psql <db.name> --app <app.name>"__ - for installing start database to heroku <br>

# .env
DB_USER=personal_budget_api<br>
DB_PASSWORD=password<br>
DB_HOST=localhost<br>
DB_PORT=5432<br>
DB_DATABASE=postgres<br>