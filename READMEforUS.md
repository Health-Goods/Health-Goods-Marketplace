I am making this readme to put notes about things i learn as I do work, as well as additional notes about work i add.

# Routing
Nextjs now uses an Approuter instead of the old pages router

For this we have a src directory, and an app directory within that

Import Link from 'next/link' and use that with href prop to navigate

# Layout.tsx
Our layout.tsx file wraps the entire app and everything is passed as the children prop.

# Page.tsx
The page.tsx in the top level of this component is the "Home" page.

# Creating pages
To create a page, create a new directory within the app directory and name it after the page you want to create, then create a page.tsx file within that directory. Routing to it is as simple as creating a Link component with href="/(path to that directory from the root of the src/app directory)"

# React hooks
It looks like we need to add "use client" at the top of our code if we want to use useState

# Supabase
1. npm i @supabase/supabase-js to install supabase client in project
2. Configure environment variables for URL and API_KEY in .env file
3. Create a module or utility function to initialize supabase client, i did a module named supabase.js
4. Now we can use the supabase instance to interact with the database, just import supabase from supabase.js in the file you want to perform a db operation

# Database and Models
Database and model diagram created with lucid.com
1.  User
    The user model allows users to interact with our platform. Authentication, carts, orders, reviews, saving addresses, emails, returns, and analytics

    Keys: id, email, password, name, address, created_at, updated_at

2.  Product
    The product model defines details about our products, how many we have stocked, the brand, the price, if its on sale

    Keys: id, name, price, description, stock_quantity, manufacturer, sale_price, sale_start_date, sale_end_date, is_on_sale, created_at, updated_at

3.  Address
    The address model allows us to store a users shipping addresses

    Keys: id, user_id, street, city, state, postal_code, country

    user_id is one user to one or many addresses relationship

4.  Cart
    The cart model allows us to track items a user intends on purchasing

    Keys: id, user_id, product_id, created_at, updated_at

    user_id is a one user to one cart relationship
    product_id is one cart to one or many products relationship

5.  Order
    The order model allows us to track user orders and any relevant info to that order such as the status of their order, if a discount was used, when that order was placed, what shipping method they used, and what address it was shipped to

    Keys: id, user_id, status, discount_id, order_date, shipping_address_id, shipping_method

    user_id is a one user to one or many orders relationship
    status tracks if an order is en-route or delivered
    discount_id tracks what and if a discount was used
    shipping_address_id is a one address to one or many orders relationship
    shipping_method tracks what transit option a user selected

6.  Order Item
    The Order Item model allows us to associate specific products with an order, tracking the quantity of each product, and store information about the pricing and other relevant details for each item in an order. This allows us to generate order summaries and invoices, calculate the total cost of an order, and maintain a detailed record of what the customer purchased

    Keys: id, product_id, order_id, quantity, price

    product_id is a one order item to one product relationship
    order_id is a one order to one or many order items relationship

7.  Review
    The review model allows users to give their insight on a product for us to see and track for analytics, and allows other users to make informed purchasing decisions

    Keys: id, user_id, product_id, rating, title, content, created_at, updated_at

    user_id is a one user to many reviews relationship
    product_id is a one product to many reviews relationship

8.  Inventory
    The inventory model is similar to the product model. The inventory model is for internal tracking of products so that we can keep track of expiration dates as well as when products are received

    Keys: id, product_id, stock_quantity, received_date, expiry_date

    product_id is a one product to one inventory relationship

9.  Category
    The category model allows us to sort products on the site by categories such as diet products, pre-workout, protein, creatine, etc.

    Keys: id, name, description, parent_id, created_at, updated_at

    parent_id is a one category to one category relationship that allows us to have sub categories

10. Product Category
    The product category model is an intermediary table that allows products to have multiple categories and categories to have multiple products. It allows us to have more complex queries, and have improved scalability

    Keys: id, product_id, category_id

    product_id is a one product to one product category relationship
    category_id is a one category to one product category relationship

11. Return
    The return model allows us to track return on products and orders

    Keys: id, user_id, product_id, order_id, reason, status, return_date

    user_id is a one user to one or many returns relationship
    product_id is a one return to one or many products relationship
    order_id is a one order to one return relationship

12. Wishlist
    The wishlist model allows user to save their favorite products or products they plan on purchasing

    Keys: id, user_id, product_id, added_date

    user_id is a one user to many wishlist relationship
    product_id is a one wishlist to one or many products relationship

13. Analytics
    The analytics model allows us to track user behavior on the platform. From products they view, to when items are removed from carts or added to wishlists

    Keys: id, event_type, user_id, product_id, timestamp

    event_type tracks what analytic was tracked ie. product viewed, item removed from cart, etc.
    user_id is an optional one user to one or many analytics relationship
    product_id is an optional one product to one or many analytics relationship

14. Discount
    The discount model allows us to offer discounts and coupons for products on our platform

    Keys: id, code, description, discount_type, discount_value, start_date, end_date, is_active

    code would be a discount code for users to input at checkout
    discount_type would determine if the discount is a % or flat amount
    discount_value would be the amount as an integer from 0-100
    start_date and end_date would determine what dates it would be valid for
    is_active is a boolean key to track if the discount is valid

15. Shipping
    The shipping model will track different shipping methods for orders,

    Keys: id, name, rate, estimated_delivery_time

# Search bar
    For defining the type of onSearch prop in search bar i used an interface and React.FC(functional component). This is to define the type of the whole react component. When defining the type of a component we want to use the interface and FC method provided by typescript, while in the navbar i just directly defined the type of the query prop since it is a simple string type, and just a variable within our entire navbar component