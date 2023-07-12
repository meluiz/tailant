---
'tailant': minor
---

refactor(index.ts): rename imported function `processVariantGroups` to `Processor.transformer` for better clarity and
consistency

refactor(transformer.ts): rename processVariantGroups function to Processor.transformer for better clarity and
consistency feat(transformer.ts): update JSDoc comments for the transformer function to provide more accurate and
descriptive information about its purpose and return value

feat(processor.ts): add Processor class with a static transformer method to parse content and return parsed classes

`The Processor class is added to the project with a static method called transformer. This method takes a string content as input and performs parsing using the VariantGroupsParser and ClassParser classes from the utils module. The parsed classes are then returned by the transformer method. This class will be used for processing content in the future.`

feat(class.ts): add ClassParser class to parse and polish variant groups in class content feat(class.test.ts): add tests
for ClassParser class to ensure correct parsing and polishing of variant groups

chore(process-variant-groups.ts): remove unused file 'process-variant-groups.ts' to clean up the codebase
feat(utils/parser/variant-groups.ts): add VariantGroupsParser class to handle parsing of variant groups in class names
test(parser/variant-groups.test.ts): add tests for VariantGroupsParser class to ensure correct parsing of variant groups
in class names
