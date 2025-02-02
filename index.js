fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
        /**
         * Challenge: get a URL for a default background image and set it here
         * 
         * 1. Change the query in the URL above back to something real
         * 2. Log the image url to the console (replacing console.log(data) above)
         * 3. Use that URL as the "default" background image to be used if 
         *    the promise is ever rejected.
         */
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1533221498444-b1aa65fcc827?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mzg1MTEwNTN8&ixlib=rb-4.0.3&q=80&w=1080)`
    })

    fetch ("https://api.coingecko.com/api/v3/coins/bitcoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        console.log(res.status)
        return res.json()
    })
    .then(data => {

        document.getElementById("crypto").innerHTML = `
            <img src=${data.image.small} />
            <span>${data.name}</span>
        `

        document.getElementById("crypto").innerHTML += `
            <p>🎯: R ${data.market_data.current_price.usd}</p>
            <p>👆: R ${data.market_data.high_24h.usd}</p>
            <p>👇: R ${data.market_data.low_24h.usd}</p>
        `

    })
    .catch(err => console.error(err))

    function getCurrentTime() {
        const date = new Date()
        document.getElementById("time").textContent = date.toLocaleTimeString("en-us", {timeStyle: "short"})
    }
    
    setInterval(getCurrentTime, 1000)