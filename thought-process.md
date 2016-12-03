# Thought process

The first thing I did was read the instructions and try and understand the task. Based on what I read I could choose my own stack so I choose to use React.js as what I would consider the core of this application. Although this is my first time writing React in any sort of application I felt that it would give the best user experience which is very important to me. It has also allowed me to write clean and maintainable code. I probably would have been more comfortable writing the application in jQuery but I knew that Reacts virtual DOM and state management would offer a better solution. I choose webpack for my dependencies because it is what I am most familiar with. I have also used Bootstrap 4 because I have experience with it and it was going to assist me in styling the layout a lot quicker.

The next thing I thought about is how to break the work down into smaller pieces. I did that as follows

1. set up basic app and make sure it runs
2. create basic react components Hcard and HcardForm
3. validate Hcard against https://search.google.com/structured-data/testing-tool
4. create basic sass partials and style
5. add functionality to preview text input
6. add image management in webpack
7. add image functionality for preview
8. validate compiled markup and make fixes
9. test accessibility
10. cross browser testing
11. implement any SEO fixes improvements
12. refactor sass
13. refactor js

things I would have liked to have been able to do;

1. form validation and error handling
2. testing

## How I went

Most of how i went can be found in the included git log. A few things I should mention though I got stuck trying to pass props between Hcardform and Hcard until a more senior dev pointed out the I needed a container element.
