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

let nhan = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number"){
                return reject(new Error("tham so truyen vao phai la 1 so"))
            }
            resolve(a*b);
        }, 2000);
    });
};

let chia = (a,b) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number"){
                return reject(new Error("tham so truyen vao phai la 1 so"))
            }
            if (b == 0) return reject(new Error("Chia cho 0"))
            resolve(a/b);
        }, 2000);
    });
}


// let tinhdientich = (a,b,h) => {
//     add(a,b)
//         .then(c => nhan(c,h))
//         .then(d => chia(d,2))                                                          cach 1
//         .then(e => console.log('Dien tich la: '+ e))
//         .catch(err => console.log('Loi: ' +err));
// }
//   tinhdientich("2",3,4)

// Cach 2
   let tinhdientich = (a,b,h) => {
      return add(a,b)
           .then(c => nhan(c,h))
           .then(d => chia(d,2))
   }

   tinhdientich(2,3,4)
       .then(e => console.log('dien tich la: ' + e))
       .catch(err => console.log(err + ''))
