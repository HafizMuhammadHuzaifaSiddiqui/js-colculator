let id = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");
let expression = "";

Array.from(buttons).forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === '=') {
            try {
                expression = eval(expression);
                id.value = expression;
            } catch (error) {
                id.value = "Error";
                expression = "";
            }
        } else if (e.target.innerHTML === 'AC') {
            expression = "";
            id.value = expression;
        } else if (e.target.innerHTML === 'DEL') {
            expression = expression.slice(0, -1);
            id.value = expression;
        } else {
            expression += e.target.innerHTML;
            id.value = expression;
        }
    });
});

// The problem was that the expression variable was not being updated when the user clicked the '=' button. This was because the expression variable was being used as the argument for the eval() function, which returns a value, but does not modify the original variable. To fix this, I added the line "expression = eval(expression);" to the if statement that handles the '=' button. This updates the expression variable with the result of the evaluation.
