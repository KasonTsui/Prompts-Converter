const PROMPTS_DATA = [
    {
        "name": "Create Component According to Component",
        "description": "Create a new component based on an existing one, preserving style and logic.",
        "template": "The <New Component Name> is a newly added component.\n\nCan you, according to the writing control logic and style of <Existing Component Name> component, finish <New Component Name> and the SCSS of <New Component Name>:\n\nSearch bar search fields: <Search Fields>\nTable fields: <Table Fields>\n\nKeep the same style and writing style according to <Existing Component Name>."
    },
    {
        "name": "Unit Test Generation",
        "description": "Generate unit tests for a specific class or function.",
        "template": "Please write unit tests for the <Class/Function Name> in <File Path>.\nEnsure to cover edge cases such as <Edge Cases>.\nUse <Testing Framework> syntax."
    }
];