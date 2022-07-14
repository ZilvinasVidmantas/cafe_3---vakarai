# React project conventions

## Project structure
  * src/
    * components/ - components used in more than one page
    * pages/ - website pages

## File naming
  * kebab-case for all files
  * React files must have *.jsx extension
  * Helper filjes must have *.js extensions

## Styling
  * common components are placed in ./src/components folder
  * if component is used only in single page, then it must be saved in that page folder 'components/'
  * if component uses more than 4 CSS props, it should be segregated into component 

## file importing
  use in al jsx files:
```
  import * as React from 'react';
```
### order
  * global files
  * components
  * helpers
  * assets