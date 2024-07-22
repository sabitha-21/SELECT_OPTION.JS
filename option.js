function checkAnswer(option) {
    const correctOption = 'D';
    
    if (option === correctOption) {
        document.getElementById('option' + option).classList.add('correct');
    } else {
        document.getElementById('option' + option).classList.add('wrong');
        
    }
    
    // Disable clicking on options after the answer is checked
    const options = document.getElementsByClassName('option');
    for (let i = 0; i < options.length; i++) {
        options[i].onclick = null;
    }
}
