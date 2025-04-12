package controller

import (
	"html/template"
	"net/http"
	"path/filepath"
)

func NewIndexEployee() func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		fp := filepath.Join("views", "index.html")
		tmpl, err := template.ParseFiles(fp)

		if err != nil {
			w.Write([]byte(err.Error()))
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		tmpl.Execute(w, nil)
	}
}
