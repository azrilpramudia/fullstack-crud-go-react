package routes

import (
	"database/sql"
	"net/http"

	"github.com/azrilpramudia/backend-crud/controller"
)

func MapRoutes(server *http.ServeMux, db *sql.DB) {
	server.HandleFunc("/", controller.NewHelloWorldController())
	server.HandleFunc("/employe", controller.NewIndexEployee(db))
	server.HandleFunc("/employe/create", controller.NewCreateEployeeController(db))
	server.HandleFunc("/employe/update", controller.NewUpdateEployeeController(db))
	server.HandleFunc("/employe/delete", controller.NewDeleteEployeeController(db))
}
