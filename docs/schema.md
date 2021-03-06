# Schema Information

## projects
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
title        | string    | not null
body         | string    | not null
goal         | integer   | not null
end_date     | date      | not null
owner_id     | integer   | not null, foreign key (references users)
category_id  | string    | foreign key (references categories)
image_url    | string    | not null

## rewards
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
level        | integer   | not null
title        | string    | not null
info         | string    | not null
project_id   | integer   | not null, foreign key (references projects)

## rewardings
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | not null, primary key
supporter_id | integer   | not null, foreign key (references users)
project_id   | integer   | not null, foreign key (references projects)

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
session_token   | string    | not null
