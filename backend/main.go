package main

import (
	"net/http"

	"github.com/azrilpramudia/backend-crud/database"
	"github.com/azrilpramudia/backend-crud/routes"
)

func main() {
	db := database.InitDatabase()

	server := http.NewServeMux()

	routes.MapRoutes(server, db)

	http.ListenAndServe(":8080", server)
}
