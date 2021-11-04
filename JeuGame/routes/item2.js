// import required essentials
const express = require('express');
// create new router
const router = express.Router();

// create a JSON data array
let data = [{
        id: 1,
        type: 'QCM',
        question: "En quelle Année le langage de programmation Cobol a-t-il-été créé ?",
        reponse1: "1959",
        reponse2: "2009",
        reponse3: "1958",
        reponse4: "1949",
        reponsejuste : "1959"
    },
    {
        id: 2,
        type: 'QCM',
        question: "Combien de noeuds possedaient arpanet en 1969?",
        reponse1: "1",
        reponse2: "4",
        reponse3: "7",
        reponse4: "10",
        reponsejuste : "4"
    },
    {
        id: 3,
        type: 'QCM',
        question: 'Parmi ces langages, données l\'orde de creation (plus ancien au plus recent)?',
        reponse1: "Fortran>Cobol>Algol>Lisp",
        reponse2: "Algol>Fortran>Lisp>Cobol",
        reponse3: "Fortran>Lisp>Algol>Cobol",
        reponse4: "Cobol>Lisp>Fortran>Algol",
        reponsejuste : "Fortran>Lisp>Algol>Cobol"
    },
    {
        id: 4,
        type: 'QCM',
        question: 'Qui a inventé la souris?',
        reponse1: "Douglas EngelBarth",
        reponse2: "Mickael Pezzoni",
        reponse3: "Gerald Abbadie",
        reponse4: "jean-Daniel Nicoud",
        reponsejuste : "Douglas EngelBarth"
    },
    {
        id: 5,
        type: 'QCM',
        question: 'A quoi correspond le Bull Gamma 60?',
        reponse1: "la première machine non deterministe",
        reponse2: "un algorithme des années 1960",
        reponse3: "le nom du premier ordinateur avec un circuit intégré",
        reponse4: "le premier ordinateur multitache",
        reponsejuste : "le premier ordinateur multitache"
    },
];

// this end-point of an API returns JSON data array
router.get('/', function (req, res) {
    res.status(200).json(data);
});

// this end-point returns an object from a data array find by id
// we get `id` from URL end-points
router.get('/:id', function (req, res) {
    // find an object from `data` array match by `id`
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    // if object found return an object else return 404 not-found
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});


router.post('/', function (req, res) {
    // get itemId
    let itemIds = data.map(item => item.id);
    //  ordre des Num
    let orderNums = data.map(item => item.order);
    // create new id cherche sur max math et le renvoie et ajout+1
    let newId = itemIds.length > 0 ? Math.max.apply(Math, itemIds) + 1 : 1;
    //    let newOrderNums=orderNums.length>0 ?Math.max.apply(Math, orderNums) + 1 : 1;

    //    creation d'un nouvelle objet:
    let newItem = {
        id: newId, // generated in above step
        type: req.body.type,
        title: req.body.title, // value of `title` get from POST req
        question: req.body.question, // generated in above step
        reponse1: req.body.reponse1,
        reponse2: req.body.reponse2,
        reponse3: req.body.reponse3,
        reponse4: req.body.reponse4, // default value is set to false
        reponsejuste: req.body.reponsejuste
    };
    data.push(newItem);
    // return with status 201
    // 201 means Created. The request has been fulfilled and 
    // has resulted in one or more new resources being created. 
    res.status(201).json(newItem);
})
router.put('/:id', function (req, res) {
    // get item object match by `id`
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    // check if item found
    if (found) {
        let updated = {
            id: found.id,
            type: req.body.type,
            title: req.body.title, // value of `title` get from POST req
            question: req.body.question, // generated in above step
            reponse1: req.body.reponse1,
            reponse2: req.body.reponse2,
            reponse3: req.body.reponse3,
            reponse4: req.body.reponse4, // default value is set to false
            reponsejuste: req.body.reponsejuste
        };

        // find index of found object from array of data
        let targetIndex = data.indexOf(found);

        // replace object from data list with `updated` object
        data.splice(targetIndex, 1, updated);

        // return with status 204
        // success status response code 204 indicates
        // that the request has succeeded
        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});
router.delete('/:id', function (req, res) {
    // find item from array of data
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        // if item found then find index at which the item is
        // stored in the `data` array
        let targetIndex = data.indexOf(found);

        // splice means delete item from `data` array using index
        data.splice(targetIndex, 1);
    }

    // return with status 204
    // success status response code 204 indicates
    // that the request has succeeded
    res.sendStatus(204);
});

module.exports = router;