package routes

import (
	"database/sql"
	"net/http"

	"github.com/gin-gonic/gin"

	"go-test-project/model"
)

func UserHandlerGin(c *gin.Context) {
	switch c.Request.Method {
	case "GET":
		UserListGin(c)
	case "POST":
		UserAddGin(c)
	}
}

func UserListGin(c *gin.Context) {
	db := c.MustGet("db").(*sql.DB)
	model.UserObj{}.ReadAll(db)
	c.String(http.StatusOK, "ok\n")
}

func UserAddGin(c *gin.Context) {
	db := c.MustGet("db").(*sql.DB)

	var user model.User
	if err := c.BindJSON(user); err != nil {
		c.String(http.StatusBadRequest, "Invalid JSON in request body")
		return
	}

	model.UserObj{}.Add(db, user)
	c.String(http.StatusOK, user.Name+" added\n")
}
