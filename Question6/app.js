var port = process.env.PORT || 3030;
const express = require("express");
const app = express();

const FoodTypes = {
    Meat: 'Meat',
    TreeLeaves: 'Tree Leaves',
    Fish : 'Fish ',
    Grass: 'Grass'
}

const AnimalTypes = {
    Lion: 'Lion',
    Giraffe: 'Giraffe',
    Seal : 'Seal ',
    Hyena: 'Hyena',
    Panda: 'Panda',
}

var Animals = [

 {Name: "Simba", Type: AnimalTypes.Lion, Food: FoodTypes.Meat, Age: 7},
 {Name: "Jerry", Type: AnimalTypes.Giraffe, Food: FoodTypes.TreeLeaves, Age: 4},
 {Name: "Scooby", Type: AnimalTypes.Seal, Food: FoodTypes.Fish, Age: 2},
 {Name: "Temba", Type: AnimalTypes.Hyena, Food: FoodTypes.Meat, Age: 6},
 {Name: "Simba", Type: AnimalTypes.Panda, Food: FoodTypes.Grass, Age: 3.5},
]


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res) {
    res.render('index', {data : Animals})
});

//Error Handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);//forwards to the next with the error
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error:
        {
            message: error.message,
        }
    });

});

app.listen(port, ()=>{console.log(`Listening on port ${port}`)})
