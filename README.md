# Tax-Calculator
A website that allows for tax calculation based on a users input.


![Capture](https://github.com/sandeshswami/Tax-Calculator/assets/126974679/c27c952f-e79d-4678-acf4-fde06c361eda)
![Capture2](https://github.com/sandeshswami/Tax-Calculator/assets/126974679/1ceb29b2-f805-4247-802a-905cf8b58f5b)
![Capture3](https://github.com/sandeshswami/Tax-Calculator/assets/126974679/3419aafd-c99c-420e-bfc5-913acc61278d)
![Capture4](https://github.com/sandeshswami/Tax-Calculator/assets/126974679/7c83634a-c10b-4402-973a-528425dc62ca)
![Capture5](https://github.com/sandeshswami/Tax-Calculator/assets/126974679/2103cc0f-e4f2-474a-8e56-2eb160af0ba2)

### References & Requirements

- The tax calculation works based on this formula -
    - Overall income (after deductions) under 8 (≤) Lakhs is not taxed.
        - Ex - if Gross Annual Income + Extra Income - Deductions =  6 Lakhs, no tax
        - if Gross Annual Income + Extra Income - Deductions =  9 Lakhs, tax
    - Income over 8 (>) Lakhs, the amount over 8 Lakhs is taxed at
        - 30% for people with age < 40
        - 40% for people with age ≥ 40 but < 60
        - 10% for people with age ≥ 60
        - Example
            - Age = 34, Income = 40 Lakhs, no deductions, tax = .3 * (40 - 8) = .3 * 32 = 9.6 Lakhs
- Do not restrict user from entering incorrect values like characters in the number fields
    - Highlight a error icon to the right of the input field (shown as an example in above image as a circle with `!`). Hovering over it should show the error in a tooltip
    - If no errors are present, dont show the error icon
    - This should be present in all the number fields
- The age dropdown field should have 3 values -
    - <40
    - ≥ 40 & < 60
    - ≥ 60
    - If user has not entered this value and clicks on submit, show a error icon hovering over which should show that input field is mandatory
- Error icons should not be visible in the form by default.
- Clicking on submit should show a modal which would show the final values based on above calculations.
