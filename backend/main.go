package main

import (
	"net/http"

	"github.com/azrilpramudia/backend-crud/database"
	"github.com/azrilpramudia/backend-crud/routes"
)

func main() {
	database.InitDatabase()

	server := http.NewServeMux()

	routes.MapRoutes(server)

	http.ListenAndServe(":8080", server)
}
