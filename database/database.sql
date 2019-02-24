CREATE DATABASE control_cat_db;

USE control_cat_db;

CREATE TABLE users_a(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    company_id VARCHAR(11) NOT NULL,
    username VARCHAR(110),
    company_name VARCHAR(110),
    first_name VARCHAR(110),
    last_name VARCHAR(110),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activity_user VARCHAR(110),
    image_user VARCHAR(255)
);

CREATE TABLE users(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    unique_id VARCHAR(11) NOT NULL UNIQUE,
    company_id VARCHAR(11) NOT NULL,
    username VARCHAR(110) NOT NULL,
    company_name VARCHAR(110) NOT NULL,
    first_name VARCHAR(110) NOT NULL,
    last_name VARCHAR(110) NOT NULL,
    email VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    activity_user VARCHAR(110) NOT NULL,
    image_user VARCHAR(255)
);

CREATE TABLE tasks(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    unique_id VARCHAR(110) NOT NULL,
    user_id VARCHAR(110) NOT NULL,
    company_id VARCHAR(110) NOT NULL,
    title VARCHAR(110) NOT NULL,
    done_at VARCHAR(255) NOT NULL,
    task_longitude VARCHAR(255) NOT NULL,
    task_latitude VARCHAR(255) NOT NULL,
    comments VARCHAR(255)
);

CREATE TABLE check_work(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id VARCHAR(110) NOT NULL,
    company_id INT(11) NOT NULL,
    state_check VARCHAR(110) NOT NULL,
    time_check_in VARCHAR(255),
    time_check_out VARCHAR(255),
    check_longitude_in VARCHAR(255) NOT NULL,
    check_latitude_in VARCHAR(255) NOT NULL,
    check_longitude_out VARCHAR(255),
    check_latitude_out VARCHAR(255)
);

CREATE TABLE messages(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_admin VARCHAR(11) NOT NULL UNIQUE,
    username VARCHAR(110) NOT NULL,
    msg_admin VARCHAR(255)
);

/* DESCRIBE users;
DESCRIBE tasks;
DESCRIBE check_work;
DESCRIBE messages; */