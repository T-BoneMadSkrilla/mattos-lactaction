INSERT INTO userz(user_email, auth_id, user_picture, user_first_name) VALUES ($1, $2, $3, $4);

SELECT * FROM userz WHERE auth_id = $2;