
const details = fetch("https://digimon-api.vercel.app/api/digimon")
const digi = document.getElementById("digimons");
const item = document.getElementById("modifies");

var digidetail;
details.then((response) => {
    const data = response.json();
    return data;
})

.then((data) => {
    const digimon = data;
    digidetail = digimon;
})

function takepage(){

    let bg = document.getElementsByTagName("body")[0];
    bg.style.backgroundImage = "url('images/levels.jpg')";
    bg.style.backgroundRepeat = "no-repeat";
    bg.style.backgroundSize = "cover";
    bg.style.backgroundPosition = "center";

    item.innerHTML = `
    <h2>Select Level of Digimon</h2>
        <ul class = "levels">
            <li>
                <button class="btn" onclick={training()}>In training</button>
            </li>
            <li>
                <button class="btn" onclick={fresh()}>Fresh</button>
            </li>
            <li>
                <button class="btn" onclick={rookie()}>Rookie</button>
            </li>
            <li>
                <button class="btn" onclick={champion()}>Champion</button>
            </li>
            <li>
                <button class="btn" onclick={ultimate()}>Ultimate</button>
            </li>
            <li>
                <button class="btn" onclick={mega()}>Mega</button>
            </li>
        </ul>

        <br><br>

        <button class="backbtn" onclick={homepage()}>Back</button>
        <button class="homebtn" onclick={homepage()}>Home</button>
    `
}

function homepage(){
    let item = document.getElementById("modifies");
    let bg = document.getElementsByTagName("body")[0];
    bg.style.backgroundImage = "url('images/homepage.jpg')";

    item.innerHTML = `<button class="btn" id="btn" onclick="takepage()">Get Digimon</button>
    <div class="backbutton">
            <a href="../../index.html" class="backbutton">Back to Home</a>
        </div>`
}

function training(){
    let item = document.getElementById("modifies");
    item.innerHTML = `
    <ul class = "digimons"></ul>
    <button class="backbtn" onclick={takepage()}>Back</button>
    <button class="homebtn" onclick={homepage()}>Home</button>
    `
    let bg = document.getElementsByTagName("body")[0];
    bg.style.backgroundImage = "url('images/training.png')";

    let digimons = document.querySelector(".digimons");

    digidetail.map((digimon) => {
        if(digimon.level == "In Training"){
            digimons.innerHTML += `
            <li>
            <div class="card">
                <img src="${digimon.img}" alt="Avatar" style="width:100%" class="digimage">
                <div class="container">
                    <h4><b>${digimon.name}</b></h4>
                    <p>Level: ${digimon.level}</p>
                </div>
            </div>
            </li>    
            `
        }
    })

}

function fresh(){
    let item = document.getElementById("modifies");
    item.innerHTML = `
    <ul class = "digimons"></ul>
    <button class="backbtn" onclick={takepage()}>Back</button>
    <button class="homebtn" onclick={homepage()}>Home</button>`

    let bg = document.getElementsByTagName("body")[0];
    bg.style.backgroundImage = "url('images/fresh.jpg')";
    let digimons = document.querySelector(".digimons");

    digidetail.map((digimon) => {
        if(digimon.level == "Fresh"){
            digimons.innerHTML += `
            <li>
            <div class="card">
                <img src="${digimon.img}" alt="Avatar" style="width:100%" class="digimage">
                <div class="container">
                    <h4><b>${digimon.name}</b></h4>
                    <p>Level: ${digimon.level}</p>
                </div>
            </div>    
            </li>
            `;
        }
    })
}

function rookie(){
    let item = document.getElementById("modifies");
    item.innerHTML = `
    <ul class = "digimons"></ul>
    <button class="backbtn" onclick={takepage()}>Back</button>
    <button class="homebtn" onclick={homepage()}>Home</button>`

    let bg = document.getElementsByTagName("body")[0];
    bg.style.backgroundImage = "url('images/rookie.jpeg')";

    let digimons = document.querySelector(".digimons");

    digidetail.map((digimon) => {
        if(digimon.level == "Rookie"){
            digimons.innerHTML += `
            <li>
            <div class="card">
                <img src="${digimon.img}" alt="Avatar" style="width:100%" class="digimage">
                <div class="container">
                    <h4><b>${digimon.name}</b></h4>
                    <p>Level: ${digimon.level}</p>
                </div>
            </div> 
            </li>   
            `;
        }
    })
}

function champion(){
    let item = document.getElementById("modifies");
    item.innerHTML = `
    <ul class = "digimons"></ul>
    <button class="backbtn" onclick={takepage()}>Back</button>
    <button class="homebtn" onclick={homepage()}>Home</button>`

    let bg = document.getElementsByTagName("body")[0];
    bg.style.backgroundImage = "url('images/champion.jpg')";

    let digimons = document.querySelector(".digimons");

    digidetail.map((digimon) => {
        if(digimon.level == "Champion"){
            digimons.innerHTML += `
            <li>
            <div class="card">
                <img src="${digimon.img}" alt="Avatar" style="width:100%" class="digimage">
                <div class="container">
                    <h4><b>${digimon.name}</b></h4>
                    <p>Level: ${digimon.level}</p>
                </div>
            </div>    
            </li>
            `;
        }
    })
}

function ultimate(){
    let item = document.getElementById("modifies");
    item.innerHTML = `
    <ul class = "digimons"></ul>
    <button class="backbtn" onclick={takepage()}>Back</button>
    <button class="homebtn" onclick={homepage()}>Home</button>`

    let bg = document.getElementsByTagName("body")[0];
    bg.style.backgroundImage = "url('images/ultimate.jpg')";
    
    let digimons = document.querySelector(".digimons");

    digidetail.map((digimon) => {
        if(digimon.level == "Ultimate"){
            digimons.innerHTML += `
            <li>
            <div class="card">
                <img src="${digimon.img}" alt="Avatar" style="width:100%" class="digimage">
                <div class="container">
                    <h4><b>${digimon.name}</b></h4>
                    <p>Level: ${digimon.level}</p>
                </div>
            </div>   
            </li> 
            `;
        }
    })
}

function mega(){
    let item = document.getElementById("modifies");
    item.innerHTML = `
    <ul class = "digimons"></ul>
    <button class="backbtn" onclick={takepage()}>Back</button>
    <button class="homebtn" onclick={homepage()}>Home</button>`

    let bg = document.getElementsByTagName("body")[0];
    bg.style.backgroundImage = "url('images/mega.jpg')";

    let digimons = document.querySelector(".digimons");

    digidetail.map((digimon) => {
        if(digimon.level == "Mega"){
            digimons.innerHTML += `
            <li>
            <div class="card">
                <img src="${digimon.img}" alt="Avatar" style="width:100%" class="digimage">
                <div class="container">
                    <h4><b>${digimon.name}</b></h4>
                    <p>Level: ${digimon.level}</p>
                </div>
            </div>    
            </li>
            `;
        }
    })
}