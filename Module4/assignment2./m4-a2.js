document.getElementById("searchForm").addEventListener("submit", async function (event) {
        event.preventDefault();

        const query = document.getElementById("query").value;
        const api = `https://api.tvmaze.com/singlesearch/shows?q=${query}`;

        try{
            const response = await fetch(api);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            console.log(data);
        }catch (error) {
        console.error('Error fetching the data:', error);
    }
});