
//enkele helper functies met verschillende notaties 
//om deze te exporteren en dus ter beschikking te stellen 
//van andere modules

function Som(a, b)
{
    return a + b;
}

module.exports.som = Som;

module.exports.verschil = function (a, b)
{
    return a - b;
}

module.exports.maal = (a,b) =>
{
    return a * b;
}

module.exports.welkomTekstje = "Hallo";
