document.addEventListener("DOMContentLoaded", () => {
    // input file 
    const inputFiles = document.querySelectorAll('[data-input-file]')
    _.each(inputFiles, item => {
        const input = item.querySelector('input[type="file"]')

        if (input) {
            input.addEventListener('change', () => {
                const inputValue = input.value
                
                const inputValueTag = item.querySelector('[data-input-file-value]')
                if (inputValueTag) {
                    inputValueTag.innerHTML = inputValue
                }
            })
        }
        console.log('input', input)
    });

     // validate form
    const validateForms = document.querySelectorAll('[data-validate-form]');
    _.each(validateForms, (form) => {
        const formBtns = form.querySelectorAll('button[type="submit"]');

        _.each(formBtns, (formBtn) => {
            formBtn.addEventListener('click', (event) => {
                event.preventDefault();
    
                const inputs = form.querySelectorAll('[data-validate-input="true"]');
    
                _.each(inputs, (input) => {
                    validateRequiredInput(input)
                });

                const inputsPhone = form.querySelectorAll('[data-validate-type="phone"]');
    
                _.each(inputsPhone, (input) => {
                    validatePhoneInput(input)
                });

                const inputsEmail = form.querySelectorAll('[data-validate-type="email"]');
    
                _.each(inputsEmail, (input) => {
                    validateEmailInput(input)
                });
    
                if (!isFormValid(form)) {
                    return;
                }

                Fancybox.show(
                    [{ src: "#js-modal-success", type: "inline" }],
                    {
                        closeExisting: true
                    }
                );
            })
        })
    })

    const inputs = document.querySelectorAll('[data-validate-input="true"]');
    _.each(inputs, (input) => {
        ['input', "focusout"].forEach((event) => {
            input.addEventListener(event, () => {
                validateRequiredInput(input)
            })
        });
    })

    const inputsPhone = document.querySelectorAll('[data-validate-type="phone"]');
    _.each(inputsPhone, (input) => {
        ['input', "focusout"].forEach((event) => {
            input.addEventListener(event, () => {
                validatePhoneInput(input)
            })
        });
    })

    const inputsEmail = document.querySelectorAll('[data-validate-type="email"]');
    _.each(inputsEmail, (input) => {
        ['input', "focusout"].forEach((event) => {
            input.addEventListener(event, () => {
                validateEmailInput(input)
            })
        });
    })
});

// is required
const isRequired = value => value === '' ? false : true;

// is phone regular
const isPhone = value => value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10}$/);

// is email regular
const isEmail = value => value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

const validateRequiredInput = (input) => {
    let errorBlock = input.closest('.form-row').querySelector('.error-block');
    
    if (!errorBlock) {
        errorBlock = document.createElement('div');
        errorBlock.classList.add('error-block');
        input.closest('.form-row').append(errorBlock);
    }
    errorBlock.style.display = 'none';

    if (!isRequired(input.value) && !input.closest(".d-none")) {
        showError(input, 'Заполните поле');
        return;
    }

    showSuccess(input);
}
const validatePhoneInput = (input) => {
    let errorBlock = input.closest('.form-row').querySelector('.error-block');
    
    if (!errorBlock) {
        errorBlock = document.createElement('div');
        errorBlock.classList.add('error-block');
        input.closest('.form-row').append(errorBlock);
    }
    errorBlock.style.display = 'none';

    if (!isPhone(input.value) && !input.closest(".d-none")) {
        showError(input, 'Введите корректный номер телефона');
        return;
    }

    showSuccess(input);
}
const validateEmailInput = (input) => {
    let errorBlock = input.closest('.form-row').querySelector('.error-block');
    
    if (!errorBlock) {
        errorBlock = document.createElement('div');
        errorBlock.classList.add('error-block');
        input.closest('.form-row').append(errorBlock);
    }
    errorBlock.style.display = 'none';

    if (!isEmail(input.value) && !input.closest(".d-none")) {
        showError(input, 'Введите корректный e-mail');
        return;
    }

    showSuccess(input);
}


const showError = (input, message) => {
    const formField = input.closest(".form-row");
    
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('.error-block');
    error.style.display = 'block';
    error.textContent = message;
};
const showSuccess = (input) => {
    const formField = input.closest(".form-row");

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('.error-block');
    error.style.display = 'none';
    error.textContent = '';
}

window.clearValidate = (form) => {
    const inputs = form.querySelectorAll('[data-validate-input="true"]');

    _.each(inputs, (input) => {
        const formField = input.closest(".form-row");
        const errorBlock = input.closest(".form-row").querySelector('.error-block');

        formField.classList.remove('error');
        formField.classList.remove('success');

        if (errorBlock) {
            errorBlock.style.display = 'none';
        }
    });
}

const isFormValid = (form) => {
    return form.querySelectorAll('.error').length === 0;
}