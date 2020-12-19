import { LightningElement } from 'lwc';
import { helper} from './calculatorHelper';

export default class Calculator extends LightningElement {

    pantalla = '0';
    resultado = '';
    nuevo = false;
    primero = true;
    anterior;
    first;
    second;
    arr = [];

    handleClick(event){
        if(this.nuevo){
            this.pantalla = '0';
            this.nuevo = false;
            this.primero = true;
        }
        
        if(this.primero){
            this.pantalla = '';
            this.primero = false;
        }

        this.pantalla = this.pantalla + event.target.label;
        
        if(event.target.label ==="x")
            this.resultado = this.resultado + "*";
        else if(event.target.label ==="÷")   
            this.resultado = this.resultado + "/";
        else
            this.resultado = this.resultado + event.target.label;
    }
    
    calcularpantalla(event){
        let actual = this.pantalla;

        if(typeof actual === "string"){

            console.log(this.resultado);
            this.resultado = helper.returnResult(this.resultado);
            this.nuevo = true;
            this.pantalla = this.resultado;
            this.resultado = '';
            
        }
        else if( typeof actual === "number"){
            this.pantalla = 0;
        }
    }

}