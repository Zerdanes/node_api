/* eslint-disable no-console */
/* eslint-disable func-names */
class GenreRepository {
    constructor(database) {
        this.database = database;
    }

    list() {
        return new Promise((resolve, reject) => {
            this.database.all('SELECT * FROM genres', [], (err, rows) => {
                if (err) {
                    console.error(err.message);
                    reject(err);
                } else {
                    resolve(
                        rows,
                    );
                }
            });
        });
    }

    create(data) {
        return new Promise((resolve, reject) => {
            this.database.run(
                'INSERT INTO genres (name) VALUES (?)',
                [data.name],
                function (err) {
                    if (err) {
                        console.error(err.message);
                        reject(err);
                    } else {
                        resolve(this.lastID);
                    }
                },
            );
        });
    }

    delete(id) {
        return new Promise((resolve, reject) => {
            this.database.run(
                `DELETE FROM genres
                 WHERE id = ?`,
                [id],
                (err) => {
                    if (err) {
                        console.error(err.message);
                        reject(err);
                    } else {
                        resolve(true);
                    }
                },
            );
        });
    }

    // eslint-disable-next-line class-methods-use-this
/*decorator(genres) {
        return {
            ...genres,
            done: genres.done === 1,
        };
    }*/
}

module.exports = GenreRepository;
