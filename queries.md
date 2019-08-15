# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT productname, categoryname FROM products AS p
JOIN categories AS c ON p.categoryid = c.categoryid
ORDER BY categoryname

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT orderid, shippername FROM orders AS o
JOIN shippers AS s ON o.shipperid = s.shipperid
WHERE o.orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT productname, quantity FROM orderdetails AS od
JOIN products AS p ON od.productid = p.productid
WHERE orderid = 10251
ORDER BY productname

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT orderid, customername, lastname AS EmployeeLastName FROM orders AS o
JOIN customers AS c ON o.customerid = c.customerid
JOIN employees AS e ON o.employeeid = e.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

SELECT categoryname, COUNT(*) AS Count FROM products AS p
JOIN categories AS c ON p.categoryid = c.categoryid
GROUP BY categoryname

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

SELECT orderid, COUNT(*) AS ItemCount FROM orderdetails AS od
JOIN products AS p ON od.productid = p.productid
GROUP BY orderid