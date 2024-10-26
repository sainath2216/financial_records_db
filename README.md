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

#### Path: `products`

#### Method: `POST`

#### Description:

Creates a new income or expense transaction.
### Request:
+ Content-Type: application/json
+ Body:
```
[
  {
    "name": "wash machin",
    "price": 10201,
    "quantity": 5
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
  "name": "income",
  "price": "10291",
  "quantity": "2"
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





            
