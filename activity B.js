newFunction()

function newFunction() {
    < !DOCTYPE; html >
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="style.css" type="text/css" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Syne:wght@500&display=swap"
                    rel="stylesheet" />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
                <title>test DOM</title>
            </head>
            <body>
                <h1>Catergory Winner of the MTN Business App of the Year:</h1>

                <div id="output"><b>Catergory:</b>
                </div>

                <button id="dice" onclick="myDiceRoll();">
                    Roll dice
                </button>

                <div class="file-section">
                    <input id="file-input" type="file" accept="text/plain" onchange="openFile();"></input>

                    <textarea id="file-output"></textarea>
                </div>
                <script src="jscript.js" type="text/javascript"></script>
            </body>
        </html>
}
