use blvwnrszit6nbqstzeyh;
create table USERS(
ID varchar(1000) primary key unique,
email varchar(320) unique,
username varchar(200) unique,
password varchar(50),
userImage varchar(500),
userProducts varchar(500),
created_at timestamp default current_timestamp,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table PRODUCTS(
ID int auto_increment primary key unique,
productName varchar(200),
categoryID int,
productDescription text,
price int,
rating int,
productImage varchar(500),
created_at timestamp default current_timestamp,
updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

create table CATEGORIES(
ID int auto_increment primary key unique,
category varchar(100) unique
);