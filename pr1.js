/**
 * Created by quangprolathe on 05/27/2017.
 */

let add = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number"){
                return reject(new Error("tham so truyen vao phai la 1 so"))
            }
            resolve(a+b);
        }, 2000);
    });
};
// add(2,3)
//  .then(res => add(res,4) , err => console.log(err+''))
//  .then(result => console.log(result), err => console.log(err+''));
 add(2,3)
  .then(res => add(res,4))
  .then(result => console.log(result))
  .catch(err => console.log('Loi: '+ err))