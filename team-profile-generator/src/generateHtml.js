const generateEmployees = team => {
    const getManager = team.filter(Manager => {
        if (Manager.role === 'manager') {
            console.log(Manager)
            return true;
        } else {
            return false;
        }
    });

    const getEngineer = team.filter(Engineer => {
        if (Engineer.role === 'engineer') {
            console.log(Engineer)
            return true;
        } else {
            return false;
        }
    });

    const getIntern = team.filter(Intern => {
        if (Intern.role === 'intern') {
            console.log(Intern)
            return true;
        } else {
            return false;
        }
    });

    const generateManager = getManager.map(({ name, id, email, officeNumber }) => {
        return `
<div class="card col-3 shadow p-2 py-3 mx-2 mb-5 bg-body rounded">
<div class="card-header bg-primary text-white">
    <h3>${name}</h3>
    <h4><i class="fas fa-mug-hot"></i> Manager </h4>
</div>
<div class="card-body bg-light my-5">
    <ul class="list-group list-group-flush bg-white shadow-lg">
        <li class="list-group-item">Id: ${id}</li>
        <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
        <li class="list-group-item">Office Number: ${officeNumber} </li>
    </ul>
</div>
</div>
`;
    });

    const generateEngineer = getEngineer.map(({name, id, email, gitHub}) => {
        return `
        <div class="card col-3 shadow p-2 py-3 mx-2 mb-5 bg-body rounded">
            <div class="card-header bg-primary text-white">
                <h3>${name}</h3>
                <h4><i class="fas fa-glasses"></i> Engineer</h4>
            </div>
            <div class="card-body bg-light my-5">
                <ul class="list-group list-group-flush bg-white shadow-lg">
                    <li class="list-group-item">Id: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${gitHub}">${gitHub}</a> </li>
                </ul>
            </div>
        </div>
        `;    
    });

    const generateIntern = getIntern.map(({name, id, email, school}) => {
                return `
        <div class="card col-3 shadow p-2 py-3 mx-2 mb-5 bg-body rounded">
            <div class="card-header bg-primary text-white">
                <h3>${name}</h3>
                <h4><i class="fas fa-graduation-cap"></i> Intern</h4>
            </div>
            <div class="card-body bg-light my-5">
                <ul class="list-group list-group-flush bg-white shadow-lg">
                    <li class="list-group-item">Id: ${id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${email}">${email}</a></li>
                    <li class="list-group-item">School: ${school}</li>
                </ul>
            </div>
        </div>
        `
    });
    return `
    ${generateManager.join('')}
    ${generateEngineer.join('')}
    ${generateIntern.join('')}
    `
};

const generateHtml = (team) => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" />

</head>

<body>
    <header class="bg-danger text-center mb-5">
        <h1 class="text-white p-5 fw-bolder">My Team</h1>
    </header>

    <main class="d-flex justify-content-center">
        <div class="row w-100 justify-content-center">
           ${generateEmployees(team)}
        </div>
    </main>
</body>

</html>
    `
};

module.exports = generateHtml;