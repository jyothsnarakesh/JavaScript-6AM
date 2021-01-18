//communication between "producer" and "consumer" called as promise.
//promises are special javascript objects.
//we will create the promises by using "Promise" class.
//consumer will consume the Promises by using "then()" function.
//Promises have following states.
//success     @resolve
//failure     @reject
//pending

/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve("tomarrow i will discuss async & await keyword");
    });

    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/

/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello");
        },5000);
    });
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });    //Hello
*/


/*
    let promise1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise1");
        },0);
    });

    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Error");
        },5000);
    });

    let promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise3");
        },10000);
    });
*/

/*
    promise1.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });

    promise2.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });

    promise3.then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/

/*
    Promise.all([promise1,promise2,promise3]).then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/


/*
Promise.allSettled([promise1,promise2,promise3]).then((posRes)=>{
    console.log(posRes);
},(errRes)=>{
    console.log(errRes);
});
*/


/*
    Promise.race([promise1,promise2,promise3]).then((posRes)=>{
        console.log(posRes);
    },(errRes)=>{
        console.log(errRes);
    });
*/











/*
    async and await
    ===============
        - we will consume promises in 2 ways.

                1) then()

                2) async & await

        - then() function usage creates the confussion because of callbacks.

        - recomended to use async & await keywords to consume promises.

        - async & await keywords introduved in ES6.
*/



/*
    let promise1 = new Promise((resolve,reject)=>{
        resolve("Hello, welcome to async & await keywords");
    });

    async function my_fun(){
        const res = await promise1;
        console.log( res );
    };
    my_fun();      //Hello, welcome to async & await keywords
*/


/*
    let promise1 = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve("Promise....!");
            },0);
    });

    let promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise....2");
        },5000);
    });

    let promise3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise....3");
        },10000);
    });

    async function my_fun(){
        const data1 = await promise1;
        const data2 = await promise2;
        const data3 = await promise3;
        console.log(data1, data2, data3);
    };

    my_fun();
*/




























































