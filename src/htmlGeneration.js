
function htmlGeneration(employeeArray) {


    ` header {
            display: flex;
            justify-content: center;

        }

        h1 {
            border: 2px solid black;
            background-color: red;
            width: 100%;
            text-align: center;
        }

        div {
            border: 2px solid black;
            display: flex;
            flex-direction: row;
        }

        .card1,
        .card2,
        .card3,
        .card4,
        .card5 {
            border: 2px solid black;
        }



        <h1>My Team</h1>
 
         <div>
         `
    const classManager = function (manager) {
        return

        `<div class="card1">${manager.name}</div>
        <h3>${manager.id}</h3>
        <p>${manager.email}</p>
        <p>${manager.officeNumber}</p>`;
    }

    const classEngineer = function (engineer) {
        return

        ` <div class="card2">${this.engineer}</div>
        <h3>${engineer.name}</h3>
        <p>${engineer.email}</p>
        <p>${engineer.gitHub}</p>
        `;
    }

    const classIntern = function (intern) {
        return
        `<div class="card5">${this.intern}</div>
       
        <h3>${intern.id}</h3>
        <p>${intern.email}</p>
        <p>${intern.school}</p>
    </div>`;
    }
}

module.exports = htmlGeneration;