// script.js

// Food alternatives data based on reason and ingredient
const foodAlternatives = {
    chocolate: {
      weightLoss: "Dark Chocolate (Higher in cocoa, lower in sugar, aids in curbing cravings)",
      weightGain: "Milk Chocolate with Nuts (Higher in protein and calories)",
      health: "Carob (Caffeine-free, a healthy chocolate alternative)",
    },
    icecream: {
      weightLoss: "Greek Yogurt (High in protein, supports digestion, keeps you full)",
      weightGain: "Full-Fat Ice Cream (Higher in calories and fat)",
      health: "Sorbet (Made from fruit, lower in fat, refreshing treat)",
    },
    pizza: {
      weightLoss: "Cauliflower Crust Pizza (Low-carb, fewer calories, gluten-free)",
      weightGain: "Deep Dish Pizza with Extra Cheese (Higher in calories and fat)",
      health: "Whole Wheat Crust Pizza (Higher in fiber, more nutrients)",
    },
    chips: {
      weightLoss: "Air-Popped Popcorn (Low in calories, high in fiber)",
      weightGain: "Baked Potato Chips with Olive Oil (Higher in healthy fats and calories)",
      health: "Baked Veggie Chips (Low-fat, nutrient-dense, rich in vitamins)",
    },
    // Add more ingredients and their alternatives
  };
  
  let selectedReason = '';
  let selectedIngredient = '';
  
  function handleReasonChange() {
    const reasonSelect = document.getElementById('reasonSelect');
    selectedReason = reasonSelect.value;
  
    // Show the ingredient selection dropdown after reason is chosen
    const ingredientDiv = document.getElementById('ingredientDiv');
    if (selectedReason) {
      ingredientDiv.style.display = 'block';
    } else {
      ingredientDiv.style.display = 'none';
      document.getElementById('suggestions').innerHTML = "<p>Select a reason and ingredient to see the suggestions!</p>";
    }
  }
  
  function displaySuggestions() {
    const ingredientSelect = document.getElementById('ingredientSelect');
    selectedIngredient = ingredientSelect.value;
  
    const suggestionsDiv = document.getElementById('suggestions');
  
    if (selectedIngredient && selectedReason && foodAlternatives[selectedIngredient]) {
      const alternatives = foodAlternatives[selectedIngredient];
      const suggestion = alternatives[selectedReason];
  
      suggestionsDiv.innerHTML = `<p><strong>Suggested Option for ${capitalizeFirstLetter(selectedReason)}:</strong> ${suggestion}</p>`;
    } else {
      suggestionsDiv.innerHTML = "<p>Select a reason and ingredient to see the suggestions!</p>";
    }
  }
  
  // Utility function to capitalize first letter of the reason
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  