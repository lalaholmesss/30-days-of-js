class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value;  // \value is \value
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.value += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.value = this.value - value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.value *= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value === 0) throw new Error("Division by zero is not allowed");
        else { this.value = this.value / value; return this;}
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.value = Math.pow(this.value, value); // this.value is the value obtained from prev method
        return this; // returns the Calculator class itself
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.value; // returns only the value
    }
}