# Prompt Converter Tool

A simple, single-page tool to manage and use parameterized prompts.

## How to use

1.  **Add Prompts**: Edit `prompts.js` to add your own prompts.
    *   Keep the format `const PROMPTS_DATA = [ ... ];`.
    *   Use `<Variable Name>` syntax for placeholders in your prompt template.
    *   Example: `Hello <Name>, welcome to <Place>!`
2.  **Run the Tool**:
    *   **GitHub Pages**: Upload these files to a GitHub repository and enable GitHub Pages.
    *   **Local Use**: You can now simply double-click `index.html` to open it in your browser.
3.  **Generate**:
    *   Click a row in the table.
    *   Fill in the values for the variables.
    *   Click "Convert" to see the result.
    *   Click "Copy" to copy to clipboard.

## File Structure

*   `index.html`: The main application (UI and Logic).
*   `prompts.js`: The database of your prompts (as a JavaScript file).
