package model

import (
	"database/sql"
	"fmt"
	"log"

	"gorm.io/gorm"
)

type UserObj struct {
}

type User struct {
	gorm.Model         // Includes fields ID, CreatedAt, UpdatedAt, DeletedAt
	Name       string  `json:"name"`
	Email      string  `json:"email" gorm:"index"`
	Password   string  `json:"password"`
	Profile    Profile `json:"profile" gorm:"foreignKey:UserID"`
}

type Profile struct {
	gorm.Model        // Includes fields ID, CreatedAt, UpdatedAt, DeletedAt
	UserID     int    // Foreign key for User
	Position   string `json:"position"`
	Phone      string `json:"phone"`
	Address    Addr   `json:"address" gorm:"foreignKey:ProfileID"`
}

type Addr struct {
	gorm.Model        // Includes fields ID, CreatedAt, UpdatedAt, DeletedAt
	ProfileID  int    // Foreign key for Profile
	Street     string `json:"street"`
	City       string `json:"city"`
	Country    string `json:"country"`
}

func CreateUserTable(db *sql.DB, name string) {
	switch name {
	case "users":
		createUsers(db)
	case "address":
		createAddress(db)
	}
}

func createUsers(db *sql.DB) {
	_, err := db.Exec(`CREATE TABLE IF NOT EXISTS users (
		id SERIAL PRIMARY KEY,
		name character varying(256),
		email character varying(256),
		password character varying(256),
		position character varying(256),
		phone character varying(256)
	);`)
	if err != nil {
		log.Fatal(err)
	}
	_, err = db.Exec("CREATE UNIQUE INDEX IF NOT EXISTS users_pk ON users(id int4_ops);")
	if err != nil {
		log.Fatal(err)
	}
}

func createAddress(db *sql.DB) {
	_, err := db.Exec(`CREATE TABLE IF NOT EXISTS address (
		id SERIAL PRIMARY KEY,
		street character varying(256),
		city character varying(256),
		country character varying(256)
	);`)
	if err != nil {
		log.Fatal(err)
	}
	_, err = db.Exec("CREATE UNIQUE INDEX IF NOT EXISTS address_pk ON address(id int4_ops);")
	if err != nil {
		log.Fatal(err)
	}
}

func (u UserObj) Read(db *sql.DB, id string) (User, error) {
	sql := fmt.Sprintf("SELECT name, email, password, position, phone FROM users WHERE id = '%s'", id)
	rows, err := db.Query(sql)
	if err != nil {
		log.Fatal(err)
		return User{}, err
	}

	if rows.Next() {
		var name string
		var email string
		var password string
		var position string
		var phone string
		err := rows.Scan(&name, &email, &password, &position, &phone)
		if err != nil {
			log.Println(err)
		}

		user := User{
			Name:     name,
			Email:    email,
			Password: password,
			Profile: Profile{
				Position: position,
				Phone:    phone,
			},
		}

		log.Println("read name: ", user.Name)
		log.Println("read email: ", user.Email)

		return user, nil
	}

	return User{}, nil
}

func (u UserObj) ReadAll(db *sql.DB) []User {
	sql := "SELECT id, name, email, password, position, phone FROM users"
	rows, err := db.Query(sql)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("read all users:", rows)

	var users []User
	for rows.Next() {
		var user User
		var profile Profile
		err := rows.Scan(&user.ID, &user.Name, &user.Email, &user.Password, &profile.Position, &profile.Phone)
		if err != nil {
			log.Println(err)
		}

		users = append(users, user)
	}

	return users
}

func (u UserObj) Add(db *sql.DB, user User) {
	sql := fmt.Sprintf("INSERT INTO users (name, email, password, position, phone) VALUES('%s', '%s', '%s', '%s', '%s')",
		user.Name,
		user.Email,
		user.Password,
		user.Profile.Position,
		user.Profile.Phone,
	)
	fmt.Println(sql)
	_, err := db.Exec(sql)
	if err != nil {
		log.Fatal(err)
	}
}
