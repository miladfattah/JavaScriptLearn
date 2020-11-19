"use strict"
// try {
//     // if(true){
//     //     throw {
//     //         name : "One Error",
//     //         message : "this is a  err"
//     //     }
//     // }
//       varing();
// } catch (err) {
//     console.log(err.message);
// }finally {
//     console.log("the end")
// }

// var i = 0;
// var list =[];
// setInterval(function(){
//     list.push(i);
//     i++;
//     console.log(list);
// },1000)



// // "useing string"

// let fullname = "milad fattah";
// fullname.split(" ");  // pushing to a array 
// fullname.replace("milad" , "ava")  // change str milad  with  str ava
// fullname.trim()  //Deleting  all  space in the str 


// //=======


// var str = "milad fattah";
// str.replace("milad", "ava");
// str.charAt("f");
// str.concat(" from in iran / ardabill");
// str.indexOf();

// setTimeout(function(){
//     // alert()
// },2000)

// setInterval(function(){
//     //alert()
// },2000);

// ;

// // ===   console.log(d); // outpot date this day

// d.getMilliseconds();


// function randomingNumber(number) {
//     return Math.floor(Math.random() * Math.floor(number+ 1));
// }

// var list = [];
// var i = 0;
// while(i <  5){
//     list.push(randomingNumber(11));
//     i++
// }


// console.log(list)
// document.getElementById("list-two").style.color = "red";
// document.querySelectorAll(".list-one .list-item")[0].style.color  = "blue";
// document.getElementsByClassName("list-item")[1].style.color ="red";
// document.getElementsByTagName("li")[2].style.color = "green";

// let form = document.createElement("form");
// form.setAttribute("action","post");
// form.setAttribute("target" ,"html2.php");

// let input1 = document.createElement("input");
// input1.setAttribute("type" , "text");
// input1.setAttribute("placeholder" , "username");
 
// let br = document.createElement("br");

// let br2 = document.createElement("br");

// let input2 = document.createElement("input");
// input2.setAttribute("type" , "password");
// input2.setAttribute("placeholder" , "password");

// let accept = document.createElement("input");
// accept.setAttribute("type" , "submit");
// accept.setAttribute("value", "accept");

// form.appendChild(input1);
// form.appendChild(br);
// form.appendChild(input2);
// form.appendChild(br2);
// form.appendChild(accept);


// document.querySelector(".heading").after(form);


// var  Emouse = document.querySelector(".heading");

// Emouse.onmouseenter = function(e){
//     e.target.style.border  = "1px solid red";
//     this.style.cursor = "pointer";
// }
// Emouse.onmouseleave = function(e){
//     e.target.style.border = "none";

// }

// var parent = document.querySelector(".parent");
// parent.addEventListener("click" , function(e){
//     console.log("clickParent");
// })



// var child = document.querySelector(".child");
// let childfunc =  function(e) {
//     console.log("click_child");
//     e.stopPropagation();
// };
// child.addEventListener("click" , childfunc);

// setTimeout(function(){
//     removeEventListener("click",childfunc)
// }, 1000)

// let Form = document.querySelector(".Form");
// Form.addEventListener("submit" , function(e){
//     e.preventDefault()
//    var iN_one = document.querySelector(".firstN").value;
//    var iN_two = document.querySelector(".lastN").value;

//     var table = document.querySelector(".table");
//     var tr1 = document.createElement("tr");
//     var td_f = document.createElement("td");
//     var td_l = document.createElement("td");

//     td_f.textContent = iN_one;
//     td_l.textContent= iN_two;

//     tr1.appendChild(td_f);
//     tr1.appendChild(td_l);

//     table.append(tr1);
//     console.log( document.querySelectorAll("td").textContent)
// })

// let submit = document.querySelector(".submit");
// submit.style.backgroundColor = "#a3a8a3";
// submit.addEventListener("mouseenter" , function(){
//     this.style.backgroundColor = "green";
//     this.style.cursor = "pointer";
// });
// submit.addEventListener("mouseleave" , function(){
//     this.style.backgroundColor = "#a3a8a3";
// });


// var ajax = new XMLHttpRequest();

// ajax.open("GET" , "https://jsonplaceholder.typicode.com/posts");
// ajax.onreadystatechange = function() {
//     if(this.readyState == 4){
//         if(this.status == 200){
//                 console.log("success", this.status);
//         }else {
//                 console.log("erorr" , this.status)
//         }
//     }
// }
// ajax.send()



// var ajax = new XMLHttpRequest();


// ajax.open("GET" , "https://jsonplaceholder.typicode.com/posts");
// ajax.onreadystatechange = function(){
//     if(ajax.readyState == 4){
//         if(ajax.status == 200){
//             console.log("successs : ", this.status  , this.response["body"])
//         }else {
//             console.log("error", this.status , this.response)
//         }
//     }
// }
// ajax.send();

// JSON.stringify(data)   send data
// // JSON.parse(this.response)  received data


// let data = {
//     name :"Sara",
//     user : "SWRW"
// }
// let ajax= new XMLHttpRequest();

// ajax.open('POST' , 'https://jsonplaceholder.typicode.com/users');
// ajax.setRequestHeader('Content-type' ,  'application/json; charset=UTF-8');

// ajax.addEventListener('load', function(){
//     if(this.readyState == 4){
//         if(this.status == 201){
//             console.log("success");
//             let de = JSON.parse(this.response);
//             console.log(de);
//         }else {
//             console.log('err : ' , this.status);
//         }
//     }
// });

// ajax.send(JSON.stringify(data));
// ========================


// function aa(name ,username , id){
//     this.name = name;
//     this.username = username; 
//     this.id = id;
// }


// let user1 = new aa("milad" , "alpha" , 8);

// let user2  = Object.create(user1);
// user2.name = "sara";
// Object.prototype.GODobject = function() {
//     return 'I GOD OBJECT';
// }

// Array.prototype.GODArray = function () {
//     return "I GOD ARRAY"
// }
// let user = {
//     username : "milad fattah",
//     id : 1001414,
// }

// function Car(name, model , yearmake){
//     this.name = name ;
//     this.model = model;
//     this.yearmake = yearmake;
//     this.details = function(){
//         return this.name +"/"+ this.model +"/"+ this.yearmake +"/"+ this.details;
//     }
// }
// Car.prototype.FU = function(){
//     return "i'm  a prototype "
// }
// Car.prototype.detai = function () {
//     return "golobal prototype of car"
// }
// Car.prototype.signal = function (){
//     return "i am is a signal of prototype CAR";
// }
// let car1 = new Car("207" , "iranKhodroo" , 1398);
// let car2 = new Car("PEJO" , "iranKhodro" , 1397);
// let car3 = Object.create(car2);
// car3.name = "111";
// car3.model = "saipa";
// let car5 = Object.create(car3)
// car5.name = "peraid";
// car5.slector ="iam";


// let car6 = Object.create(car5);
// car6.name = "121";
// car6.buy = 2222;

// let click =document.querySelector(".submit");

// click.addEventListener("contextMenu" , function(e){
//     e.preventDefault();
//     console.log("ok");
// })
// let i = 0;
// let list = [];
// function adding(){
//     list.push(i);
//     i++;
//     console.log(list);
// }

// setInterval(adding , 1000);


// let cl = document.querySelector("#cl_1");
// cl.addEventListener("click" , function(){
//     clearInterval(adding);
// })

// ES6 =--------------------------------=============================================================


// const LIST= [2,3,5,6];

// LIST = [2132,3123,213]

// let sum = (a,b) => a + b;

// let sum = (a,b) => {
//     return {a : a , b : b};
// }

// let sum = (a,b) => ({a: a , b: b});

// let sum = (a,b) => (a + b);
// let arr = [1,2,3,4];

// // let sum = arr.map((item)=> item -1 );

// console.log(sum);


// function S(){
//     this.name = "sara";
//     this.age = 20;
//     let that = this;
//     this.full =  ()=>{
//         console.log(that.name+"/"+that.age); 
//     }
// }


// function Person(){
//     this.age = 0; 
//     setInterval(()=>{
//         this.age +=2;
//         console.log(this.age);
//     },500)
// }


// let person1= new Person();


// let obj = {
//     a : 10, 
//     b : function(){
//         return this.a;  //========== at right ==============
//     },
//     c: ()=>{
//         return this.a;  //============worong ============
//     }
// }


// console.log(obj.b());
// console.log(obj.c());

// let OBJ = {
//     a : 10, 
//     b: function(){
//        return this.a
//     },
//     c : ()=> this.a,
//     d(){
//         return this.a
//     },
//     g: "milad"
// }


// console.log(OBJ.b())
// console.log(OBJ.c())
// console.log(OBJ.d())


//example :(

    // let family = [
    //     "milad",
    //     "sara",
    //     "ava"
    // ];
    // let result = family.map(item => item.length);
    
    // console.log(result);


// let sum = function([a,b] = [2,2]){
//     return a + b;
// }


// console.log(sum())



// const OBJ = {
//     num : 100,
// }

// window.num= 2020;

// let st = function(a,b,c){
//     return this.num + a + b +c ;
// }


// let result = st.apply(OBJ , [1,2,2]);
// console.log(result);

// =================================


// const OBJ = {
//     num :10
// }
// window.num = 2000;
// let sum = (a,b,c)=>{
//     return this.num + a + b+ c;
// }

// let result = sum.call(OBJ , 1,2,3);
// console.log(result);  /// [object Object]

// ===================

// let sum = (...arg)=> {arg.length %2 == 0 ? console.log("z" , arg) : console.log("f" , arg) }
// sum(2,5,34,6,7,78,8)

//=================

// let sum = (a,b,c,d)=>  a  + b + c + d;

// let list = [1,2,3,2];
// console.log(sum.apply(null, list));            //old syntax

// console.log(sum(...list));             //new syntax

// let list1 = [1,2,3];
// let list2 = [3,4,5];
// let list3 = [...list1 , ...list2];

// console.log(list3)


// let list1 =[2,2,4] , list2 = [3,4,5];
// let list3 = [...list1, ...list2];

// for(let item of list3){
//     console.log(item);
// }


// let list = [2,34,5,6,7]

// for(let item of list){
//     console.log(item/2)
// }



// let list = [1, "milad" , true , 44, false]
// let [,,item1 ,item2, item3] = list
// console.log(item1, item2, item3)

// let [name1 , name2,,,name3] = ["milad" , "sara" , "ava","negar","sepehr"]

// let foo =()=> ["milad" , "sara" , "mygirl" , "myboy" , "mymother", "myfather", "mysister" ,"mybrother"]

// let [name1, name2 , name3 , ...family] = foo()

// console.log(name1 , name2, name3 , family)


// =====================obj

// let obj = {
//     name : "milad",
//     age : 20,
//     life : ()=> "i am very good life",
//     lovename : 'sara',
//     girlname :"ava"
// }


// let { name , age , life : bar , ...family} = obj


// console.log(name="fattah" , age , bar() , family);

// let result = ()=> ["one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eith" , "nain" , "teen"]

// let [number1 , number2 ,number3, ...other] = result();

// console.log(number1, number2 , number3 , other)


// let obj = {
//     namecross : "javascript",
//     period : 35,
//     result : ()=> "slowing but be right"
// }


// let {namecross :name1 ,  period , result:bar } = obj


// console.log(name1 , period, bar())

// class Car{
//         constructor(namecar , model , speed){
//             this.namecar = namecar;
//             this.model = model;
//             this.speed = speed;
//         }

//         runspeed(){
//             return ` My car name : ${this.namecar} and speed : ${this.speed}`
//         }
// }


// let car1 = new Car("PEJO207" , 99 , 220)

// console.log(car1.runspeed())



// class plant {
//     constructor(name , color , height ){
//         this.name = name;
//         this.color = color;
//         this.height = height + "cm";
//     }
//     generalExplanation(){
//         return `plant name is : ${this.name} and color is ${this.color} and it is ${this.height}`
//     }

// }



// let plant1 = new plant("roz" , "red" , 20);

// console.log(plant1)


// class bors {
//     constructor(name ,price ,change){
//         this.name = name ;
//         this.price = price; 
//         this.change = change +"%";
//     }
//     reslut(){
//         return `saham name : ${this.name} , price : ${this.price}`
//     }
// }



// let saham1 = new bors("gesalem" , 900 , -35)

// console.log(saham1.reslut())


// class CarIran{
//     constructor(name ,make , year){
//         this.name = name; 
//         this.make = make; 
//         this.year = year;
//     }
//     run(){
//         return "run speed up 200"
//     }

//     fullmaking(){
//         return `carName : ${this.name} , carMake : ${this.make}`
//     }
   
// }

// class CarSaipa extends CarIran{
//     constructor(name , make ,year , color){
//         super(name, make ,year)
//         this.color =color
//     }

//     runs(){
//         return this.run()
//     }

//     fullmaking(){
//         console.log(super.fullmaking())
//         return `CarName : ${this.name} , CarMake  : ${this.make} , CarColor : ${this.color}`
//     }
// }


// let car1 = new CarIran("pejoPars" , "iran" , 98)

// let car2 = new CarSaipa("saipa111" , "iran" ,99 ,"green")
// console.log(car2)



// class animal {
//     constructor( number,name , height , age ){
//         this.number = number
//         this.name = name
//         this.height = height
//         this.age  = age
//     }

//     checkrun(){
//         return `animal ${this.number} => name : ${this.name} , age : ${this.age} `
//     }
// }

// class flyanimal extends animal {
//     constructor(number, name, hight , age , speed , speedfly){
//         super(number , name , hight , age)
//         this.speed = speed
//         this.speedfly = speedfly
//     }

//     checkrun(){

//          return   this.speedfly == null ? super.checkrun() :   `animal ${this.number} => name : ${this.name} , age : ${this.age} , speedfly : ${this.speedfly}`
        
            
//     }
    

//     explain(){
//         return this.checkrun()
//     }
// }

// let animal1 = new animal(1, "morg" , "20cm" , 2)


// console.log(animal1.checkrun())

// let animal2 =new flyanimal(2 , "Crow" , "30cm" , 43 , 30 , 222)

// console.log(animal2.checkrun())



// class Book {
//     constructor(name , page , another){
//         this.name = name ;
//         this.page = page;
//         this.another = another;
//     }

//     forbook(){
//         return `nameBook : ${this.name} , pageBook : ${this.page}`
//     }
//     static run(){
//         return `ruun book 100`
//     }
// }

// class Bookforegin extends Book {
//     constructor(name , page, another , country){
//         super(name , page , another)
//         this.country = country
//     }

//     forforegin(){
//     return super.forbook() + `${this.country}`
    
//     }

//      run(){
//         return `ruun book 200`
//     }

//     fly(){
//         return `fly book`
//     }

//      static go(){
//         return this.run()
//     }
// }


// let book1 = new Bookforegin("fotherPrice" , 200 , 'MILAD' , "iran")

// // console.log(book1.go())

// console.log(Bookforegin.go())



// class AdvansArray extends Array {
//         result(value){
//             let val = this.filter(item => item === value)
//             return val.length == 0 ? "error" : value
//         }
// }


// let list = new AdvansArray("milad" ,"malom nis" , "ava")

// console.log(list.result("miladd"))

// =====================================

    // class fild {
    //     constructor(){
    //         this.list = []
    //     }

    //     set atseter(value){
    //         this.list.push(value)
    //     }

    //     get atgeter(){
    //         return this.list
    //     }
    // }

    // let onelist= new fild()
    // onelist.atseter = 2 
    // onelist.atseter = 4
    // console.log(onelist.atgeter)

// ------------------------

// class Foo {
//     constructor(){
//         this.log = [];
//     }

//     yy = "milad"
//     get con(){
//         return this.yy
//     }
//     set creent(value){
    //         let x = this.log.push(value)
//         return x
//     }

//     get result(){
//         return this.log
//     }
// }


// let n = new Foo()
// n.creent = 2
// console.log(n.con )

// ===============================


// let name = "ava"
// let fn = "milad 1"
// let keyname = "keyname"
// let obj = {
    //     name , 
    //     [fn] : "milad",
//         say(){
    //         return "i am milad fattah"
    //     },
    //     "say 2"(){
    //         return "i going harmonic music"
    //     }
    
    // }
    
    
    // console.log(obj["milad 1"])
    
// ===================================

      // GOOD EXAMPLE FOR class
    // class Car{
    //     constructor(name , model , year){
    //         this.name = name 
    //         this.model = model
    //         this.yaer = year

    //     }
    //     monys(){
    //         return "100,000,000$"
    //     }
    //     speed(){
    //         return `${this.name} speed 200 km/h`
    //     }
    // }

    // class Mottor extends Car {
    //     constructor(name, model , year , mony){
    //         super(name , model , year )
    //         this.mony = mony
    //     }

    //     runspeed(){
    //         return this.speed()
    //     }

    //     static monys(){
            
    //         return `/////` 
    //     }

    // }

    // let car1 = new Car("pejo207" , "irani" , 99)
    // let moto1= new Mottor("k250" , "honda" , 99 , 14000000)

    // console.log(Mottor.monys())



// =======================


    // let passwordsym = Symbol('discription : password')
    // let idsym = Symbol.for('discription : id')


    // let obj = {
    //     name : "milad",
    //     [passwordsym] : .001414,
    //     [idsym] : "#3322"
    // }

    // let idfor = Symbol.for('discription : id')

    // console.log(obj[idfor])



    // class ReplaceX {
    //     constructor(value){
    //         this.value = value
    //     }

    //     [Symbol.replace](string){

    //         return "MILAD"
    //     }
    // // }


    // console.log('foo'.replace(new ReplaceX("BAR")))



    // let sympassword  = Symbol('sympassword')
    // let symid = Symbol.for('symid')


    // let obj = {
    //     name : "milad",
    //     [sympassword] : 101010,
    //     [symid] : "#2323"
    // }

    // let forid= Symbol.for('symid')
    // console.log(obj[forid])





//    let list=  [1,2,3,4,5,6,7,8,9,222,"milad", "sara" , "ava" , "fattah"]

    // let list2= Array(4)    //یک ارایه با چهار خانه خالی 
    // let list3= Array.of(4)  // true array create with value 4
    // let list4 = Array.from(list , item=> item * 2)  //create new list with option map
    // let list5 = list.find(item=>item % 2 ==0 )   //difirent or filter -> find return the first value but filter return all value
    

    // let arr = list.entries()
    // for(let item of arr){
    //     console.log(item)
    // }

    // let resultfill = list.fill(40,/* start */ 2, /* end */ 4)     // change value all index of list to 40

    // let resultCopy = list.copyWithin(1,/*start*/5, /*end*/7)

    



    // let list2= list.copyWithin(1 , 10 ,13)

    // console.log(list2)








    // class visit {
    //     constructor(namevister , startvisit , endvisit , modelvisit){
    //         this.namevister = namevister 
    //         this.startvisit =  startvisit 
    //         this.endvisit = endvisit
    //         this.modelvisit = modelvisit


    //         this.log = []
    //     }

    //     relsultVisit(){
    //         return `VISITING ==> name : ${this.namevister} , end : ${this.endvisit} , model : ${this.modelvisit}`
    //     }

    //     set indexset(value){
    //             this.log.push(value)
    //     }

    //     get indexget(){
    //         return this.log
    //     }
    // }


    // let sick1 = new visit("milad" , '10/10' , "this/day" ,"courna")

    // sick1.indexset = 4
    // sick1.indexset = 3
    // sick1.indexset = 2
    // sick1.indexset = 1
    // console.log(sick1.indexget)



    // class visitHospital extends visit { 
    //     constructor(namevister,startvisit , endvisit , modelvisit , monyvisit , resultvisit){
    //         super(namevister , startvisit , endvisit, modelvisit)
    //         this.monyvisit= monyvisit
    //         this.resultvisit = resultvisit
    //     }
        
    //     static sick(){
    //         return "it is a sick man for visit to hospital"
    //     }

    //    relsultVisit(){
    //        return super.relsultVisit() +"/"+ `mony ${this.monyvisit} , resultvisit : ${this.resultvisit}`
    //    }
    // }


    // let sick2 = new visitHospital("milad" , '10/10' , "this/day" ,"courna" , 100000 , "good" )

    // console.log(visitHospital.sick())



    // let num  =  -1.99

    // console.log( num, Number.isNaN(num))             //is nan ?
    // console.log( num, Number.isInteger(num))         // is integer?
    // console.log( num, Number.isFinite(num))          // is finite or is infinity


    // console.log(Math.trunc(num))      // 1.55 ==> 1 and  -1.55 ==> -1
    // console.log(Math.sign(num))       //return  -1 0 1 



    // let  str = "milad fattah"

   
    // let result = str.includes("milad" , 2)   // param1 => value for search // param2 => value for postion
    // let result = str.startsWith("lad" , 2)      // pram1=> value for search start string // param2 value for postion start search
    // let result = str.endsWith("la" ,4 )             //param1 => value for search to end string // param2 value for position end string
    // console.log(result)


    // let obj1 ={
    //     name : "milad"
    // }

    // let obj2 = {
    //     family : "fattah"
    // }

    // let obj = Object.assign(obj1, obj2)  // arg1 => target obj  // this method concatn two object

    // console.log(obj)

    // let obj1 ={
    //     name : "milad",
    //     age : 20 ,
    //     family : "fattah"
    // }

    // let obj2 = {
    //     name : "ava",
    //     age : 0

    // }


    // let obj3 = Object.assign(obj1, obj2)

    // console.log(obj3)


    // class Class1 {
    //     constructor(){
    //         this.name = "milad"
    //     }
    // }

    // class Class2 {
    //     constructor(){
    //         this.family ="fattah"
    //     }
    // }


    // let obj1 = new Class1()
    // let obj2 = new Class2()

    // let obj3 = Object.assign(obj1, obj2)

    // console.log(obj3)

    // let obj1 = {
    //     name : "milad",
    //     family : "fattah",
    //     username : "alpha",
    //     age : 20,
    //     from : "iran"
    //     }

    // let obj2 = {
    //     name : "hadi",
    //     family: "movasseghi",
    //     username: "hdix"
    // }

    // let obj3=  Object.assign(obj1, obj2)

    // console.log(obj3, obj1 , obj2)



    // class Class1 {
    //     constructor(){
    //         this.name = "milad"
    //     }
    // }

    // class Class2 {
    //     constructor(){
    //         this.family = "fattah"
    //     }
    // }
    // let obj1 = new Class1()
    // let obj2 = new Class2()
    // let obj3 = Object.assign({},obj1, obj2)     // {} very important for create new object 
    // console.log(obj3)



    // let obj1 ={
    //     name : "milad"
    // }
    // let obj2 ={
    //     family : "fattah"
    // }

    // Object.setPrototypeOf(obj2 , obj1)     // param1 ==> target  // param2 ==> giver proto

    // console.log(obj1)
    // console.log(obj2)




    // let names = ["milad" , "hadi" , "saeid"]


    // names[Symbol.iterator]  = function(){
    //         let that = this
    //         let steps = 0
    //         return {
    //             next(){
    //                 let obj = {
    //                     done : steps >= that.length,
    //                     value : that[steps]
    //                 }
    //                 steps ++
    //                 return obj
    //             }
    //         }
    // }


    // let namesIt = names[Symbol.iterator]()

    // console.log(namesIt.next())
    // console.log(namesIt.next())
    // console.log(namesIt.next())
    // console.log(namesIt.next())


    // for(const name of names){
    //     console.log(name)
    // }

// ==================================

    // let objectin = {
    //     name : "milad",
    //     dayli :[
    //         {
    //             morning : [9 ,12]
    //         },
    //         {
    //             evining : [13,19]
    //         },
    //         {
    //             thenight : [19,2]
    //         }
    //     ],
    //     [Symbol.iterator](){
    //         let that = this.dayli
    //         let step = 0
    //         return {
    //             next(){
    //                 let obj = {
    //                     done : step >= that.length,
    //                     value : that[step]
    //                 }
    //                 step++
    //                 return obj
    //             }
    //         }
    //     }
    // }


    // for(let itm of objectin.dayli){
    //     console.log(itm)
    // }


// ==================================

//     let user = {
//         name : "milad",
//         id : 1 ,
//         post : [
//             {
//                 id: 1 ,
//                 masseage : "this is a one post"
//             },
//             {
//                 id : 2 ,
//                 masseage : "this is a  two post0"
//             }
//         ]
//     }

//     user[Symbol.iterator] = function(){
//         let that  = this.post
//         let step = 0
//         return {
//             next(){
//                 let obj ={
//                     done : step >= that.length,
//                     value: that[step]
//                 }
//                 step++
//                 return obj
//             }
//         }
//     }

// // let userIt =  user[Symbol.iterator]()

// //     console.log(userIt.next())
// //     console.log(userIt.next())


//     for( let post of user){
//         console.log(post)
//     }


    // let names = ["milad", "hadi" , "saeid"]
    // names[Symbol.iterator] = function(){
    //     let that = this
    //     let step = 0
    //     return {
            
    //         next(){
    //             let obj = {
    //                 done : step >= that.length ,
    //                 value: that[step]
    //             }
    //             step++
    //             return obj
    //         }
    //     }
    // }

    // let namesIt = names[Symbol.iterator]()


   


    // for(const name of names){
    //     console.log(name)
    // }





    // let obj = {
    //     name : "milad",
    //     family : "fattah",
    //     list : [1,2,3,4,5]

    // }

    // obj[Symbol.iterator]= function(){
    //   let  that = this.list
    //   let  step = 0
    //     return {
    //         next(){
    //             let objing  = {
    //                 done : step >= that.length,
    //                 value : that[step]
    //             }
    //             step++
    //             return objing
    //         }
    //     }
    // }

    // for(const item of obj){
    //     console.log(item)
    // }




// =================================


    // function* CreateName(){
    //     yield "milad"
    //     yield "hadi"
    //     yield "avA"
    // }

    // let result = CreateName()

    // console.log(result.next())
    // console.log(result.next())
    // console.log(result.next())
    // console.log(result.next())


// ===============================

    // function* retNumber(){
    //     yield 1 
    //     yield 2 
    //     yield 3 
    //     yield 4
    //     yield 5
    //     yield 6
    // }


    // let resulting = retNumber()

    // console.log(resulting.next().value)
    // console.log(resulting.next().value)
    // console.log(resulting.next().value)
    // console.log(resulting.next().value)
    // console.log(resulting.next().value)
    // console.log(resulting.next().value)
    
// ==============================

    // function* reslutfamily(){
    //     yield "fattah"
    //     yield "movasseghi"
    //     yield "sabiri"
    //     yield "jelvehgar"
    // }
  /////  console.log([...reslutfamily()])
    // let res = reslutfamily()

    // console.log(res.next())
    // console.log(res.next())
    // console.log(res.next())
    // console.log(res.next())
    // console.log(res.next())

// ========================================

    // let list = ["milad" , "hadi" , "saeid"]

    // function* names(){
    //     yield* list
    // }

    // let namesIt = names()
    // console.log(namesIt.next())
    // console.log(namesIt.next())
    // console.log(namesIt.next())
    // console.log(namesIt.next())
    
    // // for(const i of names()){
    // //     console.log(i)
    // // }

    // ==========================

    // let obj = {
    //     name : "milad",
    //     family : "fattah",
    //     *[Symbol.iterator](){
    //         yield 1
    //         yield 2 
    //         yield 3
    //     }
    // }

    // let objIt = obj[Symbol.iterator]()
    // console.log(objIt.next())
    // console.log(objIt.next())
    // console.log(objIt.next())
    // console.log(objIt.next())

    // for(const i of obj) {
    //     console.log(i)
    // }

    //= =============================


    // let obj = {
    //     name : "obj",
    //     list : ["milad" , "anysa" , "aysoda"],
    // }

    // obj[Symbol.iterator] = function*(){
    //     yield* this.list
    // }


    // let objIt = obj[Symbol.iterator]()
    // console.log(objIt.next())
    // console.log(objIt.next())
    // console.log(objIt.next())
    // console.log(objIt.next())




    // for(const i of obj){
    //     console.log(i)
    // }

// ======================================
        // let objection = {
        //     name :"milad",
        //     dayli :[
        //                 {
        //                     morning : [9 ,12]
        //                 },
        //                 {
        //                     evining : [13,19]
        //                 },
        //                 {
        //                     thenight : [19,2]
        //                 }
        //             ],
        //     *[Symbol.iterator](){
        //         yield* this.dayli
        //     }
            
        // }

        // for(let i of objection){
        // console.log(i)
        // }
// ===================================

    // let user = {
    //         name : "milad",
    //         id : 1 ,
    //         post : [
    //             {
    //                 id: 1 ,
    //                 masseage : "this is a one post"
    //             },
    //             {
    //                 id : 2 ,
    //                 masseage : "this is a  two post0"
    //             }
    //         ],
    //         *[Symbol.iterator](){
    //             yield* this.post
    //         }
    //     }


    //     let userIt = user[Symbol.iterator]()
    //     console.log(userIt.next())
    //     console.log(userIt.next())
    //     console.log(userIt.next())




        // for(const item of user){
        //     console.log(item)
        // }

        // =================================

        // function dosomething(callback){
        //    return setTimeout(() => {
        //             callback("run2")
        //     }, 2000);
        // } 
    

        // console.log("run1")
        // dosomething(function(data){
            //     console.log(data)
        // })
        // console.log("run3")
    // ==========================================

        // function testcallback(callback,callerror){
        //     setTimeout(() => {
        //         let title = "this is  a title"
        //         if(title != "this is  a title"){callerror("error title"); return;}
        //         setTimeout(() => {
        //             let data = {user : "milad"}
        //             if(!data){callerror("error data"); return;}
        //             callback(data)
        //         }, 2000);
        //     }, 2000);
        // }

        // console.log("run1")
        
        // testcallback(function(data){
        //     console.log(data)
        // },function(error){
        //     console.log(error)
        // })

        // console.log("run2")

    // ==========================================

        // function testcallback(DataCall , errorCall){
        //     setTimeout(() => {
        //         let title = "this is a title"
        //         if(title.startsWith("this")){
        //             setTimeout(() => {
        //                     let data = {user : "milad"}
        //                     if(!data){errorCall("errordata"); return;}
        //                     DataCall(data)
        //             }, 2000);    
        //         }else{ errorCall("error title"); return}
        //     }, 2000);
        // }

        // console.log("run1")
        // testcallback(function(data){
        //     console.log(data)
        // }, function(error){
        //     console.log(error)
        // })
        // console.log("run3")

    // ==========================================
        // old useing
        // let firstpromise = new Promise((resolve, reject)=>{    
        //     setTimeout(() => {  
        //             reject("this is a  error for test promise")
        //     }, 2000);
        // })

        // console.log("run1");
        // firstpromise
        // .then(function(data){
        //     console.log(data)
        // }, function(error){
        //     console.log(error)
        // })
        // console.log("run3");

    // ================================
        //new syntax

        // let firstpromise = new Promise((resolve, reject)=>{
        //     setTimeout(() => {
        //             resolve("this is a  test promise")
        //     }, 2000);

        // })


        // console.log("run1");
        // firstpromise
        // .then(data => console.log(data))
        // .catch(error => console.log(error))
        // console.log("run3")
    //=============================
    
    // function testcallback(){
    //     return new Promise((resolve, reject)=>{
    //      let title = "child down 5year";
    //      if(!title.includes("down 5")){reject("this chile not 5year"); return}
    //      let name = {name : "anisa"}
    //      if(!Reflect.ownKeys(name).includes("name")){ reject("name is undifind"); return}
    //      setTimeout(() => {
    //          resolve(name.name)
    //      }, 3000);
         
    //     })
    //  }

    //  testcallback()
    //  .then(data=>console.log(data))
    //  .catch(error=>console.log(error))

    // ============================
            // exapmle with callback function

        // function getUrl(url , callback ,error){
        //     const httpsreqeust = new XMLHttpRequest();
        //     httpsreqeust.open("GET" , url)
        //     httpsreqeust.onreadystatechange = function(){
        //         if(this.readyState == XMLHttpRequest.DONE){
        //             if(this.status== 200){
        //                 let datajson = JSON.parse(this.responseText)
        //                 callback(datajson)
        //             }else if(this.status == 404){
        //                 error("error", this.status)
        //             }else { 
        //                 error("error", this.status)     
        //             }
        //         }
        //     }
        //     httpsreqeust.send()
        // }


      // getUrl("https://jsonplaceholder.typicode.com/posts" , function(data){ console.log(data)} , function(error){console.log(error)})


    // ==================================

        // function geturl(url){
        //     return new Promise((resolve, reject) =>{
        //         const Requesthttp = new XMLHttpRequest();
        //         Requesthttp.open("GET", url);
        //         Requesthttp.onreadystatechange = function(){
        //             if(this.readyState == XMLHttpRequest.DONE){
        //                 if(this.status == 200){
        //                     resolve(this.response)
        //                 }else if(this.status == 404){
        //                     reject("error 404")
        //                 }else {
        //                     reject("worning")
        //                 }
        //             }
        //         }
        //         Requesthttp.send()
        //     })
        // }


        // function parseJson(datajson){
        //     return new Promise((resolve , reject)=>{
        //         setTimeout(() => {
        //                 try {
        //                     resolve(JSON.parse(datajson))
        //                 } catch (error) {
        //                     reject(error)
        //                 }
        //         }, 2000);
        //     })
        // }


        // geturl("https://jsonplaceholder.typicode.com/posts")
        // .then(json => {
        //     return parseJson(json)
        // })
        // .then(data=> console.log(data))
        // .catch(error => console.log(error))

        // =======================================

        // function geturl(url){
        //     return new Promise((resolve , reject)=>{
        //         const Requesthttp = new XMLHttpRequest();
        //          Requesthttp.open("GET" , url)
        //          Requesthttp.onreadystatechange = function(){
        //              if(this.readyState == XMLHttpRequest.DONE){
        //                  if(this.status == 200){
        //                     resolve(this.response)
        //                 }else if ( this.status == 404){
        //                     reject(`${this.status} : error 404`)
        //                  }else{
        //                      reject(`${this.status} : wrong`)
        //                  }
        //              }
        //          }
        //          Requesthttp.send()
        //     });
        // }

        // function Jsonparse(json){
        //     return new Promise((resolve, reject)=>{
        //         setTimeout(() => {
        //                try {
        //                    resolve( JSON.parse(json) )
        //                } catch (error) {
        //                    reject(error)
        //                }
        //         }, 2000);
        //     })
        // }

        // geturl("https://jsonplaceholder.typicode.com/posts")
        // .then(data => Jsonparse(data))
        // .then(textjson => console.log(textjson))
        // .catch(error =>console.log(error))
        // ===========================================
        // good example

        // function geturl(url){
        //     return new Promise((resolve, reject)=>{
        //         const xmlurl = new XMLHttpRequest();
        //         xmlurl.open("GET" , url)
        //         xmlurl.onreadystatechange= function(){
        //             if(this.readyState == XMLHttpRequest.DONE){
        //                 if(this.status !=  200){ reject(`this is erro : ${this.status}`); return;}
        //                 resolve(this.response)
        //             }
        //         }
        //         xmlurl.send()
                
        //     });
        // }
    
        // function DataPars(Jdata){
        //     return new Promise((resolve,reject)=>{
        //         setTimeout(() => {
        //             try {
        //                 resolve(JSON.parse(Jdata))
        //             } catch (error) {
        //                 reject("error in parse to json")
        //             }
        //         }, 2000);
        //     })
        // }
    
        // geturl("https://jsonplaceholder.typicode.com/posts")
        // .then(data=> DataPars(data))
        // .then(datajson => console.log(datajson))
        // .catch(erro=> console.log(erro))
        
        // =======================================

        // function dosomething(){
        //     let name = "12ilad"

        //     if(name.startsWith("m")){
        //         return Promise.resolve(name)
        //     }else{
        //         return Promise.reject("this is a error")
        //     }
        // }


        // dosomething()
        // .then(data =>console.log(data))
        // .catch(error=> console.log(error))


        // =================

        // header  // Promise.all([])  /// return all promise if not rejcet return resolve but if rejcet return reject

        // let promise1 = new Promise((resolve , reject) => {
        //     setTimeout(() => {
        //         resolve("reject")  // or // reject("reject")
        //     }, 2000);
        // });

        // let promise2= 42;

        // let promise3 = new Promise((resolve , reject)=>{
        //     setTimeout(() => {
        //         resolve("reslove!!")
        //     }, 2000);
        // })

        // Promise.all([promise1 , promise2, promise3])
        // .then(data => console.log(data))
        // .catch( error => console.log(error))

        // =================================

        // header // Promise.race([])  /// return lower time promise

        // let promise1 = new Promise((resolve, reject)=>{
        //     setTimeout(() => {
        //         resolve("resolve with time 1s")       // return this promise  (1s)!importand
        //     }, 1000);
        // })

        // let promise2 = new Promise((resolve, reject)=>{
        //     setTimeout(() => {
        //         reject("reject with time 2s")
        //     }, 2000);
        // })

        // let promise3 = new Promise((resolve , reject)=>{
        //     setTimeout(() => {
        //         resolve("resolve with time 3s")
        //     }, 3000);
        // })
    
        // Promise.race([promise1, promise2 , promise3])
        // .then(data => console.log(data))
        // .catch(error => console.log(error))




        // ==========================================

        
        // let xsymbol = Symbol("data")

        // let list = new Map()

        // list.set('key1' , "milad")
        // list.set(xsymbol , "fattah")
        // list.set('key3' , "ava")

        // console.log(list.size)    // return size map list

        // list.delete('key1'); console.log(list.get('key1'))    // return undefind with deleteing key1

        // list.clear(); console.log(list.get('key1'))         //return undefind with deleteing all key and value

        // console.log(list.has("key3"))         // if(key3){return true} // if(!key3){ return false}

        // list.forEach((value , key)=>console.log(key,value))

        // for(const [key, value] of list){
        //     console.log(key, value)
        // }

// ===========================================

    // let sarasymbol = Symbol("data sara")
    // let list = new Map();

    // list.set('key1' , "miad");
    // list.set('key2' , "ava")
    // list.set(sarasymbol , "sara")
    // console.log(list)
    // // list.forEach((value ,key)=>{console.log(key, value)})

    // // for(const [key, value] of list){
    // //     console.log(key, value)
    // // }

    // for(const key of list.keys()){
    //     console.log(key)
    // }


    // ========================
    // let listmap = [['key1' , "milad"] , ['key2', "fattah"] , ['key3' , 20]]
    // let list = new Map(listmap);
    
    
    // console.log(list)

    // ===============

        // let familysymobl= Symbol("data family")

    // let list = new Map();

    // list.set('key1', "milad")
    // list.set(familysymobl , "fattah")
    // list.set('key3' , 20)
    // list.delete('key3')

    // for(const i of list){
        
    // }


    //==============
    //فرض کن  این حال بدات از اون سالایی که گذزونیدی مونده مثلا سال قبل همین موقع بد بودی 
    // خب؟
    // خب دیگه همین امروز رو با یکم سختی بگذرون ولی خوب و  مفید
    // که چی؟
    // بشه سال های بعدت خوووووب
    // :)
    


    //=========================
    // new Set()   // return unic value 

    // let list = new Set();

    // list.add(3)
    // list.add("milad")
    // list.add(3)
    // list.add(1)

    // console.log(list.has("milad"))


    // =============================


    // let list = new Set();

    // list.add(1)
    // list.add(2)
    // list.add(1)
    // list.add("milad")

    // list.delete("milad")  // delete value target
    // list.clear()    // clear full value

    // for (const [key, value] of list.entries()) {
    //     console.log(key, value)
    // }
    
    // console.log(list.has(2))   // if(2)return true  // if(!2)return false

    // console.log(list)


    // =========================


    // class CarExam{
    //     constructor(){
    //         this.value = Array(10000000).join("mmi")
    //     }
    // }
    // window.car = new CarExam()
    // let list  = new WeakMap();

    // list.set(window.car, "milad");

    // delete window.car ; 
    // console.log(window.car)
    // console.log(list);



    // ==================


    // class Car{
    //     constructor(name , model){
    //         this.name = name ;
    //         this.model = model
    //     }
    // }

    // // let car1 = new Car("207", "irankhodro")

    // let car1 = Reflect.construct(Car , ["206" , "irankhodro"])  // create new object from class car //Reflect.construct(targetclass , [values])
    // console.log(car1);


    // let car2 = Object.create(null)   // create null object
    // Reflect.setPrototypeOf(car1 ,car2 )  //car1 give proto from null ojbct(car2)
    // let result = Reflect.getPrototypeOf(car1);  // return all proto target
    // console.log(result)

    // const obj = {
    //     name : "milad",
    //     age : 20
    // }
    
    // function exi(family){
    //     return `hello ${this.name} ${family} whether you ${this.age} years old ?`;
    // }


    // let result = Reflect.apply(exi, obj, ["fattah"])// use apply method in the Reflect.apply(fntarget , objecttargat, [vaules])

    // console.log(result)

    // ================
  
    // class Car{
    //     constructor(name , model){
    //         this.name = name ; 
    //         this.model= model;
    //     }
    // }
    // class iranCar {
    //     constructor(){}
    // }
    // let On_car = Reflect.construct(Car , ["pejoPars" , 99], iranCar )


    // let obj = {
    //     name : "sara",
    //     age : 20
    // }

    // function ex(before){
    //     return `${before} , my name is ${this.name} and i have been living in this world for ${this.age} years  `
    // }

    // let result = Reflect.apply(ex, obj, ["hello"])

    // let obj2 = {
    //     name : "ava",
    //     family : "fattah"
    // }
    // Reflect.setPrototypeOf(obj2 , On_car)
    // let res = Reflect.getPrototypeOf(obj2)
    // console.log(obj2)
    // console.log(res)

    // let obj = {
    //     name : "milad"
    // }

    // Reflect.deleteProperty(obj, "name")
    // Reflect.defineProperty(obj , "age" , {
    //     value : 20,
    //     writable: false  // dont write again this  property

    // })
    
    // Reflect.preventExtensions(obj)  //  change to !extensible
    // console.log(Reflect.isExtensible(obj)) // return true||false for extensible
    // obj.name ="s"
    // console.log(obj)
    
    // let syy = Symbol("dis")
    // let obj2 = {
    //     name : "milad", 
    //     age : 20 , 
    //     [syy] : "fattah"
    // }
    // console.log(Reflect.has(obj2, syy)); // return true||flase for has property
    // Reflect.set(obj2 , "life" , "good") // set new property
    // console.log(obj2)
    // console.log(Reflect.get(obj2 , "age")) // get target property
  
    // let array = ["milad" , "anisa" , "aysoda"];
    // let result = Reflect.get(array , 2) // return key name
    // console.log(result)

    // let onkeys = Reflect.ownKeys(obj2) // return all keys in the obj or array
    // console.log(onkeys)
  
    // ============================/

    // class Car{
    //     constructor(make , model){
    //         this.make = make ; 
    //         this.model = model;
    //     }
    // }

    // let carobj = new Car("IranKhodor"  , "207");

    // let handler = {
    //     get(obj , propkey){
        

    //         return propkey in obj 
    //         ? obj[propkey] 
    //         : "not fount property"
    //         // -----------
    //         // return Reflect.has(obj,propkey)
    //         // ?obj[propkey]
    //         // :`not fo`
    //     },
    //     set(obj , propkey , value){
    //         if(typeof value != 'number'){
    //         console.log('not number'); return;
    //         }
    //         return Reflect.set(obj, propkey , value)
    //     },
    //     has(obj, propkey){
    //         return propkey in obj ? true : false;
    //     }
        
    // }
    // let proxy = new Proxy(carobj, handler);
    // // proxy.dd = 122
    // // console.log(proxy.dd)

//    ===============================

    // class Car {
    //     constructor(make , model ){
    //         this.make = make ;
    //         this.model = model ; 

    //     }
    // }

    // let objcar = new Car("iranKhodro"  ,  "206");

    // let handing = {
    //     get(obj ,propkey){
    //         return propkey in obj ? obj[propkey] : "not font"
    //     },
    //     has(obj ,propkey){
    //         return Reflect.has(obj, propkey)
    //     },
    //     set(obj , propkey ,value){
    //         if(typeof value != 'number'){
    //             console.log("not number"); return;
    //         }
    //         return Reflect.set(obj, propkey , value)
    //     }
    // }
    // let {proxy , revoke} = Proxy.revocable(objcar , handing)
    // // revoke()   // revoke all proxy
    // console.log("dsf" in proxy)
    // proxy.dify = 12
    // console.log(proxy.dify)
  
  
        // function sum(a, b){
        //     return a + b ;
        // }

        // let handler = {
        //     apply(target , thisArgsS , args){
        //         console.log(`target : ${target} , arguments : ${thisArgsS} , args : ${args}`);
        //         return target(...args)
        //     }
        // }

        // let {proxy , revoke} =  Proxy.revocable(sum , handler)

        // // revoke()  // use  for revoeking the proxy
        
        // console.log(proxy(1,9))

        // =====================
     

        // class car{
        //     constructor(name , model){
        //         this.name = name ;
        //         this.model = model;
        //     }
        // }
        // let obj = new car("206", "irankhodro")

        // let handing = {
        //     get(obj , propkey){
        //         return propkey in obj 
        //         ? obj[propkey]
        //         : "not property"
        //    },
        //    set(obj , propkey , argumentss){
        //        if(typeof argumentss != 'number'){console.log("not numer");return}
        //         Reflect.set(obj, propkey , argumentss)
        //    },
        //    has(obj, argu){
        //      return argu in obj ? console.log("Ok") : console.log("nos")
        //    }
        // }
        // let { proxy ,revoke} = Proxy.revocable(obj , handing);
        
        // Reflect.set(proxy , "age", "0")

        // console.log(Reflect.has(proxy ,"f"))

        // function sum(a,b){
        //     return a + b;
        // }

        // let obj = {
        //     number : 10
        // }
        // let handler= {
        //     apply(target  ,thisArgs, arg){
        //         console.log(target, thisArgs , arg)
        //         return target(...arg) + 2
        //     }
        // }

        // let {proxy , revoke} =  Proxy.revocable(sum , handler)
        // revoke()
        // console.log(proxy(22,2))

        // ==================================


        
        // const name = "milad";
        // export {
        //     name
        // }
        // import {name} from "location"
        // ------------------

        // const name = "milad"
        // export default name
        // import name from "location"
        
        // ------------------
        
       
        
    //   1  // import log , {config as error, name} from "./logger"

        // log.success("success fully");
        // log.error("erroring")
        // error("do somethign error")
        // console.log(name)

// ----------------------------------------------

        // import * as fulllog from "./logger"
        // console.log(fulllog);  // show all importing

        // fulllog.default.success("ok")
        // fulllog.default.error("no")

        // fulllog.config("this is config function")
            
        // console.log(fulllog.name)


        // ======================================


        class testing {
            constructor(){
                this.database =[]
            }
            data_
        }