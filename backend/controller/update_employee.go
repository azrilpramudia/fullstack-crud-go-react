package controller

import (
	"database/sql"
	"html/template"
	"net/http"
	"path/filepath"
)

func NewUpdateEployeeController(db *sql.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		if r.Method == "POST" {
			id := r.URL.Query().Get("id")
			r.ParseForm()

			name := r.Form["name"][0]
			address := r.Form["address"][0]
			npwp := r.Form["npwp"][0]
			_, err := db.Exec("UPDATE employe SET name = ?, npwp = ?, address = ? WHERE id = ?", name, npwp, address, id) // db.Exec("INSERT INTO employe (name, npwp, address) VALUES (?, ?, ?)", name, npwp, address)
			if err != nil {
				w.Write([]byte(err.Error()))
				w.WriteHeader(http.StatusInternalServerError)
				return
			}
			http.Redirect(w, r, "/employe", http.StatusMovedPermanently)

		} else if r.Method == "GET" {
			id := r.URL.Query().Get("id")

			row := db.QueryRow("SELECT id, name, npwp, address FROM employe WHERE id = ?", id)
			if row.Err() != nil {
				w.Write([]byte(row.Err().Error()))
				w.WriteHeader(http.StatusInternalServerError)
				return

			}

			var employee Employee
			err := row.Scan(
				&employee.ID,
				&employee.Name,
				&employee.NPWP,
				&employee.Address,
			)

			employee.ID = id

			if err != nil {
				w.Write([]byte(err.Error()))
				w.WriteHeader(http.StatusInternalServerError)
				return
			}
			fp := filepath.Join("views", "update.html")
			tmpl, err := template.ParseFiles(fp)
			if err != nil {
				w.Write([]byte(err.Error()))
				w.WriteHeader(http.StatusInternalServerError)
				return
			}

			data := make(map[string]any)
			data["employee"] = employee

			err = tmpl.Execute(w, data)
			if err != nil {
				w.Write([]byte(err.Error()))
				w.WriteHeader(http.StatusInternalServerError)
				return
			}

		}
	}
}
