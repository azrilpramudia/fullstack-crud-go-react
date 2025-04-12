package routes

import (
	"database/sql"
	"net/http"

	"github.com/azrilpramudia/backend-crud/controller"
)

func MapRoutes(server *http.ServeMux, db *sql.DB) {
	server.HandleFunc("/", controller.NewHelloWorldController())
	server.HandleFunc("/employe", controller.NewIndexEployee())
	server.HandleFunc("/employe/create", controller.NewCreateEployeeController(db))
}
