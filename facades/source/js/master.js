initializeName();
initializePhoneMask();
initializeEmailMask();

// function to make captial first letter of each word
function initializeName() {
    const nameSelector = '.name-input';
    const nameInputs = document.querySelectorAll(nameSelector);
    
    // Add event listener to each input field
    nameInputs.forEach(inputField => {
        inputField.addEventListener('input', () => {
            let value = inputField.value;
            // Capitalize the first letter of each word
            inputField.value = value.replace(/\b\w/g, char => char.toUpperCase());
        });
    });
}

// function to format phone input
function initializePhoneMask() {
    const phoneMaskSelector = '.js-phone-input';
    const phoneMaskInputs = document.querySelectorAll(phoneMaskSelector);

    const masksOptions = {
        phone: {
            mask: '+{977} 0000000000'
        }
    };

    for (const item of phoneMaskInputs) {
        const mask = new IMask(item, masksOptions.phone);

        // Add '+977 ' on focus if the input is empty
        item.addEventListener('focus', () => {
            if (!item.value) {
                item.value = '+977 ';
                mask.updateValue();
            }
        });

        // Ensure the input always starts with '+977 '
        item.addEventListener('input', () => {
            if (!item.value.startsWith('+977')) {
                item.value = '+977 ';
                mask.updateValue();
            }
        });

        // Clear the field except for '+977 ' on blur if no additional input is provided
        item.addEventListener('blur', () => {
            if (item.value === '+977 ') {
                item.value = '';
                mask.updateValue();
            }
        });
    }
}

// function to format email input
function initializeEmailMask() {
    const emailMaskSelector = '.js-email-input';
    const emailMaskInputs = document.querySelectorAll(emailMaskSelector);

    const defaultDomain = '@gmail.com';

    for (const item of emailMaskInputs) {
        // Add '@gmail.com' on focus if the input is empty
        item.addEventListener('focus', () => {
            if (!item.value) {
                item.value = '';
            }
        });

        // Append '@gmail.com' when the user types '@'
        item.addEventListener('input', () => {
            const atIndex = item.value.indexOf('@');
            if (atIndex !== -1 && !item.value.includes(defaultDomain)) {
                // Append the default domain
                item.value = item.value.slice(0, atIndex + 1) + defaultDomain.slice(1);
                setCursorPosition(item, atIndex + 1); // Place cursor just after '@'
            }

            // Prevent edits after the domain
            const domainIndex = item.value.indexOf(defaultDomain.slice(1));
            if (domainIndex !== -1 && item.selectionStart > domainIndex) {
                setCursorPosition(item, domainIndex);
            }
        });

        // Clear the field if it matches only '@gmail.com' on blur
        item.addEventListener('blur', () => {
            if (item.value === defaultDomain || item.value === '@') {
                item.value = '';
            }
        });
    }
}


