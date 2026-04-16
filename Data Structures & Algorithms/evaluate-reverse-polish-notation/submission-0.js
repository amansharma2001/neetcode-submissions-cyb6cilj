class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        
    //Brute Force
    // T.C:- O(n^2), S.C:- O(n)
    // while(tokens.length>1)
    // {
    //     for(let i=0;i<tokens.length;i++)
    //     {
    //         if('+-*/'.includes(tokens[i]))
    //         {
    //             let a = parseInt(tokens[i-2]);
    //             let b = parseInt(tokens[i-1]);
                
    //             let result;
    //             if(tokens[i]=='+') result=a+b;
    //             else if(tokens[i]=='-') result=a-b;
    //             else if(tokens[i]=='*') result=a*b;
    //             else if(tokens[i]=='/') Math.trunc(result=a/b);

    //             tokens.splice(i-2,3,result.toString());;
    //             break;
    //         }
    //     }
    // }
    // return parseInt(tokens[0]);


    //Optimal
    // T.C:- O(n), S.C:- O(n)
    let stk1=[];
    for(let ch of tokens){
        if(ch === '+')
        {
            stk1.push(stk1.pop()+stk1.pop());
        }
        else if(ch === '-'){
            const a = stk1.pop();
            const b = stk1.pop();
            stk1.push(b-a);
        }
        else if(ch==='*'){

            stk1.push(stk1.pop()*stk1.pop());
        }
        else if(ch==='/'){
            const a = stk1.pop();
            const b = stk1.pop();
            stk1.push(Math.trunc(b/a));
        }else stk1.push(parseInt(ch));
    }      
    return stk1.pop()
    }
}
