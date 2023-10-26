const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');

    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Tá magrelo, engorda aí raquítico!';
    } else if (bmi < 18.5 && bmi <= 25){
        description = 'Boa meu fi! tá pampa!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } else if (bmi < 25 && bmi <= 30){
        description = 'Cuidado! Tá ficando cheio de pamonha!';
    } else if (bmi < 30 && bmi <= 35){
        description = 'Tá um pouquinho obeso, te cuida cara de tabaco';
    } else if (bmi < 35 && bmi <= 40){
        description = 'Tá querendo morrer, com essa obesidade severa?';
    } else {
        description = 'Tá loko? Tá quase caindo duro de obesidade';
    }

    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;
});