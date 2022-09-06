package main

import (
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"
	"github.com/th2zz/url_shortener-go/routes"
)

func healthHandler(c *fiber.Ctx) error {
	c.Status(fiber.StatusOK).JSON("ok")
	return nil
}

func setupRoutes(app *fiber.App) {
	app.Get("/health", healthHandler)
	app.Get("/:url", routes.ResolveURL)
	app.Post("/shorten", routes.ShortenURL)
}

func main() {
	err := godotenv.Load()

	if err != nil {
		fmt.Println(err)
	}

	app := fiber.New()

	app.Use(logger.New())
	app.Use(cors.New())

	setupRoutes(app)

	log.Fatal(app.Listen(os.Getenv("APP_PORT")))
}
