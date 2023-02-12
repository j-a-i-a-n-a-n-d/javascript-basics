const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8f0c9039cdmsh11355f0dfe25031p109d39jsn4ae9de546955',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};
async function dadsJoke()
{
    try 
    {
        const response = await fetch('https://dad-jokes.p.rapidapi.com/random/joke/png', options)
        const dataRetrieved = await response.json();
        console.log(dataRetrieved)
        return dataRetrieved
    }
    catch (err)
    {
        console.log(err)
        return "SITE DOWN"
    }
}

async function dataProcessing()
{
    console.log("hello");
    const data = await dadsJoke();
    const myJSON = JSON.stringify(data);
    console.log(myJSON)
    const ele = document.getElementById("filler")
    ele.innerHTML=myJSON
}
document.addEventListener('click', dataProcessing);
