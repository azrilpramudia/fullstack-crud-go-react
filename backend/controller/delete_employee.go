package controller

import (
	"database/sql"
	"net/http"
)

func NewDeleteEployeeController(db *sql.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		// Ambil ID dari query string (?id=123)
		id := r.URL.Query().Get("id")

		_, err := db.Exec("DELETE FROM employe WHERE id = ?", id)
		if err != nil {
			w.Write([]byte(err.Error()))
			w.WriteHeader(http.StatusInternalServerError)
			return

		}

		http.Redirect(w, r, "/employe", http.StatusMovedPermanently)

		// Cek apakah ID kosong

	}
}
