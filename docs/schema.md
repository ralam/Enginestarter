# Schema Information

## projects
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
title        | string    | not null
body         | string    | not null
owner_id     | integer   | not null, foreign key (references users)
supporter_id | string    | foreign key (references users)
category_id  | string    | foreign key (references categories)
reward_id    | integer   | not null, foreign key (references rewards)

## rewards
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
reward_level | integer   | not null
reward_info  | string    | not null
project_id   | integer   | not null, foreign key (references projects)
supporter_id | integer   | not null, foreign key (references users)

## categories
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
title        | string    | not null, unique

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
email           | string    | not null, unique
password_digest | string    | not null
session_token   | string    | not null, unique
