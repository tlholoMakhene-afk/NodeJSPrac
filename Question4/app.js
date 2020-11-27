const calculator = require('./calculator');

function DisplayOutput(CalculationMethod, length, width)
{
    if(CalculationMethod === 'area')
    {
        console.log(`Area of a rectangle is ${calculator.CalculateArea(length,width)}`);
    }else if(CalculationMethod === 'perimeter')
    {
        console.log(`Perimeter of a rectangle is ${calculator.CalculatePerimeter(length,width)}`);
    }
}


//when "area" is the first parameter value that the displayOutput takes that means that you want to calculate area 
//and you want the CalculateArea function to  be invoke
DisplayOutput('area',5.4,4.8);
DisplayOutput('area',4,8);

//when "perimeter" is the first parameter value that the displayOutput takes that means that you want to calculate perimeter 
//and you want the CalculatePerimeter function to  be invoke
DisplayOutput('perimeter',5.4, 4.8);
DisplayOutput('perimeter',4,8);