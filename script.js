const checkBtn = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const resultDiv = document.getElementById('result');


function isPalindrome(text) {
    const reversedText = text.split('').reverse().join('');
    return text === reversedText;
}

checkBtn.addEventListener('click', () => {
  const text = textInput.value.trim().toLowerCase();
  if (text === '') {
    alert("Please input a value");
  } else {
    const result = isPalindrome(text.replace(/[^a-z0-9]/g, ''));
    if (result) {
      resultDiv.innerHTML = `<p>Yes, <b>${textInput.value}</b> is a palindrome.</p>`;
    } else { 
      resultDiv.innerHTML = `<p>No, <b>${textInput.value}</b> is not a palindrome.</p>`;
    }
    resultDiv.classList.remove('hide');
  }
});