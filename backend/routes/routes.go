package routes

import (
	"net/http"

	"github.com/azrilpramudia/backend-crud/controller"
)

func MapRoutes(server *http.ServeMux) {
	server.HandleFunc("/", controller.NewHelloWorldController())
}
