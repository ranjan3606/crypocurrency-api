let apiUrl = "https://api.coinranking.com/v2/coins"
let proxyUrl = "https://cors-anywhere.herokuapp.com/"
let apiKey = "coinrankinge1ddab97868a308dc2d2291c60e92a62ac8a6370cc3c37a5"


fetch(`${proxyUrl}${apiUrl}`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'x-access-token' : `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then((response) => {
    if(response.ok){
        response.json().then((json) => {
            let coinData = json.data.coins
            if(coinData.length > 0){
                var crypt = ""
            }
            // for loop start
            coinData.forEach((coins) => {
                crypt += "<tr>"
                crypt += `<td>${coins.rank}</td>`
                crypt += `<td>${coins.name}</td>`
                crypt += `<td>$${Math.round(coins.price)} Billions</td>`
                crypt += `<td>${coins.symbol}</td>`;"</tr>"
            })
            document.getElementById("emp").innerHTML = crypt
        })
    }  
}).catch((err) => {
    console.log(err)
})