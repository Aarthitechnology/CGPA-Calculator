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
            <input type="text" placeholder="Enter Subject Name"><br><br>

            <label>Credit Points:</label>
            <input type="number" placeholder="Enter Credit Points"><br><br>

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