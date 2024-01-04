package routes

import (
	"database/sql"
	"net/http"

	"github.com/labstack/echo/v4"

	"go-test-project/model"
)

func UserHandlerEcho(c echo.Context) {
	e := echo.New()
	e.GET("/userListEcho", UserListEcho)
	e.POST("/userAddEcho", UserAddEcho)
}

func UserListEcho(c echo.Context) error {
	db := c.Get("db").(*sql.DB)
	users := model.UserObj{}.ReadAll(db)
	return c.JSON(http.StatusOK, users)
}

func UserAddEcho(c echo.Context) error {
	db := c.Get("db").(*sql.DB)

	var user model.User
	if err := c.Bind(&user); err != nil {
		return c.String(http.StatusBadRequest, "Invalid JSON in request body")
	}

	model.UserObj{}.Add(db, user)
	return c.JSON(http.StatusOK, user.Name+" added\n")
}
