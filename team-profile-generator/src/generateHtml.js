const generateManager= pageData => {
    return `
    <div class="card col-3 shadow p-2 py-3 mx-2 mb-5 bg-body rounded">
        <div class="card-header bg-primary text-white">
            <h3>${pageData.name}</h3>
            <h4><i class="fas fa-mug-hot"></i> ${pageData.role}</h4>
        </div>
        <div class="card-body bg-light my-5">
            <ul class="list-group list-group-flush bg-white shadow-lg">
                <li class="list-group-item">Id: ${pageData.id}</li>
                <li class="list-group-item">Email: <a href="mailto: ${pageData.email}">${pageData.email}</a></li>
                <li class="list-group-item">Office Number: ${pageData.officeNumber} </li>
            </ul>
        </div>
    </div>
    `
};

const generateEngineer = engineerArr => {
    if (engineerArr) {
        return engineerArr.map(engineer => {
            return `
        <div class="card col-3 shadow p-2 py-3 mx-2 mb-5 bg-body rounded">
            <div class="card-header bg-primary text-white">
                <h3>${engineer.engineer.name}</h3>
                <h4><i class="fas fa-glasses"></i> ${engineer.engineer.role}</h4>
            </div>
            <div class="card-body bg-light my-5">
                <ul class="list-group list-group-flush bg-white shadow-lg">
                    <li class="list-group-item">Id: ${engineer.engineer.id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${engineer.engineer.email}">${engineer.engineer.email}</a></li>
                    <li class="list-group-item">GitHub: <a href:"${engineer.engineer.github}">${engineer.engineer.github}</a> </li>
                </ul>
            </div>
        </div>
        `
        }).join('')
    } else {
        return '';
    };
};

const generateIntern = internArr =>  {
   if (internArr) {
       return internArr.map(intern => {
        return `
        <div class="card col-3 shadow p-2 py-3 mx-2 mb-5 bg-body rounded">
            <div class="card-header bg-primary text-white">
                <h3>${intern.intern.name}</h3>
                <h4><i class="fas fa-graduation-cap"></i> ${intern.intern.role}</h4>
            </div>
            <div class="card-body bg-light my-5">
                <ul class="list-group list-group-flush bg-white shadow-lg">
                    <li class="list-group-item">Id: ${intern.intern.id}</li>
                    <li class="list-group-item">Email: <a href="mailto: ${intern.intern.email}">${intern.intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.intern.school}</li>
                </ul>
            </div>
        </div>
        `
       }).join('')
   } else {
       return '';
   };
};

const generateHtml = pageData => {
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
            ${generateManager(pageData)}
            ${generateEngineer(pageData.engineer)}
            ${generateIntern(pageData.intern)}
        </div>
    </main>
</body>

</html>
    `
};

module.exports = generateHtml;