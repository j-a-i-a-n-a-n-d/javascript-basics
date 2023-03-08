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
    console.log(data)
    let array = Object.entries(data).map(([key, value]) => [key, value]);
    console.log(array);
    console.log(array[0]);
    console.log(array[1][1].setup);
    console.log(array[1][1].punchline);
    console.log(array[1][1].image);
    const ele = document.getElementById("filler")
}
document.addEventListener('click', dataProcessing);
