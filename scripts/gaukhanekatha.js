let currentPage = 0;
let questionsData = [];

// Function to load JSON data
async function loadQuestions() {
    try {
        const response = await fetch('data/Gaukhanekatha/data.json'); // Correct path to JSON file
        if (!response.ok) {
            throw new Error('Failed to load questions data');
        }
        questionsData = await response.json();
        renderPage(currentPage);
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}

// Function to render a page
function renderPage(pageIndex) {
    const pagesContainer = document.getElementById('pages-container');
    if (questionsData[pageIndex]) {
        pagesContainer.innerHTML = `
            <div class="page">
                <h2 class="heading-secondary">Questions</h2>
                <div class="question">${questionsData[pageIndex].question}</div>
                <br><br><br><br>
                <details class="answer">
                    <summary>Check Answer</summary>
                    <h3>${questionsData[pageIndex].answer}</h3>
                </details>
            </div>
        `;
    } else {
        pagesContainer.innerHTML = `<div class="page"><h2>No more questions!</h2></div>`;
    }
}

// Event listeners for buttons
document.querySelector('.button-next').addEventListener('click', () => {
    if (currentPage < questionsData.length - 1) {
        currentPage++;
        renderPage(currentPage);
    }
});

document.querySelector('.button-home').addEventListener('click', () => {
    currentPage = 0;
    renderPage(currentPage);
});

// Load questions on page load
loadQuestions();
