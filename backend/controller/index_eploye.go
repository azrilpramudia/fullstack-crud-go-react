package controller

import (
	"database/sql"
	"html/template"
	"net/http"
	"path/filepath"
)

type Employee struct {
	ID      string
	Name    string
	NPWP    string
	Address string
}

func NewIndexEployee(db *sql.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		rows, err := db.Query("SELECT id, name, npwp, address FROM employe")

		if err != nil {
			w.Write([]byte(err.Error()))
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		defer rows.Close()
		var employees []Employee
		for rows.Next() {
			var employe Employee

			err = rows.Scan(&employe.ID, &employe.Name, &employe.NPWP, &employe.Address)

			if err != nil {
				w.Write([]byte(err.Error()))
				w.WriteHeader(http.StatusInternalServerError)
				return
			}

			employees = append(employees, employe)

		}
		fp := filepath.Join("views", "index.html")
		tmpl, err := template.ParseFiles(fp)

		if err != nil {
			w.Write([]byte(err.Error()))
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		data := make(map[string]any)
		data["employees"] = employees

		err = tmpl.Execute(w, data)
		if err != nil {
			w.Write([]byte(err.Error()))
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
	}
}
