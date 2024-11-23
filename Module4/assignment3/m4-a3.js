document.getElementById("searchForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const query = document.getElementById("query").value.trim();
    const api = `https://api.tvmaze.com/singlesearch/shows?q=${query}`;
    const results = document.getElementById("results");

    results.innerHTML = "";

    if (!query) {
        alert("Please enter a TV series name.");
        return;
    }

    try {
        const response = await fetch(api);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const show = await response.json(); // Parse the single show object

        // Create a new article for the show
        const article = document.createElement("article");
        const imageUrl = show.image?.medium || "https://via.placeholder.com/210x295?text=No+Image";
        article.innerHTML = `
            <h2>${show.name}</h2>
            <a href="${show.url}" target="_blank">View details</a>
            <img src="${imageUrl}" alt="${show.name}">
            <div>${show.summary || "No summary available."}</div>
        `;
        results.append(article); // Append the article to the results container
    } catch (err) {
        console.error("Error fetching data:", err);
        results.innerHTML = `<p>An error occurred. Please try again.</p>`;
    }
});
