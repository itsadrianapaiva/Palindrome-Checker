# Palindrome Checker

## Overview

The **Palindrome Checker** is a simple web-based application that checks whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and case differences). This project includes functionality to handle both alphanumeric palindromes and user inputs that include special characters, spaces or mixed cases.

## Features

- **Alphanumeric Palindrome Check**: The app can detect palindromes even when the input contains spaces, punctuation, or special characters.
- **Case Insensitive**: The palindrome checker is not affected by case differences (e.g., "A" and "a" are treated as the same).
- **Interactive UI**: Users can input a string and get real-time feedback on whether their input is a palindrome.
- **Error Handling**: The app will notify users if the input is empty or invalid.

## Usage

1. Enter a word, sentence, or phrase into the input box.
2. Click on the "Check Palindrome" button.
3. The result will be displayed below, indicating whether the entered text is a palindrome or not.

### Example Inputs

- `A`: Yes, A is a palindrome.
- `race car`: Yes, race car is a palindrome.
- `A man, a plan, a canal. Panama`: Yes, A man, a plan, a canal. Panama is a palindrome.
- `not a palindrome`: No, not a palindrome is not a palindrome.

## Code Explanation

The core logic involves the isPalindrome() function that:

- Cleans the Input: Removes all non-alphanumeric characters and converts the input string to lowercase.
- Reverses the Cleaned Input: Reverses the sanitized string and compares it with the original sanitized string.
- Displays the Result: If the cleaned string matches its reversed version, it is considered a palindrome.
