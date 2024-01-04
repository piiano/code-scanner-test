package routes

import (
	"database/sql"

	"github.com/gofiber/fiber/v2"

	"go-test-project/model"
)

func UserHandlerFiber() {
	app := fiber.New()
	app.Get("/userListFiber", UserListFiber)
	app.Post("/userAddFiber", UserAddFiber)
}

func UserListFiber(c *fiber.Ctx) error {
	db := c.Locals("db").(*sql.DB)
	model.UserObj{}.ReadAll(db)
	return c.SendString("ok\n")
}

func UserAddFiber(c *fiber.Ctx) error {
	db := c.Locals("db").(*sql.DB)

	var user model.User
	if err := c.BodyParser(&user); err != nil {
		return c.SendString("Invalid JSON in request body")
	}

	model.UserObj{}.Add(db, user)
	return c.SendString(user.Name + " added\n")
}
