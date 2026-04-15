class MinStack {
    constructor() {
        this.arr = [];
        this.mini = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
            this.arr.push(val);
    if(val>this.mini[this.mini.length -1]) this.mini.push(this.mini[this.mini.length -1]);
    else this.mini.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
            this.arr.pop();
    this.mini.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.arr[this.arr.length-1];
    }

    /**
     * @return {number}
     */
    getMin() {
            // Brute Force
    // T.C:- O(n)
    // return Math.min(...this.arr); 

    // Optimal 
    // T.C:- O(1)
    return this.mini[this.mini.length - 1];
    }
}
