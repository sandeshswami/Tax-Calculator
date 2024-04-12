$(document).ready(function() {
    // Initialize tooltips
    
      // Function to display error message and tooltip
    function displayError(inputElement) {
        
        if(!isValidNumber(inputElement)){
        let errorIcon=inputElement.next('.input-group-append').find('.error-icon');
        errorIcon.show().attr('title', 'Please enter numbers only').tooltip('show');
        }
    }

    // Function to hide error message and tooltip
    function hideError(inputElement) {
       let errorIcon= inputElement.next('.input-group-append').find('.error-icon');
       errorIcon.tooltip('hide').hide();
    }

    // Function to check if input is a valid number
    function isValidNumber(value) {
        return /^\d+(\.\d+)?$/.test(value); // Matches positive numbers or decimal numbers
    }

     // Event listener for input fields to validate on input
     $('.form-control').on('input', function() {
        let inputValue = $(this).val().trim();
        let isValid = isValidNumber(inputValue);

        if (!isValid) {
            showError($(this));
        } else {
            hideError($(this));
        }
    });
    // Event listener for hovering over error icon to display tooltip message
    $('.error-icon').hover(function() {
        $(this).attr('title', 'Please enter numbers only').tooltip('show');
    }, function() {
        $(this).tooltip('hide');
    });

    // Form submission
    $('#taxForm').submit(function(e) {
        e.preventDefault();

        // Validate input fields
        let isValid = true;

        // Check each input field for valid input
        $('#income,#extraIncome,#deductions').each(function() {
            let inputValue = $(this).val().trim();
            if (!isValidNumber(inputValue)) {
                displayError($(this));
                isValid = false;
            } else {
                hideError($(this));
            }
        });

        if (!isValid) {
            return;
        }

        // Calculate tax
        const income = parseFloat($('#income').val()) || 0;
        const extraIncome = parseFloat($('#extraIncome').val()) || 0;
        const deductions = parseFloat($('#deductions').val()) || 0;
        const totalIncome = income + extraIncome - deductions;
        let taxAmount = 0;

        if (totalIncome > 800000) {
            const ageGroup = $('#age').val();
            if (ageGroup === '<40') {
                taxAmount = 0.3 * (totalIncome - 800000);
            } else if (ageGroup === '40-59') {
                taxAmount = 0.4 * (totalIncome - 800000);
            } else if (ageGroup === '60+') {
                taxAmount = 0.1 * (totalIncome - 800000);
            }
        }

        // Display tax calculation result
        $('#taxAmount').text(`Your overall income will be ${taxAmount.toFixed(2)} after  tax deductions`);

        // Show modal
        $('#resultModal').modal('show');
    });
});