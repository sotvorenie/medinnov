document.addEventListener("DOMContentLoaded", () => {
    // data-toggle-profile-edit
    const toggleProfileEdit = document.querySelectorAll('[data-toggle-profile-edit]');
    toggleProfileEdit.forEach(item => {
        item.addEventListener('click', () => {
            if (item.classList.contains('_active')) {
                disableProfileEdit();
            } else {
                enableProfileEdit();
            }
        });
    });

    const cancelProfileEdit = document.querySelectorAll('[data-cancel-profile-edit]');
    cancelProfileEdit.forEach(item => {
        item.addEventListener('click', () => {
            disableProfileEdit();
        });
    });

    function enableProfileEdit() {
        document.querySelectorAll('[data-toggle-profile-edit]').forEach(item => {
            item.classList.add('_active');
        });
        document.querySelectorAll('[data-toggle-profile-panel]').forEach(item => {
            item.classList.add('_active');
        });
        document.querySelectorAll('[data-profile-edit]').forEach(item => {
            item.querySelectorAll('input').forEach(input => {
                input.removeAttribute('disabled');
            })
        });
    }
    function disableProfileEdit() {
        document.querySelectorAll('[data-toggle-profile-edit]').forEach(item => {
            item.classList.remove('_active');
        });
        document.querySelectorAll('[data-toggle-profile-panel]').forEach(item => {
            item.classList.remove('_active');

            // find parent element form
            item.closest('form').reset();
        });
        document.querySelectorAll('[data-profile-edit]').forEach(item => {
            item.querySelectorAll('input').forEach(input => {
                input.setAttribute('disabled', 'true');
            })
        });
    }
});