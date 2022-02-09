# API links

**GET**
http://localhost:3000/api/envelopes/ - get all envelopes.<br>
http://localhost:3000/api/envelopes/:id/ - get envelop by it`s ID.<br>

**POST**
http://localhost:3000/api/envelopes/ - create new envelop. Request must have JSON data with new envelop information.<br>
http://localhost:3000/api/envelopes/transfer/:from/:to/ - copy quantity from envelope with id(:from) to envelope with id(:to). Request must have JSON data with quantity.<br>

**PUT**
http://localhost:3000/api/envelopes/ - edit element in base. Request must have JSON data with envelop information.<br>

**DELETE**
http://localhost:3000/api/envelopes/:id/ - delete element by it`s ID.<br>


# Data base structure
    id: - envelope ID<br>
    title: - description<br>
    quantity: - money in an envelope<br>


# Function for working with database

__"cat init.sql | heroku pg:psql <db.name> --app <app.name>"__ - for installing start database to heroku <br>

__getAll__ - get all rows from database.<br>
__getById__ - get row from database by it`s id.<br>
__addToDatabase__ - adding new object to database.<br>
__updateElement__ - changing new object to database.<br>
__deleteById__ - delete envelope in the base by it ID.<br>
__moveQuantity__ - move quantities from one envelope to other<br>

# .env
DB_USER=personal_budget_api<br>
DB_PASSWORD=password<br>
DB_HOST=localhost<br>
DB_PORT=5432<br>
DB_DATABASE=postgres<br>