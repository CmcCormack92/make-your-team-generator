function generateHtml() {
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
            <div class="card col-3 shadow p-2 py-3 mx-2 mb-5 bg-body rounded">
                <div class="card-header bg-primary text-white">
                    <h3>Chris</h3>
                    <h4><i class="fas fa-mug-hot"></i> Manager</h4>
                </div>
                <div class="card-body bg-light my-5">
                    <ul class="list-group list-group-flush bg-white shadow-lg">
                        <li class="list-group-item">Id: 1</li>
                        <li class="list-group-item">Email: <a
                                href="mailto:chrismack135@gmail.com">chrismack135@gmail.com</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/CmcCormack92">CmcCormack92</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </main>
</body>

</html>
    `
}