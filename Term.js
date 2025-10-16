class Term {
    constructor(coef = 1, variable = null, power = 1) {
        this.coef = coef;
        this.variable = variable;
        this.power = power;
    }

    // Создание Term из строки
    static parse(termStr, variable) {
        let coef = 1;
        let power = 1;
        
        // Если просто переменная (x)
        if (termStr === variable) {
            return new Term(1, variable, 1);
        }
        // Если есть умножение (4*x или 4*x^3)
        else if (termStr.includes('*')) {
            let parts = termStr.split('*');
            // Разделим коэффициент и переменную [4],[x] или [4], [x^3]
            for (let j = 0; j < parts.length; j++) {
                if (parts[j] === variable) {
                    // Это переменная
                } else if (parts[j].includes('^')) {
                    // Это переменная со степенью (x^3)
                    let powerParts = parts[j].split('^');
                    power = Number(powerParts[1]);
                } else {
                    // Это коэффициент (4)
                    coef = Number(parts[j]);
                }
            }
            return new Term(coef, variable, power);
        }
        // Если есть степень без коэффициента (x^2)
        else if (termStr.includes('^')) {
            let powerParts = termStr.split('^');
            power = Number(powerParts[1]);
            return new Term(1, variable, power);
        }
        
        return new Term(1, variable, 1);
    }

    // Дифференцирование Term
    differentiate() {
        const newCoef = this.coef * this.power;
        const newPower = this.power - 1;
        
        return new Term(newCoef, this.variable, newPower);
    }

    // Преобразование Term в строку
    toString() {
        let result = '';
        
        // Коэффициент
        if (this.coef !== 1 || this.power === 0) {
            result += this.coef;
        }
        
        // Переменная и степень
        if (this.power > 0) {
            if (this.coef !== 1) result += '*';
            result += this.variable;
            if (this.power > 1) result += '^' + this.power;
        }
        
        return result;
    }
}

export { Term };