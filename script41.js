const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b7e5ce57-1ed2-4235-8cf9-8fa2be4fe9a7',
		'X-RapidAPI-Host': 'CoinMarketCapzakutynskyV1.p.rapidapi.com'
	}
};

fetch('https://coinmarketcapzakutynskyv1.p.rapidapi.com/getCryptocurrenciesList', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));