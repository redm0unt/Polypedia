document.addEventListener("DOMContentLoaded", function () {
    // Get the random article button element
    var randomArticleButton = document.getElementById("randomArticle");

    // Add a click event listener to the button
    randomArticleButton.addEventListener("click", function () {
      // Redirect to the info.html page
      window.location.href = "info.html";
    });
  });
  function translateText() {
    const inputText = document.getElementById('inputText').value;
    const apiKey = 'YOUR_GOOGLE_TRANSLATE_API_KEY'; // Замени API ключ
    const targetLanguage = 'en'; 

    const url = "https://translation.googleapis.com/language/translate/v2?key=${apiKey}&q=${encodeURI(inputText)}&target=${targetLanguage}";

    fetch(url, {
      method: 'POST'
    })
    .then(response => response.json())
    .then(data => {
      const translatedText = data.data.translations[0].translatedText;
      document.getElementById('outputText').innerText = translatedText;
    })
    .catch(error => console.error('Ошибка:', error));
  }
  $(document).ready(function () {
    // Add change event listener to the language select element
    $('#languageSelect').change(function () {
      // Get the selected option value
      var selectedValue = $(this).val();

      // Redirect to the corresponding page based on the selected language
      if (selectedValue === 'en') {
        window.location.href = 'info_en.html';
      } else if (selectedValue === 'ru') {
        window.location.href = 'info.html';
      }
      // Add more conditions if you have additional languages
    });
  });