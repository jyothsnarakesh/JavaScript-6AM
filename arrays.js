//Array
//collection of indexed elements called as Array.
//[]

//ES6
//map()
//to manipulate all array elements we will use map()


/*
    console.log(
        [1,2,3,4,5].map((element,index)=>{
            return element*100
        })
    );              //[ 100, 200, 300, 400, 500 ]



    console.log(
        [100,200,300,400,500].map((element,index)=>{
            return "₹ "+element;
        })
    );    //[ '₹ 100', '₹ 200', '₹ 300', '₹ 400', '₹ 500' ]
*/


/*
    filter()

    used to create the new array based on condition

console.log(
    [100,50,90,10,80,20,70,30].filter((element,index)=>{
        return element<=50;
    })
);   //[ 50, 10, 20, 30 ]


console.log(
    [10,20,30,40,50].map((element,index)=>{
        return element*10;
    }).filter((element,index)=>{
        return element<=500;
    })
);      //[ 100, 200, 300, 400, 500 ]

*/


/*
    reduce()
    it is used to find the sum of array elements

console.log(
    [1,2,3,4,5].reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
);     //15


console.log(
    [1,2,3,4,5].map((element,index)=>{
        return element;
    }).filter((element,index)=>{
        return element<=5;
    }).reduce((firstElement,nextElement)=>{
        return firstElement+nextElement;
    })
);    //15
*/


/*
    reduceRight()
        - used to perform the summation from right to left

console.log(
    ["ReactJS","To","Welcome"].reduceRight((firstElement,nextElement)=>{
        return firstElement+" "+nextElement;
    })
);      //Welcome To ReactJS
*/

/*
    //concat()  <ES6
    //...      ES6
    let arr1 = ["ReactJS"];
    let arr2 = ["NodeJS"];
    let arr3 = ["MongoDB"];
    let arr4 = arr1.concat(arr2,arr3);
    console.log(arr4);    //[ 'ReactJS', 'NodeJS', 'MongoDB' ]
    //ES6
    //...
    let arr5 = [...arr1,...arr2,...arr3];
    console.log(arr5);      //[ 'ReactJS', 'NodeJS', 'MongoDB' ]
*/


/*
    //find()
    //used to perform the search operation
    console.log(
        [1,2,3,4,5].find((element,index)=>{
            return element === 50;
        })
    );    //5      //undefined
*/



/*
    //some()
    //if atleast one element satisfies the condition then it will return true otherwise false
    console.log(
        [1,2,3,4,5].some((element,index)=>{
            return element<=1;
        })
    ); //true
*/

/*
    //every()
    //if all elements satisfies the condition, then it will return true otherwise false
    console.log(
        [10,20,30,40,50].every((element,index)=>{
            return element<=50;
        })
    );   //true
*/


/*
    //push()
    //pop()
    //unshift()
    //shift()
    let arr = [20,30,40];
    console.log(arr);               //[ 20, 30, 40 ]
    arr.push(50);
    console.log(arr);               //[ 20, 30, 40, 50 ]
    arr.unshift(10);
    console.log(arr);               //[ 10, 20, 30, 40, 50 ]
    arr.pop();
    console.log(arr);               //[ 10, 20, 30, 40 ]
    arr.shift();
    console.log(arr);               //[ 20, 30, 40 ]
*/


/*
    splice()
        - used to remove/add elements at any index of array

        - mutable
*/
let arr = [10,20,30,40,50,60,70,80,90,100];
console.log( arr );     //[10, 20, 30, 40,  50, 60, 70, 80, 90, 100]

arr.splice(4,2);
console.log(arr);       //[10, 20, 30, 40,  70, 80, 90, 100]

arr.splice(3,1);
console.log(arr);       //[10, 20, 30, 70, 80, 90, 100]

arr.splice(4,2);
console.log(arr);       //[ 10, 20, 30, 70, 100 ]

arr.splice(0,1);
console.log(arr);           //[ 20, 30, 70, 100 ]

arr.splice(3,1);
console.log(arr);           //[ 20, 30, 70 ]


arr.splice(1,1,30,40,50,60);
console.log(arr);           //[ 20, 30, 40, 50, 60, 70 ]

arr.splice(0,0,10);
console.log(arr);           //[ 10, 20, 30, 40, 50, 60, 70 ]

arr.splice(6,0,80,90,100);
console.log(arr);           //[10, 20, 30, 40,  50, 60, 70, 80, 90, 100]





















































































































































































