const Students = [
    {name:'Sam', mark:62},
    {name:'Marcia', mark:58},
    {name:'Jackson', mark:34},
    {name:'Neo', mark:47},
    {name:'Tumisang', mark:71},
    {name:'Mike', mark:69},
];

function CheckifStudentMarkIsAPass(StudentMark)
{
    return StudentMark >= 50;
 }


let PassOrFail = (mark) => {
    
    return new Promise(function (resolve, reject) {
        if (CheckifStudentMarkIsAPass(mark)) {

            resolve(`Your mark ${mark} qualifies you for the exam`);
        }else{

            reject(`Your mark ${mark} does not qualify you for the exam`);
        }

})};

Students.forEach(student => {
   
    PassOrFail(student.mark).then(function (result) {//then will return value that is true/resolved
        console.log(result);
    }).catch(function (result) {//catch will run and return value that was false/rejected
        console.log(result);
    })

});

