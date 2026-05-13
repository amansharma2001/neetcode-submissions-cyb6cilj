class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
            // T.C:- O(n^2logn)
    // S.C:- O(1)
    // while(stones.length > 1) {
    //     stones.sort((a, b) => a - b);
    //     let x = stones.pop();
    //     let y = stones.pop();
        
    //     if(x === y) continue;
    //     else stones.push(Math.abs(x - y));
    // }
    
    // return stones;
    // T.C:- O(nlogn)
    // T.C:- O(1)
    const maxPQ = new MaxPriorityQueue();

        for (const stone of stones) {
            maxPQ.enqueue(stone);
        }

        while (maxPQ.size() > 1) {
            const stone1 = maxPQ.dequeue();
            const stone2 = maxPQ.dequeue();

            if (stone1 !== stone2) {
                maxPQ.enqueue(stone1 - stone2);
            }
        }

        return maxPQ.size() === 1 ? maxPQ.dequeue() : 0;
    }    
}
