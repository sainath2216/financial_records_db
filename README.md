# Personal Expense Tracker

This API allows users to manage financial transactions, including adding, retrieving, updating, and deleting transaction records. It also provides a financial summary of transactions.

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



### Technologies
- Node.js
- Express
- MongoDB
- Mongoose

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (running instance or MongoDB Atlas)
- npm (Node package manager)

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/flowwai_assignemnt.git
   cd financial_records

### Transactions Base URL:
http://localhost:3000/

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
+ Success (204 No Content): The transaction has been successfully deleted.
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
### Postman screenshots demonstrating each API call.
### POST http://localhost:3000/transactions/

![Screenshot (146)](https://github.com/user-attachments/assets/cfe516a4-97eb-4462-95e8-beedc18072d5)

### GET http://localhost:3000/transactions/

![Screenshot (147)](https://github.com/user-attachments/assets/a7eaf5ea-a6ef-4831-ac51-1c4d4ea9b076)

### GET http://localhost:3000/transactions/:id/

![Screenshot (148)](https://github.com/user-attachments/assets/2b842fe7-119e-4115-ad63-56fae7af820d)

### PUT http://localhost:3000/transactions/:id/

![Screenshot (149)](https://github.com/user-attachments/assets/b767f4c4-36b3-417a-8394-612b83fd6a3e)

### DELETE http://localhost:3000/transactions/:id

![Screenshot (150)](https://github.com/user-attachments/assets/83694e2b-bad6-47ba-bb6b-cf8d8d9d4122)

### GET http://localhost:3000/transactions/summary
![Screenshot (151)](https://github.com/user-attachments/assets/5344dc14-d476-4fdc-966e-a3838e6f2fbb)
