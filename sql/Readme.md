# Description of the SQL files
<!-- Poner numeración en md -->
1.-  We select the fields name and email_mail from the users table.

2.- We calculate the total amount spent by multiplying the quantity of each order by the product price and adding them using the SUM() function. We assign the alias total_amount to this calculated column.

3.- We perform the following joins using the INNER JOIN clauses:
We join the users table with the orders table using the column users id and user_id of orders.
We join the orders table with the products table using the column product_id of orders and id of products.


4.- We filter the products of the "Electronics" category using the WHERE clause products.category = 'Electronics'.


5.- We group the results by the users.id field using the GROUP BY users.id clause.


6.- We apply the condition HAVING COUNT(orders.id) >= 3 to select only users who have made at least 3 orders.


7.- We apply the condition total_amount > 1000 to select only users who have spent more than $1000 on "Electronics" orders.


8.- We sort the results in descending order of total amount spent using the ORDER BY total_amount DESC clause.