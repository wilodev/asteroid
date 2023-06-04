-- Suppose you have a database with three tables: "users", "orders", and "products".
-- The "users" table contains columns id, name, and email.
-- The "orders" table contains columns id, user_id, product_id, quantity, and created_at.
-- The "products" table contains columns id, name, price, and category.
-- Write a single SQL query that returns a list of all users who have made at least 3 orders in the "Electronics" category and have spent more than $1000 on those orders, sorted by the total amount they have spent in descending order.
-- The output should include the user's name, email, and the total amount they have spent on "Electronics" orders.
SELECT user.name, user.email, SUM(orders.quantity * product.price) AS total_amount
FROM user
INNER JOIN orders ON user.id = orders.user_id
INNER JOIN product ON orders.product_id = product.id
WHERE product.category = 'Electronics'
GROUP BY user.id
HAVING COUNT(orders.id) >= 3 AND total_amount > 1000
ORDER BY total_amount DESC;