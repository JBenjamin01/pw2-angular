import './polyfills.server.mjs';
import{A as _,D as F,H as k,K as w,a as l,b as m,c as u,d as g,e as o,f as n,g as h,h as v,i as x,j as i,k as b,l as d,m as p,r as C,u as y,w as S,x as E,y as s,z as M}from"./chunk-S7G7LHKJ.mjs";function q(t,e){if(t&1&&(o(0,"li"),i(1),n()),t&2){let f=e.$implicit;m(),b(f)}}function N(t,e){if(t&1&&(o(0,"div",6)(1,"h3"),i(2,"Hobbies:"),n(),o(3,"ul"),u(4,q,2,1,"li",7),n()()),t&2){let f=x();m(4),g("ngForOf",f.hobbies)}}var A=(()=>{let e=class e{constructor(){this.name="Jhonatan B. Mamani C\xE9spedes",this.age=18,this.email="jmamanices@unsa.edu.pe",this.title="my-dream-app",this.hobbies=["Futbol","Programacion","Leer","Editar y modelar (3D)"],this.showHobbies=!1}toggleHobbies(){this.showHobbies=!this.showHobbies}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=l({type:e,selectors:[["app-root"]],standalone:!0,features:[p],decls:21,vars:5,consts:[["href","/about"],["href","/hello"],[1,"black"],[1,"ash"],[1,"btn",3,"click"],["class","component2",4,"ngIf"],[1,"component2"],[4,"ngFor","ngForOf"]],template:function(r,a){r&1&&(o(0,"ul")(1,"li")(2,"a",0),i(3,"About"),n()(),o(4,"li")(5,"a",1),i(6,"Hello"),n()()(),h(7,"router-outlet"),o(8,"div",2)(9,"h1"),i(10),n()(),o(11,"div",3)(12,"h2"),i(13),n(),o(14,"h2"),i(15),n(),o(16,"h2"),i(17),n()(),o(18,"button",4),v("click",function(){return a.toggleHobbies()}),i(19,"Mostrar Hobbies"),n(),u(20,N,5,1,"div",5)),r&2&&(m(10),b(a.title),m(3),d("Name: ",a.name,""),m(2),d("Age: ",a.age,""),m(2),d("Email: ",a.email,""),m(3),g("ngIf",a.showHobbies))},dependencies:[s,S,E,k],styles:[".black[_ngcontent-%COMP%]{background-color:#000;color:#fff}.ash[_ngcontent-%COMP%]{background-color:#eee;color:#000}.component2[_ngcontent-%COMP%]{background-color:#555;color:#0ff;padding:20px}.btn[_ngcontent-%COMP%]{padding:20px;color:#fff;background-color:brown;display:block;margin:3px}"]});let t=e;return t})();var I=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=l({type:e,selectors:[["app-hello-world"]],standalone:!0,features:[p],decls:2,vars:0,template:function(r,a){r&1&&(o(0,"p"),i(1,"hello-world works!"),n())},dependencies:[s]});let t=e;return t})();var O=(()=>{let e=class e{constructor(){}ngOnInit(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=l({type:e,selectors:[["app-about"]],standalone:!0,features:[p],decls:4,vars:0,template:function(r,a){r&1&&(o(0,"h3"),i(1,"About"),n(),o(2,"p"),i(3,` Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, eos quos non veniam amet itaque quam aliquam libero expedita autem provident minus veritatis ut error repellat nihil porro sunt minima.
`),n())},dependencies:[s]});let t=e;return t})();var D=[{path:"hello",component:I},{path:"about",component:O}];var T={providers:[C({eventCoalescing:!0}),w(D),_()]};var R={providers:[F()]},P=y(T,R);var L=()=>M(A,P),se=L;export{se as a};
