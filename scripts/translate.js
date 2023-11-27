const translations = {
  "malay": {
    "english": {
      "pagi": "morning",
      "petang": "afternoon"
    }
  },
  "english": {
    "malay": {
      "morning": "pagi",
      "afternoon": "petang"
    }
  },
};

export function translate(inputLanguage, outputLanguage, inputText) {
  return translations[inputLanguage][outputLanguage][inputText];
}