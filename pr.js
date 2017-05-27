/**
 * Created by quangprolathe on 05/27/2017.
 */
const fs = require('fs');
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

// add("4",5)
//.then(res => console.log(res),err => console.log(err+ ''));
// fs.readFile('./a.txt', 'utf8',(err,data) => {
//     if(err) return console.log('Loi: '+ err);
//     console.log(data)
// });

// let PromiseRead = new Promise((resolve,reject) => {
//     fs.readFile('./b.txt','utf8',(err,data) => {
//         if (err) return console.log('Loi: '+ err);
//         console.log(data)
//     });
//  });
//
//  PromiseRead.then(data => console.log(data),err => console.log(err+''));


 let read = (filename) => {
     return new Promise((resolve,reject) => {
         fs.readFile('filename','utf8',(err,data) => {
             if (err) return console.log('Loi: '+ err);
             console.log(data)
         });
     });
 };

 read('./a.txt').then(data =>console.log(data), err => console.log(err + ''));