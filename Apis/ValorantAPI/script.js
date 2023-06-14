const show = document.getElementById("container");

function home() {
    window.location.href = "index.html";
}

function agents() {
    const uri = fetch("https://valorant-api.com/v1/agents");

    show.innerHTML = "";
    show.innerHTML = `
    <div class="backbutton">
                        <button class="back" onclick="home()">Back</button>
                        <button class="home" onclick="home()">Home</button>
                    </div>
    <ul id = "playercards"></ul>`;

    uri.then((response) => {
        return response.json();
    })

        .then((data) => {

            let cardsdetails = document.getElementById("playercards");
            data.data.forEach((element) => {
                if (element.isPlayableCharacter == true) {
                    cardsdetails.innerHTML += `
            <li class="card">
            <div class="cardinfo" style = "background:url(${element.background}) center;">
                <div class="maincard">
                <img src="${element.displayIcon}" alt="">
                <h2 style="color:#${element.backgroundGradientColors[0]}">${element.displayName}</h2>
                <div class="carddetails">
                <p class="discription">${element.description}</p>
                <p class="role" style="background-color:#${element.backgroundGradientColors[1]}"><b>Role:</b> ${element.role.displayName}</p>
                <p class= "ability"><b>Abilities:</b> ${element.abilities[0].displayName}, ${element.abilities[1].displayName}, ${element.abilities[2].displayName}, ${element.abilities[3].displayName}</p>
                </div>
                </div>
            </div>
            </li>
            `;
                }
            })
        })
}


function maps() {
    const show = document.getElementById("container");

    show.innerHTML = "";

    const uri = fetch("https://valorant-api.com/v1/maps");

    uri.then((response) => {
        return response.json();
    })

        .then((data) => {
            console.log(data);
            show.innerHTML = `
            <div class="backbutton">
                        <button class="back" onclick="home()">Back</button>
                        <button class="home" onclick="home()">Home</button>
                    </div>
            <ul id = "mapcards"></ul>`;

            let cardsdetails = document.getElementById("mapcards");
            data.data.forEach((element) => {
                cardsdetails.innerHTML += `
            <li class="mcard">
                <button class="mapinfo" style = "background:url(${element.listViewIcon}) no-repeat center;" onclick="mapshow('${element.uuid}')">
                    <h2>${element.displayName}</h2>
                </button>
            `
            })
        })
}

function mapshow(uuid) {
    const uri = fetch(`https://valorant-api.com/v1/maps`); 4
    const id = uuid;
    show.classList.add("mapicon");


    uri.then((response) => {
        return response.json();
    })

        .then((data) => {
            for (let i = 0; i < data.data.length; i++) {
                if (data.data[i].uuid == id) {
                    console.log(data.data[i])
                    show.innerHTML = "";
                    show.innerHTML = `
                    <div class="backbutton">
                        <button class="back" onclick="maps()">Back</button>
                        <button class="home" onclick="home()">Home</button>
                    </div>
                <div class="mapdetails">
                <div class="mainmapinfo" style = "background:url(${data.data[i].splash}) no-repeat center;">
                    <div class="mapname">
                    <h2>${data.data[i].displayName}</h2>
                    <div class="coordinates">
                    <p class="coordinates"><b>Coordinates:</b> ${data.data[i].coordinates}</p>
                </div>
                </div>
                </div>
                <div class="mapicon">
                    <h2>${data.data[i].displayName} Map</h2>
                    <img src="${data.data[i].displayIcon}" alt="">
                </div>
                `
                }
            }

        })
}


function weapons() {
    const show = document.getElementById("container");
    show.innerHTML = "";

    const uri = fetch("https://valorant-api.com/v1/weapons");

    uri.then((response) => {
        return response.json();
    })

    .then((data) => {
        console.log(data);

        show.innerHTML = `
        <div class="backbutton">
            <button class="back" onclick="home()">Back</button>
            <button class="home" onclick="home()">Home</button>
        </div>

        <h1>Weapon</h1>
        <ul id = "weapons"></ul>;
        `
        
        let type = document.getElementById("weapontype");

        data.data.forEach((element) => {
            if(element.shopData!=null) {
            show.innerHTML += `
            <li class="weapontype">
                <img style= "$" src="${element.displayIcon}" alt="">
                <div class="weaponinfo">
                    <div class="weaponinfodetails">
                        <h2>${element.displayName}</h2>
                        <div>
                        <p>Type: ${(element.category).slice(21)}</p>
                        <p>Cost: ${element.shopData.cost}</p>
                        </div>
                    </div>
                    <div class="weaponstats">
                        <p>Fire Rate: ${element.weaponStats.fireRate}</p>
                        <p>Magazine Size: ${element.weaponStats.magazineSize}</p>
                        <p>Reload Time: ${element.weaponStats.reloadTimeSeconds}</p>
                    </div>
                    <button class="skins" onclick="showskin('${element.uuid}')">Skins</button>
                </div>
            </li>
            `
    }})
    })
}

function showskin(uuid) {
    const id = uuid;
    const uri = fetch(`https://valorant-api.com/v1/weapons`);
    uri.then((response) => {
        return response.json();
    })
    .then((data) => {
        let name;
        let index;
    const show = document.getElementById("container");
    show.innerHTML = "";
    for(let i = 0; i < data.data.length; i++) {
        if(data.data[i].uuid == id) {
            name = data.data[i].displayName;
            index = i;
        }
    }
    show.innerHTML = `
    <div class="backbutton">
        <button class="back" onclick="weapons()">Back</button>
        <button class="home" onclick="home()">Home</button>
    </div>

<h1>${name} Skins</h1>
<ul id = "skins"></ul>;
    `;

    let skins = document.getElementById("skins");
    data.data[index].skins.forEach((element) => {
        if(element.displayIcon!=null)
        {skins.innerHTML += `
            <li class="skin">
                <h2>${element.displayName}</h2>
                <div class="skindetails">
                    <img src="${element.displayIcon}" alt="">
                </div>
            </li>
        `;}
    })
    })
}