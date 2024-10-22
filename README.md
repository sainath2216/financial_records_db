# Personal Expense Tracker


APIs to perform operations on the table `Personal Expense Tracker fincial financial records` containing the following columns,

categories:                                    

        | Columns       | Type    |                                
        | ------------- | ------- |                                 
        | id            | INTEGER |                                                 
        | name          | STRING  |                                                     
        | type          | STRING  |                           
        | category      | String  |                                
                                                              
 transactions:
 
            | Columns       | Type    | 
            | ------------- | ------- |
            | id            | INTEGER |
            | type          | STRING  |
            | category      | String  |
            | amount        | INTEGER |
            | date          | String  |
            | description   | String  |


### Transactions Base URL:
### API 1

#### Path: `transactions`

#### Method: `POST`

#### Description:

Creates a new income or expense transaction.
### Request:
+ Content-Type: application/json
+ Body:
```
[
  {
  "type": "income", 
  "category": "salary",
  "amount": 5000,
  "date": "2024-10-22",
  "description": "October salary"
},
  ...
]
```

#### Response
+ Success (201 Created):
```
[
  {
 "_id": "60b7c04e8e99e0b6c8f9b999",
  "type": "income",
  "category": "salary",
  "amount": 1000,
  "date": "2024-10-23T00:00:00.000Z",
  "description": "October salary",
  "__v": 0
},
  ...
]
```
+ Error (400 Bad Request):
```
[
  {
  "error": "Invalid input"
},
  ...
]
```

### API 2

#### Path: `transactions`

#### Method: `GET`

#### Description:

Retrieves all transactions.
### Request:
+ Query Parameters: None

#### Response
+ Success (201 OK):
```
[
  {
 "_id": "60b7c04e8e99e0b6c8f9b999",
  "type": "income",
  "category": "salary",
  "amount": 1000,
  "date": "2024-10-23T00:00:00.000Z",
  "description": "October salary",
  "__v": 0
},
  ...
]
```
+ Error (400 Bad Request):
```
[
  {
  "error": "Invalid input"
},
  ...
]
```
### API 3

#### Path: `transactions/:id`

#### Method: `GET`

#### Description:

Retrieves a specific transaction by its ID.
### Request:
+ URL Parameter: id - The ID of the transaction.

#### Response
+ Success (201 OK):
```
[
  {
 "_id": "60b7c04e8e99e0b6c8f9b999",
  "type": "income",
  "category": "salary",
  "amount": 1000,
  "date": "2024-10-23T00:00:00.000Z",
  "description": "October salary",
  "__v": 0
},
  ...
]
```
+ Error (404 Not Foundt):
```
[
  {
  "error": "Transaction not found"
},
  ...
]
```
+ Error (500 Internal Server Error):

```
[
  {
"error": "Failed to retrieve transaction"
},
  ...
]
```

### API 4

#### Path: `/transactions/:id`

#### Method: `PUT`

#### Description:

Updates the details of a specific transaction.

### Request:
+ Content-Type: application/json
+ Body(at least one field must be present):
```
[
  {
  "type": "expense",
  "category": "groceries",
  "amount": 200,
  "date": "2024-10-22",
  "description": "October groceries"
},
  ...
]
```

#### Response
+ Success (201 OK):
```
[
  {
  "_id": "60b7c04e8e99e0b6c8f9b999",
  "type": "expense",
  "category": "groceries",
  "amount": 200,
  "date": "2024-10-22T00:00:00.000Z",
  "description": "October groceries"
},
  ...
]
```
+ Error (404 Not Found):
```
[
 {
  "error": "Transaction not found"
},
  ...
]
```
+ Error (400 Bad Request):
```
[
{
  "error": "Invalid input"
},
  ...
]
```
### API 5

#### Path: `/transactions/:id`

#### Method: `DELETE`

#### Description:

 Deletes a specific transaction by its ID.

### Request:
+ URL Parameter: id - The ID of the transaction.

#### Response
+ Success (201 OK): The transaction has been successfully deleted.

+ Error (404 Not Found):
```
[
 {
  "error": "Transaction not found"
},
  ...
]
```
+ Error (500  Internal Server Error):
```
[
{
  "error": "Failed to delete transaction"
},
  ...
]
```
### API 6

#### Path: `/transactions/summary`

#### Method: `GET`

#### Description:

 Retrieves a summary of all transactions including total income, total expenses, and the balance.

### Request:
+ Filters transactions starting from dates.

#### Response
+ Success (201 OK): The transaction has been successfully deleted.

+ Error (404 Not Found):
```
[
 {
  "totalIncome": 5000,
  "totalExpense": 200,
  "balance": 4800
},
  ...
]
```
+ Error (500  Internal Server Error):
```
[
{
  "error": "Failed to retrieve summary"
},
  ...
]
```


<br/>

Use `npm install` to install the packages.

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**


            
