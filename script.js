const inputs = document.querySelectorAll('.code');

inputs.forEach((input, index) => {
    input.addEventListener('input', () => {
        const value = input.value;
        if (!isNaN(value) && value !== '') {
            input.value = value; // Ensure only one character
            if (index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        }
    });

    input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace') {
            if (input.value === '' && index > 0) {
                inputs[index - 1].focus();
                inputs[index - 1].value = ''; // Clear previous input
            }
        }
    });

    input.addEventListener('paste', (e) => {
        const pasteData = e.clipboardData.getData('text').replace(/\D/g, '');
        const chars = pasteData.slice(0, inputs.length).split('');
        chars.forEach((char, i) => {
            if (inputs[i]) {
                inputs[i].value = char;
            }
        });
        if (chars.length >= inputs.length) {
            inputs[inputs.length - 1].focus();
        }
    });
});
