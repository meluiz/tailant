# tailant

## 1.1.0

### Minor Changes

- 2cfce44: refactor(index.ts): rename imported function `processVariantGroups` to `Processor.transformer` for better
  clarity and consistency

  refactor(transformer.ts): rename processVariantGroups function to Processor.transformer for better clarity and
  consistency feat(transformer.ts): update JSDoc comments for the transformer function to provide more accurate and
  descriptive information about its purpose and return value

  feat(processor.ts): add Processor class with a static transformer method to parse content and return parsed classes

  `The Processor class is added to the project with a static method called transformer. This method takes a string content as input and performs parsing using the VariantGroupsParser and ClassParser classes from the utils module. The parsed classes are then returned by the transformer method. This class will be used for processing content in the future.`

  feat(class.ts): add ClassParser class to parse and polish variant groups in class content feat(class.test.ts): add
  tests for ClassParser class to ensure correct parsing and polishing of variant groups

  chore(process-variant-groups.ts): remove unused file 'process-variant-groups.ts' to clean up the codebase
  feat(utils/parser/variant-groups.ts): add VariantGroupsParser class to handle parsing of variant groups in class names
  test(parser/variant-groups.test.ts): add tests for VariantGroupsParser class to ensure correct parsing of variant
  groups in class names

### Patch Changes

- 2cfce44: chore(tsconfig.json): add include property to include all TypeScript files in the project for type checking
  chore(eslintrc): add "@typescript-eslint/parser" as the parser to enable linting for TypeScript files

## 1.0.3

### Patch Changes

- 3b04f80: fix(process-variant-groups.ts): update variantGroupRegex to match variant groups with any characters inside
  the parentheses instead of only lowercase letters

## 1.0.2

### Patch Changes

- 4f1b15c: Update Readme

## 1.0.1

### Patch Changes

- 3f7aa11: Add README.md to package

## 1.0.0

### Major Changes

- 614c004: `css` Functionality working, `withTailant` function with transformer created.

## 0.1.0

### Minor Changes

- e5ab3e2: Add `css` function to work with conditional classes, tailwind variant groups and tailwind merge

## 0.0.1

### Patch Changes

- f503236: Add core for all functionality from tailant
