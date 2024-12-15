const board = document.querySelector(".board") as HTMLDivElement;
const rollBtn = document.querySelector(".roll") as HTMLButtonElement;
const player1Div = document.querySelector(".player1") as HTMLDivElement;
const player2Div = document.querySelector(".player2") as HTMLDivElement;
const buyHouseBtn = document.querySelector(".buyHouse") as HTMLButtonElement;
const buyHotelBtn = document.querySelector(".buyHotel") as HTMLButtonElement;
const player1MoneySpan = document.querySelector(".player1 span") as HTMLSpanElement;
const player2MoneySpan = document.querySelector(".player2 span") as HTMLSpanElement;
const player1PropertiesDiv = document.querySelector(".player1 .propertiesDiv") as HTMLDivElement;
const player2PropertiesDiv = document.querySelector(".player2 .propertiesDiv") as HTMLDivElement;
const p1EndTurnBtn = document.querySelector(".p1EndTurn") as HTMLButtonElement;
const p2EndTurnBtn = document.querySelector(".p2EndTurn") as HTMLButtonElement;


interface Monopoly {
    id: number,
    name: string,
    type: string,
    color?: string,
    price?: number,
    rent?: number[],
    houseCost?: number,
    hotelCost?: number,
    bought?: boolean,
    description?:string,
    amount?: number,
    rentMultiplier?: number[],
    image?: string
}

const monopolyProperties: Monopoly[] = [
    {
        "id": 0,
        "name": "GO",
        "type": "special",
        "description": "Collect $200 when you pass.",
        "image": "https://pbs.twimg.com/tweet_video_thumb/GeLNrogX0AAGKvr.jpg"
    },
    {
        "id": 1,
        "name": "Mediterranean Avenue",
        "type": "property",
        "color": "brown",
        "price": 60,
        "rent": [2, 10, 30, 90, 160, 250],
        "houseCost": 50,
        "hotelCost": 50,
        "bought": false
    },
    {
        "id": 2,
        "name": "Community Chest",
        "type": "special",
        "description": "Draw a Community Chest card.",
        "image": "https://i.pinimg.com/originals/aa/98/84/aa98846a483c4de09ea31b9c1e3fd8a1.gif"
    },
    {
        "id": 3,
        "name": "Baltic Avenue",
        "type": "property",
        "color": "brown",
        "price": 60,
        "rent": [4, 20, 60, 180, 320, 450],
        "houseCost": 50,
        "hotelCost": 50,
        "bought": false
    },
    {
        "id": 4,
        "name": "Income Tax",
        "type": "tax",
        "amount": 200,
        "image": "https://ih1.redbubble.net/image.4418733453.4256/flat,750x,075,f-pad,750x1000,f8f8f8.u2.jpg"
    },
    {
        "id": 5,
        "name": "Reading Railroad",
        "type": "railroad",
        "color": "grey",
        "price": 200,
        "rent": [25, 50, 100, 200],
        "bought": false
    },
    {
        "id": 6,
        "name": "Oriental Avenue",
        "type": "property",
        "color": "light-blue",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50,
        "bought": false
    },
    {
        "id": 7,
        "name": "Chance",
        "type": "special",
        "description": "Draw a Chance card.",
        "image": "https://www.pngkit.com/png/full/227-2275009_monopoly-chance-question-mark.png"
    },
    {
        "id": 8,
        "name": "Vermont Avenue",
        "type": "property",
        "color": "light-blue",
        "price": 100,
        "rent": [6, 30, 90, 270, 400, 550],
        "houseCost": 50,
        "hotelCost": 50,
        "bought": false
    },
    {
        "id": 9,
        "name": "Connecticut Avenue",
        "type": "property",
        "color": "light-blue",
        "price": 120,
        "rent": [8, 40, 100, 300, 450, 600],
        "houseCost": 50,
        "hotelCost": 50,
        "bought": false
    },
    {
        "id": 10,
        "name": "Jail",
        "type": "special",
        "description": "Just visiting or in jail.",
        "image": "https://thumbs.dreamstime.com/b/monopoly-policeman-iconic-white-background-appears-board-where-says-go-to-jail-113104792.jpg"
    },
    {
        "id": 11,
        "name": "St. Charles Place",
        "type": "property",
        "color": "pink",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100,
        "bought": false
    },
    {
        "id": 12,
        "name": "Electric Company",
        "type": "utility",
        "price": 150,
        "rentMultiplier": [4, 10],
        "image": "https://thumbs.dreamstime.com/b/monopoly-electric-company-bulb-iconic-game-logo-if-you-can-get-both-utilities-board-collect-big-money-115501796.jpg",
        "bought": false
    },
    {
        "id": 13,
        "name": "States Avenue",
        "type": "property",
        "color": "pink",
        "price": 140,
        "rent": [10, 50, 150, 450, 625, 750],
        "houseCost": 100,
        "hotelCost": 100,
        "bought": false
    },
    {
        "id": 14,
        "name": "Virginia Avenue",
        "type": "property",
        "color": "pink",
        "price": 160,
        "rent": [12, 60, 180, 500, 700, 900],
        "houseCost": 100,
        "hotelCost": 100,
        "bought": false
    },
    {
        "id": 15,
        "name": "Pennsylvania Railroad",
        "type": "railroad",
        "color": "grey",
        "price": 200,
        "rent": [25, 50, 100, 200],
        "bought": false
    },
    {
        "id": 16,
        "name": "St. James Place",
        "type": "property",
        "color": "orange",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100,
        "bought": false
    },
    {
        "id": 17,
        "name": "Community Chest",
        "type": "special",
        "description": "Draw a Community Chest card.",
        "image": "https://i.pinimg.com/originals/aa/98/84/aa98846a483c4de09ea31b9c1e3fd8a1.gif"
    },
    {
        "id": 18,
        "name": "Tennessee Avenue",
        "type": "property",
        "color": "orange",
        "price": 180,
        "rent": [14, 70, 200, 550, 750, 950],
        "houseCost": 100,
        "hotelCost": 100,
        "bought": false
    },
    {
        "id": 19,
        "name": "New York Avenue",
        "type": "property",
        "color": "orange",
        "price": 200,
        "rent": [16, 80, 220, 600, 800, 1000],
        "houseCost": 100,
        "hotelCost": 100,
        "bought": false
    },
    {
        "id": 20,
        "name": "Free Parking",
        "type": "special",
        "description": "No action.",
        "image": "https://i0.wp.com/boardgamemanufacturing.com/wp-content/uploads/2019/04/free-parking1.png?fit=216%2C216&ssl=1"
    },
    {
        "id": 21,
        "name": "Kentucky Avenue",
        "type": "property",
        "color": "red",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150,
        "bought": false
    },
    {
        "id": 22,
        "name": "Chance",
        "type": "special",
        "description": "Draw a Chance card.",
        "image": "https://www.pngkit.com/png/full/227-2275009_monopoly-chance-question-mark.png"
    },
    {
        "id": 23,
        "name": "Indiana Avenue",
        "type": "property",
        "color": "red",
        "price": 220,
        "rent": [18, 90, 250, 700, 875, 1050],
        "houseCost": 150,
        "hotelCost": 150,
        "bought": false
    },
    {
        "id": 24,
        "name": "Illinois Avenue",
        "type": "property",
        "color": "red",
        "price": 240,
        "rent": [20, 100, 300, 750, 925, 1100],
        "houseCost": 150,
        "hotelCost": 150,
        "bought": false
    },
    {
        "id": 25,
        "name": "B&O Railroad",
        "type": "railroad",
        "color": "grey",
        "price": 200,
        "rent": [25, 50, 100, 200],
        "bought": false
    },
    {
        "id": 26,
        "name": "Atlantic Avenue",
        "type": "property",
        "color": "yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150,
        "bought": false
    },
    {
        "id": 27,
        "name": "Ventnor Avenue",
        "type": "property",
        "color": "yellow",
        "price": 260,
        "rent": [22, 110, 330, 800, 975, 1150],
        "houseCost": 150,
        "hotelCost": 150,
        "bought": false
    },
    {
        "id": 28,
        "name": "Water Works",
        "type": "utility",
        "price": 150,
        "rentMultiplier": [4, 10],
        "image": "https://clipart-library.com/data_images/260425.gif",
        "bought": false
    },
    {
        "id": 29,
        "name": "Marvin Gardens",
        "type": "property",
        "color": "yellow",
        "price": 280,
        "rent": [24, 120, 360, 850, 1025, 1200],
        "houseCost": 150,
        "hotelCost": 150,
        "bought": false
    },
    {
        "id": 30,
        "name": "Go to Jail",
        "type": "special",
        "description": "Move directly to Jail. Do not pass GO, do not collect $200.",
        "image": "https://antonynbritt.com/wp-content/uploads/2013/06/june-16-in-jail-monopoly.jpg"
    },
    {
        "id": 31,
        "name": "Pacific Avenue",
        "type": "property",
        "color": "green",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200,
        "bought": false
    },
    {
        "id": 32,
        "name": "North Carolina Avenue",
        "type": "property",
        "color": "green",
        "price": 300,
        "rent": [26, 130, 390, 900, 1100, 1275],
        "houseCost": 200,
        "hotelCost": 200,
        "bought": false
    },
    {
        "id": 33,
        "name": "Community Chest",
        "type": "special",
        "description": "Draw a Community Chest card.",
        "image": "https://i.pinimg.com/originals/aa/98/84/aa98846a483c4de09ea31b9c1e3fd8a1.gif"
    },
    {
        "id": 34,
        "name": "Pennsylvania Avenue",
        "type": "property",
        "color": "green",
        "price": 320,
        "rent": [28, 150, 450, 1000, 1200, 1400],
        "houseCost": 200,
        "hotelCost": 200,
        "bought": false
    },
    {
        "id": 35,
        "name": "Short Line",
        "type": "railroad",
        "color": "grey",
        "price": 200,
        "rent": [25, 50, 100, 200],
        "bought": false
    },
    {
        "id": 36,
        "name": "Chance",
        "type": "special",
        "description": "Draw a Chance card.",
        "image": "https://www.pngkit.com/png/full/227-2275009_monopoly-chance-question-mark.png"
    },
    {
        "id": 37,
        "name": "Park Place",
        "type": "property",
        "color": "dark-blue",
        "price": 350,
        "rent": [35, 175, 500, 1100, 1300, 1500],
        "houseCost": 200,
        "hotelCost": 200,
        "bought": false
    },
    {
        "id": 38,
        "name": "Luxury Tax",
        "type": "tax",
        "amount": 75,
        "image": "https://twistedimagetransfers.com/cdn/shop/files/LuxuryTaxPay75Monopoly_1024x1024.png?v=1731193338"
    },
    {
        "id": 39,
        "name": "Boardwalk",
        "type": "property",
        "color": "dark-blue",
        "price": 400,
        "rent": [50, 200, 600, 1400, 1700, 2000],
        "houseCost": 200,
        "hotelCost": 200,
        "bought": false
    }
]

interface PropertiesInterface {
    id: number,
    name: string,
    type: string,
    color?: string,
    price: number,
    rent: number[],
    houseCost?: number,
    hotelCost?: number,
    bought: boolean,
    rentMultiplier?: number[],
    image?: string,
}

interface PlayerInterface {
    id: number,
    icon: string,
    money: number,
    playerTile: number,
    boughtProperties: PropertiesInterface[]
}

let player1: PlayerInterface = {
    id: 1,
    icon: "🐢",
    money: 1000,
    playerTile: 0,
    boughtProperties: []
}
let player2: PlayerInterface = {
    id: 2,
    icon: "🦔",
    money: 1000,
    playerTile: 0,
    boughtProperties: [],
}

player1MoneySpan.innerText = `$${player1.money}`
player2MoneySpan.innerText = `$${player2.money}`

// BOARD
const gameBoardArr: number[] = [
    0,1,2,3,4,5,6,7,8,9,10,
    39,-1,-1,-1,-1,-1,-1,-1,-1,-1,11,
    38,-1,-1,-1,-1,-1,-1,-1,-1,-1,12,
    37,-1,-1,-1,-1,-1,-1,-1,-1,-1,13,
    36,-1,-1,-1,-1,-1,-1,-1,-1,-1,14,
    35,-1,-1,-1,-1,-1,-1,-1,-1,-1,15,
    34,-1,-1,-1,-1,-1,-1,-1,-1,-1,16,
    33,-1,-1,-1,-1,-1,-1,-1,-1,-1,17,
    32,-1,-1,-1,-1,-1,-1,-1,-1,-1,18,
    31,-1,-1,-1,-1,-1,-1,-1,-1,-1,19,
    30,29,28,27,26,25,24,23,22,21,20
]
gameBoardArr.forEach((tileId) => {
    if (tileId === -1) {
        board.innerHTML += `<div class="empty"></div>`;
    } else {
        const property = monopolyProperties[tileId];
        board.innerHTML += `
            <div class="tile text-center d-flex flex-column" id="tile${tileId}">
                <div class="color-bar ${property.color || ''}"></div>
                <div class="name" style="padding: 2px;">${property.name || ''}</div>
                <div class="price" style="padding: 2px;">${property.price ? `PRICE $${property.price}` : ''}</div>
                <div class="playerPos fs-6" id="pos${tileId}" style="padding: 0"></div>
            </div>
        `
    }
});

// ROLL THE DICE
function randomNumber(num:number):number {
    return Math.floor(Math.random() * num);
}

let dice1:number = 0;
let dice2:number = 0;
let rolledNumber:number = 0
let didRoll:boolean = false;

rollBtn.onclick = () => {
    if (!didRoll) {
        dice1 = randomNumber(6) + 1;
        dice2 = randomNumber(6) + 1;
        rolledNumber = dice1 + dice2
        alert(`You rolled ${dice1} and ${dice2} that is equal ${rolledNumber}!`)

        if (p1Turn) {
            player1.playerTile += rolledNumber

            if (player1.playerTile >= 40) {
                player1.playerTile -= 40
                player1.money += 200
                player1MoneySpan.innerText = `$${player1.money}`
            }
            showProperty(player1.playerTile)
            checkPlayer2BoughtProperties()
        }

        else if (p2Turn) {
            player2.playerTile += rolledNumber

            if (player2.playerTile >= 40) {
                player2.playerTile -= 40
                player2.money += 200
                player2MoneySpan.innerText = `$${player2.money}`
            }
            showProperty(player2.playerTile)
            checkPlayer1BoughtProperties()
        }
    }
    updateBoard()
    checkPlayerTurn()
    didRoll = true
}


// PLAYER TURNS
let turnCount:number = 0
let p1Turn:boolean = false
let p2Turn:boolean = false

function player1Turn() {
    player2Div.style.boxShadow = ""
    player1Div.style.boxShadow = "0px 0px 5px 3px rgba(255,234,0,1)"
    p2Turn = false
    p1Turn = true
}

function player2Turn() {
    player1Div.style.boxShadow = ""
    player2Div.style.boxShadow = "0px 0px 5px 3px rgba(255,234,0,1)"
    p1Turn = false
    p2Turn = true
}

function checkPlayerTurn() {
    if (turnCount % 2 === 0) {
            p1EndTurnBtn.onclick = () => {
                player2Turn()
                didRoll = false
                turnCount++
                showCard.style.display = "none";
            }
        } else {
            p2EndTurnBtn.onclick = () => {
                player1Turn()
                didRoll = false
                turnCount++
                showCard.style.display = "none";
            }
        }
}

player1Turn()

// PLAYER MOVEMENT ON BOARD
const playerPosition = document.querySelectorAll(".playerPos") as NodeListOf<HTMLDivElement>

function updateBoard() {
    playerPosition.forEach(pos => {
        pos.innerHTML = "";
    });

    const player1Tile = document.querySelector(`#tile${player1.playerTile}`) as HTMLDivElement;
    const player1Pos = player1Tile.querySelector(".playerPos") as HTMLDivElement;
    player1Pos.innerHTML += player1.icon;

    const player2Tile = document.querySelector(`#tile${player2.playerTile}`) as HTMLDivElement;
    const player2Pos = player2Tile.querySelector(".playerPos") as HTMLDivElement;
    player2Pos.innerHTML += player2.icon;
}

updateBoard()

// SHOW BUY CARD
const showCard = document.querySelector(".showCard") as HTMLDivElement;

showCard.style.display = "none";

function showProperty(playerTileId:number) {
    const property = monopolyProperties[playerTileId];
    const rentPrice = (property?.rent as number[]);
    const rentMultiplier = (property?.rentMultiplier as number[]);

    showCard.style.display = "block";

    showCard.innerHTML = ""

    if (property.type === "property" && !property.bought) {
        showCard.innerHTML = `
        <div class="d-flex card flex-column align-content-between gap-3">
                    <div class="propertyName d-flex justify-content-center align-items-center fw-bold ${property.color}">${property.name}</div>
                    <div class="rent fw-bold">${rentPrice[0] ? `RENT $${rentPrice[0]}` : ''}</div>
                    <div class="rentPrices">
                        <div class="houses">
                            <div class="rent1House">${rentPrice[1] ? `With 1 House: $${rentPrice[1]}` : ''}</div>
                            <div class="rent2House">${rentPrice[2] ? `With 2 Houses: $${rentPrice[2]}` : ''}</div>
                            <div class="rent3House">${rentPrice[3] ? `With 3 Houses: $${rentPrice[3]}` : ''}</div>
                            <div class="rent4House">${rentPrice[4] ? `With 4 Houses: $${rentPrice[4]}` : ''}</div>
                            <div class="rent1Hotel">${rentPrice[5] ? `With 1 Hotel: $${rentPrice[5]}` : ''}</div>
                        </div>
                    </div>
                    <div class="propertyPrice fw-bold">${property.price ? `PRICE $${property.price}` : ''}</div>
                    <div>
                        <div class="houseCost">${property.houseCost ? `House Cost $${property.price} each` : ''}</div>
                        <div class="hotelCost">${property.houseCost ? `Hotel Cost $${property.price}` : ''}</div>
                    </div>
                    <div class="d-flex justify-content-between gap-3">
                        <button class="buyProperty btn btn-success flex-grow-1" id="buy${property.id}">Buy</button>
                    </div>
                </div>
    `
    }
    else if (property.type === "railroad" && !property.bought) {
        showCard.innerHTML = `
        <div class="d-flex card flex-column align-content-between gap-3">
                    <div class="propertyName d-flex justify-content-center align-items-center fw-bold ${property.color}">${property.name}</div>
                    <div>
                        <img src="https://lh6.googleusercontent.com/proxy/ssTWWpdHBMET5AC4ciERpptlGrL7ooOM-wbJ4br-8YxlWz2USQELCCBcycZ1n-k37DR4Yf_eAkAeZ-PaRhfcoOyZZLntMzxPrv62RsED7R_h4pyd5r4AysrixHM4iCs9b5KGl5CDzX0oagaGUhFSPBiUR5F9NOB_gD8CMTRtBgMf_Q" style="width:70px; height:70px;" alt="">
                    </div>
                    <div class="rent fw-bold">${rentPrice[0] ? `RENT $${rentPrice[0]}` : ''}</div>
                    <div class="rentPrices">
                        <div class="houses">
                            <div class="rent1House">If 2 railroads are owned: $${rentPrice[1]}</div>
                            <div class="rent2House">If 3 railroads are owned: $${rentPrice[2]}</div>
                            <div class="rent3House">If 4 railroads are owned: $${rentPrice[3]}</div>
                        </div>
                    </div>
                    <div class="propertyPrice fw-bold">${property.price ? `PRICE $${property.price}` : ''}</div>
                    <div>
                        <div class="houseCost">${property.houseCost ? `House Cost $${property.price} each` : ''}</div>
                        <div class="hotelCost">${property.houseCost ? `Hotel Cost $${property.price}` : ''}</div>
                    </div>
                    <div class="d-flex justify-content-between gap-3">
                        <button class="buyProperty btn btn-success flex-grow-1" id="buy${property.id}">Buy</button>
                    </div>
                </div>
    `
    }
    else if (property.type === "special") {
        showCard.innerHTML = `
        <div class="d-flex card flex-column align-content-between gap-3">
                    <div class="propertyName d-flex justify-content-center align-items-center fw-bold">${property.name}</div>
                    <div>
                        <img src="${property.image}" style="width:200px; height:250px;" alt="">
                    </div>
                    <div class="rent fw-bold">${property.description}</div>
        </div>
    `
    }
    else if (property.type === "tax") {
        showCard.innerHTML = `
        <div class="d-flex card flex-column align-content-between gap-3">
                    <div class="propertyName d-flex justify-content-center align-items-center fw-bold">${property.name}</div>
                    <div>
                        <img src="${property.image}" style="width:200px; height:250px;" alt="">
                    </div>
                    <div class="rent fw-bold">Pay: $${property.amount}</div>
        </div>
    `
    }
    else if (property.type === "utility" && !property.bought) {
        showCard.innerHTML = `
        <div class="d-flex card flex-column align-content-between gap-2">
                    <div class="propertyName d-flex justify-content-center align-items-center fw-bold">${property.name}</div>
                    <div>
                        <img src="${property.image}" style="width:100px; height:100px;" alt="">
                    </div>
                    <div class="oneUtility">If one utility is owned, rent is ${rentMultiplier[0]} times amount shown on dice</div>
                    <div class="bothUtilities">If both utilities are owned, rent is ${rentMultiplier[1]} times amount shown on dice</div>
                    <div class="propertyPrice fw-bold">${property.price ? `PRICE $${property.price}` : ''}</div>
                    <div>
                        <div class="houseCost">${property.houseCost ? `House Cost $${property.price} each` : ''}</div>
                        <div class="hotelCost">${property.houseCost ? `Hotel Cost $${property.price}` : ''}</div>
                    </div>
                    <div class="d-flex justify-content-between gap-3">
                        <button class="buyProperty btn btn-success flex-grow-1" id="buy${property.id}">Buy</button>
                    </div>
                </div>
    `
    }
    else {
        showCard.innerHTML = ""
        showCard.style.display = "none"
    }


    // BUY CARD
    const buyProperty = document.querySelectorAll(`#buy${playerTileId}`) as NodeListOf <HTMLButtonElement>

    buyProperty.forEach(prop => {
        prop.onclick = () => {
            if (p1Turn) {
                playerBuyProperty(player1,playerTileId)
                addHoverEffectToBoughtProperties()
            }
            if (p2Turn) {
                playerBuyProperty(player2,playerTileId)
                addHoverEffectToBoughtProperties()
            }
        }
    })

}

const showBoughtCard = document.querySelector(".showBoughtCard") as HTMLDivElement;

showBoughtCard.style.display = "none"


// BUY CARD LOGIC
function playerBuyProperty(player: PlayerInterface, propertyId:number ) {
    const property = monopolyProperties[propertyId];
    const playerMoneySpan = document.querySelector(`#moneySpan${player.id}`) as HTMLSpanElement;
    const playerPropertiesDiv = document.querySelector(`#propertiesDiv${player.id}`) as HTMLDivElement;

    if (player.money < (property.price ?? 0)) {
        alert("You do not have enough money to buy this property.");
        return;
    }

    player.money -= property.price ?? 0;

    playerMoneySpan.innerText = `$${player.money}`
    playerPropertiesDiv.innerHTML += `<div class="boughtProperty border border-black p-1 ${property.color}" id="bought${propertyId}">${property.name}</div>`

    property.bought = true

    if (property.type === "property") {
        player.boughtProperties.push({
            id: property.id,
            name: property.name,
            type: property.type,
            color: property.color,
            price: property.price!,
            rent: property.rent!,
            houseCost: property.houseCost,
            hotelCost: property.hotelCost,
            bought: property.bought
        })
    }
    else if (property.type === "railroad") {
        player.boughtProperties.push({
            id: property.id,
            name: property.name,
            type: property.type,
            color: property.color,
            price: property.price!,
            rent: property.rent!,
            bought: property.bought
        })
    }
    else if (property.type === "utility") {
        player.boughtProperties.push({
            id: property.id,
            name: property.name,
            type: property.type,
            //@ts-ignore
            price: property.price,
            rentMultiplier: property.rentMultiplier,
            bought: property.bought
        })
    }
    showProperty(propertyId)
}

// BOUGHT PROPERTIES HOVER
function addHoverEffectToBoughtProperties() {
    const boughtPropertyDivs = document.querySelectorAll(".boughtProperty") as NodeListOf<HTMLDivElement>;

    boughtPropertyDivs.forEach(div => {
        let boughtPropertyId = Number(div.id.replace("bought",""))
        let property = monopolyProperties[boughtPropertyId]
        let rentPrice = (property?.rent as number[]);
        let rentMultiplier = (property?.rentMultiplier as number[]);

        div.addEventListener("mouseover", () => {
            showCard.style.display = "none"
            showBoughtCard.style.display = "block"
            if (property.type === "property") {
                showBoughtCard.innerHTML = `
    <div class="d-flex card flex-column align-content-between gap-3">
                        <div class="propertyName d-flex justify-content-center align-items-center fw-bold ${property.color}">${property.name}</div>
                        <div class="rent fw-bold">${rentPrice[0] ? `RENT $${rentPrice[0]}` : ''}</div>
                        <div class="rentPrices">
                            <div class="houses">
                                <div class="rent1House">${rentPrice[1] ? `With 1 House: $${rentPrice[1]}` : ''}</div>
                                <div class="rent2House">${rentPrice[2] ? `With 2 Houses: $${rentPrice[2]}` : ''}</div>
                                <div class="rent3House">${rentPrice[3] ? `With 3 Houses: $${rentPrice[3]}` : ''}</div>
                                <div class="rent4House">${rentPrice[4] ? `With 4 Houses: $${rentPrice[4]}` : ''}</div>
                                <div class="rent1Hotel">${rentPrice[5] ? `With 1 Hotel: $${rentPrice[5]}` : ''}</div>
                            </div>
                        </div>
                        <div class="propertyPrice fw-bold">${property.price ? `PRICE $${property.price}` : ''}</div>
                        <div>
                            <div class="houseCost">${property.houseCost ? `House Cost $${property.price} each` : ''}</div>
                            <div class="hotelCost">${property.houseCost ? `Hotel Cost $${property.price}` : ''}</div>
                        </div>
    </div>
`
            }
            else if (property.type === "railroad") {
                showBoughtCard.innerHTML = `
    <div class="d-flex card flex-column align-content-between gap-3">
                        <div class="propertyName d-flex justify-content-center align-items-center fw-bold ${property.color}">${property.name}</div>
                    <div>
                        <img src="https://lh6.googleusercontent.com/proxy/ssTWWpdHBMET5AC4ciERpptlGrL7ooOM-wbJ4br-8YxlWz2USQELCCBcycZ1n-k37DR4Yf_eAkAeZ-PaRhfcoOyZZLntMzxPrv62RsED7R_h4pyd5r4AysrixHM4iCs9b5KGl5CDzX0oagaGUhFSPBiUR5F9NOB_gD8CMTRtBgMf_Q" style="width:70px; height:70px;" alt="">
                    </div>
                    <div class="rent fw-bold">${rentPrice[0] ? `RENT $${rentPrice[0]}` : ''}</div>
                    <div class="rentPrices">
                        <div class="houses">
                            <div class="rent1House">If 2 railroads are owned: $${rentPrice[1]}</div>
                            <div class="rent2House">If 3 railroads are owned: $${rentPrice[2]}</div>
                            <div class="rent3House">If 4 railroads are owned: $${rentPrice[3]}</div>
                        </div>
                    </div>
                    <div class="propertyPrice fw-bold">${property.price ? `PRICE $${property.price}` : ''}</div>
                    <div>
                        <div class="houseCost">${property.houseCost ? `House Cost $${property.price} each` : ''}</div>
                        <div class="hotelCost">${property.houseCost ? `Hotel Cost $${property.price}` : ''}</div>
                    </div>
    </div>
`
            }
            else if (property.type === "utility") {
                showBoughtCard.innerHTML = `
    <div class="d-flex card flex-column align-content-between gap-3">
                       <div class="propertyName d-flex justify-content-center align-items-center fw-bold">${property.name}</div>
                    <div>
                        <img src="${property.image}" style="width:100px; height:100px;" alt="">
                    </div>
                    <div class="oneUtility">If one utility is owned, rent is ${rentMultiplier[0]} times amount shown on dice</div>
                    <div class="bothUtilities">If both utilities are owned, rent is ${rentMultiplier[1]} times amount shown on dice</div>
                    <div class="propertyPrice fw-bold">${property.price ? `PRICE $${property.price}` : ''}</div>
                    <div>
                        <div class="houseCost">${property.houseCost ? `House Cost $${property.price} each` : ''}</div>
                        <div class="hotelCost">${property.houseCost ? `Hotel Cost $${property.price}` : ''}</div>
                    </div>
    </div>
`
            }
        })

        div.addEventListener("mouseout", () => {
            showBoughtCard.style.display = "none"
            showCard.style.display = "block"
            if (showCard.innerHTML === "") {
                showCard.style.display = "none"
            }
        })
    })
}

// RENT LOGIC
function checkPlayer1BoughtProperties() {
    let payed:boolean = false
    const railroadCountPlayer1 = player1.boughtProperties.filter(property => property.type === "railroad").length - 1;

    for (let i = 0; i < player1.boughtProperties.length; i++) {
        const property = player1.boughtProperties[i];
        if ((property.type === "property" && player2.playerTile === property.id) && !payed) {
            player2.money -= property.rent[0]
            player1.money += property.rent[0]
            player1MoneySpan.innerText = `$${player1.money}`
            player2MoneySpan.innerText = `$${player2.money}`
            alert(`You stand on ${property.name} which is owned by ${player1.icon}, PAY $${property.rent[0]}`)
            payed = true
        }
        else if ((property.type === "railroad" && player2.playerTile === property.id) && !payed) {
            player2.money -= property.rent[railroadCountPlayer1]
            player1.money += property.rent[railroadCountPlayer1]
            player1MoneySpan.innerText = `$${player1.money}`
            player2MoneySpan.innerText = `$${player2.money}`
            alert(`You stand on ${property.name} which is owned by ${player1.icon}, PAY $${property.rent[railroadCountPlayer1]}`)
            payed = true
        }
        else payed = false
    }
}

function checkPlayer2BoughtProperties() {
    let payed:boolean = false
    const railroadCountPlayer2 = player2.boughtProperties.filter(property => property.type === "railroad").length - 1;

    for (let i = 0; i < player2.boughtProperties.length; i++) {
        const property = player2.boughtProperties[i]
        if ((property.type === "property" && player1.playerTile === property.id) && !payed) {
            player1.money -= property.rent[0]
            player2.money += property.rent[0]
            player1MoneySpan.innerText = `$${player1.money}`
            player2MoneySpan.innerText = `$${player2.money}`
            alert(`You stand on ${property.name} which is owned by ${player2.icon}, PAY $${property.rent[0]}`)
            payed = true
        }
        else if ((property.type === "railroad" && player2.playerTile === property.id) && !payed) {
            player2.money -= property.rent[railroadCountPlayer2]
            player1.money += property.rent[railroadCountPlayer2]
            player1MoneySpan.innerText = `$${player1.money}`
            player2MoneySpan.innerText = `$${player2.money}`
            alert(`You stand on ${property.name} which is owned by ${player1.icon}, PAY $${property.rent[railroadCountPlayer2]}`)
            payed = true
        }
        else payed = false
    }
}










