// appHelper.js
export const helper = {
    returnResult(cadena) {
        let operadores = [];
        let operando = '0';

        for (var i = 0; i < cadena.length; i++) {
            var caracter = cadena.charAt(i);

            if (caracter === '+' || caracter === '-' || caracter === '*' || caracter === '/') {
                operadores.push(operando);
                operadores.push(caracter);
                operando = '';
            }
            else if (i === cadena.length - 1) {
                operando = operando + caracter;
                operadores.push(operando);
            }
            else {
                operando = operando + caracter;
            }
        }

        let tam = operadores.length;
        let resultado = 0;

        for(let i=0; i<tam; i++){
            if(operadores[i] =='/' || operadores[i]=='*'){
                if(operadores[i]=='*'){
                    resultado = parseFloat(operadores[i-1]) * parseFloat(operadores[i+1]); 
                }
                if(operadores[i]=='/'){
                    resultado = parseFloat(operadores[i-1]) / parseFloat(operadores[i+1]); 
                }
                operadores.splice(i-1, 3, resultado);
            }
        }

        
        for(let i=0; i<tam; i++){
            if(operadores[i] =='+' || operadores[i]=='-'){
                if(operadores[i]=='+'){
                    resultado = parseFloat(operadores[i-1]) + parseFloat(operadores[i+1]); 
                }
                if(operadores[i]=='-'){
                    resultado = parseFloat(operadores[i-1]) - parseFloat(operadores[i+1]); 
                }
                operadores.splice(i-1, 3, resultado);
            }
        }

        return parseFloat(operadores[0]);
    }

}