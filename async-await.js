/**
 * Created by quangprolathe on 05/28/2017.
 */
let newadd = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number"){
                return reject(new Error("tham so truyen vao phai la 1 so"))
            }
            resolve(a+b);
        }, 2000);
    });
}

let add = async () => {
    let res = await newadd(2,3);
    console.log(res);
}

add();