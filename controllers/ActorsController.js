const db = require('../database');
const ActorsRepository = require('../repository/ActorsRepository');

exports.list = (req, res) => {
    const repo = new ActorsRepository(db);
    repo.list()
        .then((result) => {
            res.json({
                success: true,
                data: result,
            });
        })
        .catch((err) => {
            res.status(500).json({ error: err.message });
        });
};

exports.get = (req, res) => {
    const repo = new ActorsRepository(db);
    repo.get(req.params.id)
        .then((result) => {
            res.json({
                success: true,
                data: result,
            });
        })
        .catch((err) => {
            res.status(404).json({ error: err.message });
        });
};

exports.create = (req, res) => {
    const errors = [];
    ['first_name', 'last_name', 'date_of_birth', 'date_of_death'].forEach((field) => {
        if (req.body.hasOwnProperty[field]) {
            errors.push(`Field '${field}' is missing from request body`);
        }
    });
    if (errors.length) {
        res.status(400).json({
            success: false,
            errors,
        });
        return;
    }

    const repo = new ActorsRepository(db);

    repo.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        date_of_birth: req.body.date_of_birth,
        date_of_death: req.body.date_of_death
    })
        .then((result) => {
            res
                .status(201)
                .json({
                    success: true,
                    id: result,
                });
        })
        .catch((err) => {
            res.status(400).json({ error: err.message });
        });
};

exports.update = (req, res) => {
    const errors = [];
    ['first_name', 'last_name', 'date_of_birth', 'date_of_death'].forEach((field) => {
        if (req.body.hasOwnProperty[field]) {
            errors.push(`Field '${field}' is missing from request body`);
        }
    });
    if (errors.length) {
        res.status(400).json({
            success: false,
            errors,
        });
        return;
    }

    const repo = new ActorsRepository(db);

    repo.update(
        req.params.id,
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            date_of_birth: req.body.date_of_birth,
            date_of_death: req.body.date_of_death,
        },
    )
        .then(() => {
            repo.get(req.params.id)
                .then((result) => {
                    res.json({
                        success: true,
                        data: result,
                    });
                });
        })
        .catch((err) => {
            res.status(400).json({ error: err.message });
        });
};

exports.delete = (req, res) => {
    const repo = new ActorsRepository(db);

    repo.delete(req.params.id)
        .then(() => {
            res.status(204)
                .json({
                    success: true,
                });
        })
        .catch((err) => {
            res.status(400).json({ error: err.message });
        });
};
