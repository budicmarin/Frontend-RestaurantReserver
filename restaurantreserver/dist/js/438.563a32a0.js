"use strict";(self["webpackChunkrestaurantreserver"]=self["webpackChunkrestaurantreserver"]||[]).push([[438],{7438:function(e,r,s){s.r(r),s.d(r,{default:function(){return v}});var a=s(3396),n=s(9242);const o={class:"container"},l={class:"row justify-content-center"},t={class:"col-md-6"},i=(0,a._)("h1",{class:"text-center mb-5"},"This is a login page",-1),u={class:"form-group"},m=(0,a._)("label",{for:"exampleInputEmail1"},"Email address",-1),d={class:"form-group"},p=(0,a._)("label",{for:"exampleInputPassword1"},"Password",-1),c=(0,a._)("button",{type:"submit",class:"btn btn-primary mt-3"},"Login",-1);function w(e,r,s,w,f,g){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("div",l,[(0,a._)("div",t,[i,(0,a._)("form",{onSubmit:r[2]||(r[2]=(0,n.iM)(((...e)=>g.login&&g.login(...e)),["prevent"]))},[(0,a._)("div",u,[m,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[0]||(r[0]=e=>f.username=e),type:"email",class:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},null,512),[[n.nr,f.username]])]),(0,a._)("div",d,[p,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":r[1]||(r[1]=e=>f.password=e),type:"password",class:"form-control",id:"exampleInputPassword1",placeholder:"Password"},null,512),[[n.nr,f.password]])]),c],32)])])])}var f=s(7625),g={name:"login",data(){return{username:"",password:""}},methods:{login(){console.log("Login",this.username);const e=f.EA.find((e=>e.email===this.username));e&&e.password===this.password?(f.$r.authenticated=!0,f.$r.email=e.email,f.$r.id=e.id,f.$r.phoneNumber=e.phoneNumber,f.$r.name=e.name,f.$r.surname=e.surname,console.log(f.$r),console.log(f.EA),this.$router.replace({name:"userview"})):console.log("Invalid username or password")}}},h=s(89);const b=(0,h.Z)(g,[["render",w]]);var v=b}}]);
//# sourceMappingURL=438.563a32a0.js.map