const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value / 100; // Convertendo cm para metros

    const bmi = (weight / (height * height)).toFixed(2); // Cálculo do IMC

    const value = document.getElementById('value');
    let description = '';

    // Resetar classes antes de aplicar a nova
    value.classList.remove('normal', 'attention');
    
    document.getElementById('infos').classList.remove('hidden');

    if (bmi <= 18.5) {
        description = 'Tá magrelo, engorda aí raquítico!';
        value.classList.add('attention');
    } else if (bmi <= 25){
        description = 'Boa meu fi! tá pampa!';
        value.classList.add('normal');
    } else if (bmi <= 30){
        description = 'Cuidado! Tá ficando cheio de pamonha!';
        value.classList.add('attention');
    } else if (bmi <= 35){
        description = 'Tá um pouquinho obeso, te cuida cara de tabaco';
        value.classList.add('attention');
    } else if (bmi <= 40){
        description = 'Tá querendo morrer, com essa obesidade severa?';
        value.classList.add('attention');
    } else {
        description = 'Tá loko? Tá quase caindo duro de obesidade';
        value.classList.add('attention');
    }

    // Exibir o valor do IMC com vírgula no lugar do ponto
    value.textContent = bmi.replace('.',',');
    document.getElementById('description').textContent = description;
});
