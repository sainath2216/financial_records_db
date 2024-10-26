# Personal Expense Tracker

APIs to perform operations on the table `Personal Expense Tracker fincial financial records` containing the following columns,
This API allows users to manage financial transactions, including adding, retrieving, updating, and deleting transaction records. It also provides a financial summary of transactions.

categories:                                    

@@ -25,6 +24,7 @@ categories:


### Transactions Base URL:
http://localhost:3000/
### API 1

#### Path: `transactions`
@@ -234,7 +234,7 @@ Updates the details of a specific transaction.
+ URL Parameter: id - The ID of the transaction.

#### Response
+ Success (201 OK): The transaction has been successfully deleted.
+ Success (204 No Content): The transaction has been successfully deleted.

+ Error (404 Not Found):
```
@@ -294,11 +294,27 @@ Updates the details of a specific transaction.

<br/>

Use `npm install` to install the packages.
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

**Export the express instance using the default export syntax.**

**Use Common JS module syntax.**
