import { Term } from './Term.js';

class miniMaple {
    // Основная функция дифференцирования
    diff(expression, variable) {
        expression = expression.replace(/\s/g, '');
        
        // Массивы для хранения выражений и их знаков
        let terms = [];
        let signs = [];
        
        let currentTerm = '';
        let currentSign = '+';
        
        // Разбиваем выражение
        for (let i = 0; i < expression.length; i++) {
            let char = expression[i];
            
            // Если нашли + или -, сохраняем предыдущее выражение
            if (char === '+' || char === '-') {
                if (currentTerm !== '') {
                    terms[terms.length] = currentTerm;
                    signs[signs.length] = currentSign;
                    currentTerm = '';
                }
                currentSign = char;
            } else {
                // Добавляем символ к текущему выражению
                currentTerm += char;
            }
        }
        
        // Добавляем последний моном
        if (currentTerm !== '') {
            terms[terms.length] = currentTerm;
            signs[signs.length] = currentSign;
        }
        
        let result = '';
        
        // Обрабатываем каждое выражение
        for (let i = 0; i < terms.length; i++) {
            let termStr = terms[i];
            let sign = signs[i];

            // Пропускаем выражения без нашей переменной
            if (!termStr.includes(variable)) continue;

            // Создаем Term и дифференцируем его
            const term = Term.parse(termStr, variable);
            const diffTerm = term.differentiate();
            
            const termResult = diffTerm.toString();
            if (termResult === '') continue;
            
            // Добавляем знак
            if (result === '') {
                if (sign === '-') {
                    result += '-' + termResult;
                } else {
                    result += termResult;
                }
            } else {
                result += sign + termResult;
            }
        }
            
        return result === '' ? '0' : result;
    }
}

// Функция для UI - расчет при клике на кнопку
function calculate() {
    let expr = document.getElementById('expr').value;
    let variable = document.getElementById('var').value;
    let maple = new MiniMaple();
    let result = maple.diff(expr, variable);
    document.getElementById('result').textContent = result;
}

export { miniMaple };