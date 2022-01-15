**API links**


**GET**

http://localhost:3000/api/envelopes/ - get all envelopes.

http://localhost:3000/api/envelopes/:id/ - get envelop by it`s ID.


**POST**

http://localhost:3000/api/envelopes/ - create new envelop. Request must have JSON data with new envelop information.

http://localhost:3000/api/envelopes/transfer/:from/:to/ - copy quantity from envelope with id(:from) to envelope with id(:to). Request must have JSON data with quantity.


**PUT**

http://localhost:3000/api/envelopes/ - edit element in base. Request must have JSON data with envelop information.


**DELETE**

http://localhost:3000/api/envelopes/:id/ - delete element by it`s ID.



**Data base structure**

    id: - envelope ID
    title: - description
    quantity: - money in an envelope



**Function for working with database**

__addToDatabase(DataBaseName, Object)__ - adding new object to database.

__selectById(DataBaseName, id)__ - get one envelope from the database by it ID.

__updateElement(DataBaseName, Object)__ - changing new object to database.

__deleteById(DataBaseName, id)__ - delete envelope in the base by it ID.
