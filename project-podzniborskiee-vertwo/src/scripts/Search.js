const searchInput = document.querySelector('.search-input');
const searchSuggestions = document.querySelector('.search-suggestions');

searchSuggestions.classList.add('hidden');

searchInput.addEventListener('input', (e) => {
    const userInput = e.target.value.trim();
    if (userInput.length > 0) {
        searchSuggestions.classList.remove('hidden');

        fetch('foods.json')
            .then(response => response.json())
            .then(data => {
                const suggestions = [];
                data.forEach((food) => {
                    if (food.name.toLowerCase().includes(userInput.toLowerCase())) {
                        suggestions.push(food);
                    }
                });
                if (suggestions.length === 0) {
                    searchSuggestions.innerHTML = '<li>No results found</li>';
                } else {
                    searchSuggestions.innerHTML = '';
                    suggestions.forEach((suggestion) => {
                        const suggestionHTML = `
                            <li>
                                <a href="food-details.html?id=${suggestion.id}" data-food-id="${suggestion.id}">
                                ${suggestion.name}
                                </a>
                            </li>
                            `;
                        searchSuggestions.innerHTML += suggestionHTML;
                    });
                }
            });
    } else {
        searchSuggestions.classList.add('hidden');
    }
});