package routes

import (
	"database/sql"

	"github.com/kataras/iris/v12"

	"go-test-project/model"
)

func UserHandlerIris(c iris.Context) {
	app := iris.New()
	app.Get("/userListIris", UserListIris)
	app.Post("/userAddIris", UserAddIris)
}

func UserListIris(c iris.Context) {
	db := c.Values().Get("db").(*sql.DB)
	model.UserObj{}.ReadAll(db)
	c.WriteString("ok\n")
}

func UserAddIris(c iris.Context) {
	db := c.Values().Get("db").(*sql.DB)

	var user model.User
	if err := c.ReadJSON(&user); err != nil {
		c.WriteString("Invalid JSON in request body")
		return
	}

	model.UserObj{}.Add(db, user)
	c.WriteString(user.Name + " added\n")
}
