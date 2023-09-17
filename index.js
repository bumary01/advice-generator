// Function to fetch a random quote
async function getRandomQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        return data.content;
    } catch (error) {
        console.error("Error fetching quote:", error);
        return "An error occurred while fetching the quote.";
    }
}

// Wait for the DOM to fully load before attaching the event listener
document.addEventListener("DOMContentLoaded", function () {
    // Event listener for the "Generate Quote" button
    document.getElementById("generateButton").addEventListener("click", async function () {
        const quote = await getRandomQuote();
        document.getElementById("quoteOutput").textContent = quote;
        document.getElementById('adviceLength').innerText= quote.length;
        const codeIndexOutputElement = document.getElementById("codeIndexOutput");
        codeIndexOutputElement.innerHTML = `
        <h6>${advice} + ${adviceId}</h6>
        
    `;
    });
});

// ...
  

// // Event handler for the "Generate Quote" button
// document.getElementById("generateButton").addEventListener("click", async function () {
//     const quote = await getRandomQuote();
//     document.getElementById("quoteOutput").textContent = quote;
// });

// fetch ('https://api.quotable.io/random', {
//     method: 'POST',
//     headers:{
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify({
//         name:'quote 1'
//     })
// })
// .then(res =>{
//     if (res.ok){
//         console.log('SUCCESS')
//     } else{
//         console.log('Not Successful')
//     }
// })
// .then(data=> console.log(data))
// .catch(error => console.log('Error'))
