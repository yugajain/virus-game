class Lab{
    constructor(){}
display(){
    var base = createSprite(400,200,800,400)
    var people = createSprite(200,390,50,100)
    var testtube = createSprite(250, 350, 20,50)
    people.shapeColor = "red"
    testtube.shapeColor = "blue"
    textSize(17)
    stroke("green")
    fill("orange")
    text("OK now i have created the world's first size shrinking formula,   uhh uhh why am i coughing.", 10, 320)
    stroke("orange")
    text("DIES*", 20,50)
}
}
