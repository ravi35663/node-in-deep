// //add.test.js
// const {add} = require('./add.js');

function add(a,b){
    return a+b;
}

// Unit testing 
test('adds 1 + 2 to equal 3',()=>{
    expect(add(1,2)).toBe(3)
})

test('object assignment',()=>{
    const data = {one:1}
    data["two"] = 2;
    expect(data).toEqual({one:1,two:2});
})

//Using Matchers
// test('object assignment', () => {
//     const data = {one: 1};
//     data['two'] = 2;
//     expect(data).toEqual({one: 1, two: 2});
// });


/*
Testing Asynchronous Code
    ->  For example, let's say that fetchData returns a promise that is supposed to resolve to 
        the string 'peanut butter'. We could test it with:

*/
// test('the data is peanut butter', () => {
//     return fetchData().then(data => {
//       expect(data).toBe('peanut butter');
//     });
// });


/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
// Brute-force:
var minDays = function(bloomDay, m, k) {
    if(bloomDay.length < m * k) return -1;

    let max_days = bloomDay[0];
    for(let item of bloomDay){
        if(max_days < item){
            max_days = item;
        }
    }

    let total = Infinity;;
    let start = 1;
    let end = max_days;
    while(start<=end){
        const mid = Math.floor((start+end)/2);
        let temp = [...bloomDay];
        let count = 0;
        for(let i=0; i<bloomDay.length; i++){
            if(temp[i] <= mid){
                temp[i] = true;
            }else{
                temp[i] = false;
            }
        }
        // check adjecent
        // let count = 0;
        // for(let i=0; i<bloomDay.length;){
        //     const t = temp.slice(i,i+k);
        //     if(t.length < k){
        //         break;
        //     }
        //     let j=0;
        //     for(;j<t.length;j++){
        //         if(!t[j]){
        //             break;
        //         }
        //     }

        //     if(j == t.length){
        //         count++;
        //         i= i + j;
        //     }else{
        //         i++;
        //     }
        //     if(count >= m){
        //         break;
        //     }
        // }

        if(count >= m){
            if(total > mid){
                total = mid;
            }
            end = mid - 1;
        }else{
            start = mid + 1;
        } 
    }
    return total;
};