
# bookstore e-commerce



 


## Installation

Install npm i both folders in frontend and backend and add .env(for port and database connection string) file in root directory of backend folder 

```bash 
# in frontend folder
 npm i
 npm run dev
```

```bash
# in backend folder
 npm i 
 npm run dev
```



## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`="YOUR PORT"

`DB_STRING`="YOUR DATABASE CONNECTION STRING"

`SECRET`="YOUR SECRET KEY FOR JWT TOKEN"


## Features

- User Authentication & Authorization:

User Role: Allows customers them to a cart view order history, and manage their profiles.
Admin Role: Provides access to manage inventory, process orders, and handle user accounts. Admins can add, update, or delete books, view all orders.

- Authentication & Authorization:

Signup/Login: Secure user authentication with JWT (JSON Web Tokens) for both users and admins.
Logout: Allows users and admins to log out and invalidate their sessions.
- API Endpoints:

User APIs: Signup, login, logout, view profile, update profile, view order history.
Book APIs: List all books, view book details, add a new book (admin only), update book details (admin only), delete a book (admin only).
Cart APIs: Add to cart, view cart, update cart, remove from cart, checkout.
Order APIs: Place an order, view order details
- Frontend Components:

User Dashboard: Displays books, cart, and order history.

Admin Dashboard: Provides interfaces for managing books, orders, and users.

Authentication Pages: Signup, login, and profile management.
- Database Schema:

users,books,orders

 


## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Node, Express

**Database:** Mongodb,(Mongoose orm)
