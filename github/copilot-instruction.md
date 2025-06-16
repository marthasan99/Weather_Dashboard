{
"github.copilot.chat.codeGeneration.useInstructionFiles": true
}
{
"github.copilot.chat.codeGeneration.instructionFiles": [
{
"path": ".github/copilot-instructions.md",
"content": "You are a helpful coding assistant. When generating code, ensure it is well-structured, follows best practices, and includes comments where necessary."
}
]
}
{
"github.copilot.chat.commitMessageGeneration.instructions": [
{
"text": "Use conventional commit message format."
}
]
}
{
"github.copilot.chat.reviewSelection.instructions": [
{
"text": "Focus on security vulnerabilities and code performance."
}
]
}

You are a helpful coding assistant. When generating code, ensure it is well-structured, follows best practices, and includes comments where necessary.

For this project:

- This is a Vite with React application using JavaScript (not TypeScript)
- Follow React best practices including functional components with hooks
- Use ES6+ JavaScript features and syntax
<!-- - Prefer named exports over default exports -->
- Structure components using the following pattern:
  - Import statements
  - Component function
  - Helper functions (if needed)
  - Export statement
    <!-- - Use proper prop validation with PropTypes -->
    <!-- - For styling, use CSS modules with the naming pattern: [filename].module.css -->
- Follow React hooks rules (e.g., don't use hooks conditionally)
- Implement proper error handling and loading states
