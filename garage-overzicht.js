const garages = {
    "Tinsel Tower apt 45": [
        "Veto classic", "DR1", "Comet", "R88", "Jackal", "Panto", "Stryder", "Revolter", "Guantlet interceptor",
        "Bmx", "Bmx", "try cycles bike", "Tornado Custom", "Mamba topless", "Franken Stange", "Z-type",
        "Karuma armored", "Monstrociti", "Ratel", "Itali GTO stinger TT", "La Coureuse", "bmx", "try cycle bike"
    ],
    "Dell perro 20": [
        "Rt3000", "Deluxo", "Omnis e-GT", "Virtue", "Broadway", "Boor", "Scramjet", "Torero XO", "RE-7B",
        "Viligante", "Endure race bike", "Bmx", "cruiser"
    ],
    "Exceptionalist way": [
        "club (compacts)", "Zion(coupe)", "Toros(suv)", "kamacho topless(ofroad)", "briosso r/a (compacts)(hsw)",
        "cognoscenti cabrio(coupe)"
    ],
    "Hawick clubhouse": [
        "Bati 801RR", "Hackachou", "Faggio sport", "Zombie chopper", "Manchez", "Street blazer",
        "Future apocalypse deathbike (Arena)"
    ],
    "Office 1": [
        "Entity xf (super)", "Krieger (super)", "Banshee 900R (super)", "811 (super)", "Nero custom (super)",
        "Gp1(super)", "Furia (super)", "Cylcone (super)", "Tezeract (super)", "Entity XXR (super)",
        "Itali gtb custom", "Vagner (super)", "Osiris (super)", "Zentorno (super)", "Autarch", "T20 (super)",
        "z-type (super)"
    ],
    "Office 2": [
        "Kuruma", "Feltzer", "Pariah (sport)", "Elegy retro custom", "Coquette D10", "itali rsx (sport)",
        "9f (sports)", "raiden (sports)", "Dominator GTT", "Itali GTO", "Futo", "comet retro custom (sport)",
        "Sultan classic", "Jester", "Niobe HSW"
    ],
    "Office 3": [
        "Vamos (muscle)", "Dominator (muscle)", "Weevil custom (muscle)", "Clique", "Gauntlet hellfire (cool muscle)",
        "Cheburek", "panto", "duke o death (muscle)", "Blista Kanjo", "Phoenix", "Weevil", "Faction custom dunk",
        "Moonbeam", "Baller ST", "Rat- truck", "Lurcher", "Drift Yosemite", "Dominator ASP", "Karuma (sports)"
    ],
    "Arena workshop": [
        "slam fm Lijkt op issy", "smasher", "imperator", "Future shock issy", "beuk"
    ],
    "Arena b1": [
        "Dubsta 6x6", "B400", "Hot rod blazer", "Outlaw", "Rusty rebel", "Brawler", "Vagrant", "Maibatsu Monstrocity"
    ],
    "Arena b2": [
        "Half track", "APC", "Paragon R (armored)", "Schafter v12 (amored)", "Insurgent pick up custom", "Barrage",
        "Dune fav", "Stromberger", "Nightshark", "insurgent"
    ],
    "Casino garage": [
        "Prairie (compacts)", "Oracle(coupe)", "Everon (ofroad)", "Komoda (sports)", "Sanchez (motorcycle)",
        "Squaddie(suv)", "Pr4 (open wheel)", "Etr1 (super)", "Emerus (super)", "stafford"
    ],
    "Arcade": [
        "Daemon", "Bifta", "Surfer", "Romero hearse", "Brioso 300", "Prairie","Vorschlaghammer"
    ],
    "Agency": [
        "Buffalo STX", "Patriot mil-spec", "Jubilee", "CHAMPION (super)", "Kuruma ? amored", "Omnis e-GT",
        "Baller LE LWB (amored"
    ],
    "Dell perro 4": [
        "Deveste eight", "Stirling gt", "Cyclone II", "Weaponizes ignis", "S95", "Banshee", "Turismo classic",
        "Entity MT", "Hackuchou drag"
    ],
    "Dell perro 7 motorcycles": [
        "Shinobi", "Reever", "Manchez Scout", "Powersurge", "Shotaro", "Rampant Rocket", "Faggio Mod",
        "Apocalypse deathbike"
    ],
    "Paleto bay Facility": [
        "Deluxo (modded0)?", "Oppressor(modded)", "Hakacou drag(modded)", "Bodhi ?", "Thrax modded",
        "Tornado modded", "Chernobog", "Khanjali", "thruster"
    ],
    "San vitas st apt 2": [
        "Oppressor mk 2"
    ],
    "Autoshop Tuner cars": [
        "Vectre", "Jester RR", "Comet S2", "ZR350", "Guatlet classic custom", "Yosemite", "Warrener HKR",
        "Tailgater S", "Calico GTF", "Hotring sabre"
    ],
    "Eclips blvd garage b1": [
        "Gang burrito"
    ]
};

// Populate dropdown
const garageSelect = document.getElementById("garageSelect");
for (let garage in garages) {
    const option = document.createElement("option");
    option.value = garage;
    option.textContent = garage;
    garageSelect.appendChild(option);
}

// Search functionality
function searchVehicles() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const garageList = document.getElementById("garageList");
    garageList.innerHTML = "";

    if (searchValue.length > 0) {
        for (let garage in garages) {
            const vehicles = garages[garage].filter(vehicle => 
                vehicle.toLowerCase().includes(searchValue)
            );
            if (vehicles.length > 0) {
                const garageDiv = document.createElement("div");
                garageDiv.classList.add("garage");
                const garageTitle = document.createElement("h3");
                garageTitle.textContent = garage;
                garageDiv.appendChild(garageTitle);
                const vehicleList = document.createElement("ul");
                vehicles.forEach(vehicle => {
                    const vehicleItem = document.createElement("li");
                    vehicleItem.textContent = vehicle;
                    vehicleList.appendChild(vehicleItem);
                });
                garageDiv.appendChild(vehicleList);
                garageList.appendChild(garageDiv);
            }
        }
    }
}

// Add vehicle functionality
function addVehicle() {
    const newVehicle = document.getElementById("newVehicle").value.trim();
    const selectedGarage = document.getElementById("garageSelect").value;

    if (newVehicle && selectedGarage) {
        garages[selectedGarage].push(newVehicle);
        document.getElementById("newVehicle").value = "";
        alert(`Voertuig "${newVehicle}" toegevoegd aan garage "${selectedGarage}".`);
    } else {
        alert("Vul een voertuignaam in en selecteer een garage.");
    }
}
