let addbutton = document.getElementById("add");
let subjectcountinput = document.getElementById("subjectcount");
let subjectcontainer = document.getElementById("subject-row");
addbutton.addEventListener("click",function() {
    let count = subjectcountinput.value;
    subjectcontainer.innerHTML="";
    for(let i=1;i<=count;i++)
    {
        subjectcontainer.innerHTML += `<h4>Subject ${i}</h4>
        <label>Subject Name:</label>
            <input type="text" placeholder="Enter Subject Name"><br>

            <label>Credit Points:</label>
            <input type="number" placeholder="Enter Credit Points"><br>

            <label>Grade:</label>
            <select>
                <option value="" disabled selected>Select Grade</option>
                <option value="O">O</option>
                <option value="A+">A+</option>
                <option value="A">A</option>
                <option value="B+">B+</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="RA">RA</option>
            </select>
            <br><br>
        `;
    }
});
let calculatebutton = document.getElementById("calculate");
let result = document.querySelector("#result p b");
calculatebutton.addEventListener("click" , function() {
    let totalcredits=0;
    let totalpoints=0;
    let creditInput = subjectcontainer.querySelectorAll("input[type='number']");
    let gradeselect = subjectcontainer.querySelectorAll("select");
    for(let i=0;i<creditInput.length;i++)
    {
        let credit = Number(creditInput[i].value);
        let grade = gradeselect[i].value;
        if(credit===0 || grade==="")
        {
            alert("Please fill all credits and grades");
            return;
        }
        let gradepoint=0;
        if(grade==="O")
        {
            gradepoint=10;
        }
        else if(grade==="A+")
        {
            gradepoint = 9;
        }
        else if(grade==="A")
        {
            gradepoint = 8;
        }
        else if(grade==="B+")
        {
            gradepoint = 7;
        }
        else if(grade==="B")
        {
            gradepoint = 6;
        }
        else if(grade==="C")
        {
            gradepoint = 5;
        }
        else
        {
            gradepoint = 0;
        }
        totalcredits+=credit;
        totalpoints+=credit*gradepoint;
    } 
    let cgpa = totalpoints/totalcredits;
    result.textContent = cgpa.toFixed(2);
});