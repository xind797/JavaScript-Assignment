// Select the element with id="target"
let target = document.getElementById("target");

// Add the HTML content using innerHTML
target.innerHTML = `
    <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
    </ul>
`;
target.classList.add("my-list");