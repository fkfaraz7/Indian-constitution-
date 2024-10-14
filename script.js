// Toggle visibility of content sections
document.querySelectorAll('.toggle').forEach(item => {
    item.addEventListener('click', event => {
        const content = item.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});

// Additional functionality to toggle article details
document.querySelectorAll('.content p strong').forEach(article => {
    article.addEventListener('click', event => {
        const details = article.nextElementSibling;
        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    });
});
