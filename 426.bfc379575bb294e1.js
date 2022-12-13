"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[426],{7426:(_,g,l)=>{l.r(g),l.d(g,{AuthModule:()=>b});var c=l(6895),i=l(433),p=l(2313),e=l(4650),d=l(9698),f=l(529);let m=(()=>{class t{constructor(n){this.http=n}signup$(n){return this.http.post(`${d.J}/user/signup`,n)}signin$(n){return this.http.post(`${d.J}/user/signin`,n)}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(f.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=l(7404);const C=[{path:"",component:(()=>{class t{constructor(n,o){this.authService=n,this.profileStore=o,this.email="",this.password="",this.submitted=!1}login(){const n={email:this.email,password:this.password};this.authService.signin$(n).subscribe(o=>{console.log(o),o.token&&(localStorage.setItem("token",o.token),this.profileStore.profileData.setState({fullname:"",email:n.email}))})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m),e.Y36(h.$))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:18,vars:3,consts:[["action","#",3,"ngSubmit"],["loginForm","ngForm"],["for","email"],["type","text","id","email","name","email","placeholder","Email..","required","",3,"ngModel","ngModelChange"],["for","password"],["type","password","id","password","name","password","placeholder","Password..","required","",3,"ngModel","ngModelChange"],[1,"buttons"],["type","submit",3,"disabled"],["type","button",3,"click"],["type","button","routerLink","./registration"]],template:function(n,o){if(1&n){const u=e.EpF();e.TgZ(0,"h2"),e._uU(1,"Login"),e.qZA(),e.TgZ(2,"form",0,1),e.NdJ("ngSubmit",function(){return o.login()}),e.TgZ(4,"label",2),e._uU(5,"Email"),e.qZA(),e.TgZ(6,"input",3),e.NdJ("ngModelChange",function(r){return o.email=r}),e.qZA(),e.TgZ(7,"label",4),e._uU(8,"Password"),e.qZA(),e.TgZ(9,"input",5),e.NdJ("ngModelChange",function(r){return o.password=r}),e.qZA(),e.TgZ(10,"span",6)(11,"button",7),e._uU(12,"Login"),e.qZA(),e.TgZ(13,"button",8),e.NdJ("click",function(){e.CHM(u);const r=e.MAs(3);return e.KtG(r.reset())}),e._uU(14,"Clear"),e.qZA()()(),e.TgZ(15,"div")(16,"button",9),e._uU(17,"Registration"),e.qZA()()}if(2&n){const u=e.MAs(3);e.xp6(6),e.Q6J("ngModel",o.email),e.xp6(3),e.Q6J("ngModel",o.password),e.xp6(2),e.Q6J("disabled",!u.form.valid)}},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.Q7,p.rH,i.On,i.F],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:200px;margin-bottom:15px}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:last-child){border-radius:4px;margin-bottom:10px}form[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{border-left:5px solid #a94442}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),t})()},{path:"registration",component:(()=>{class t{constructor(n,o){this.authService=n,this.router=o,this.user={fullname:"",email:"",password:""},this.submitted=!1}onSubmit(){this.submitted=!0,this.authService.signup$({fullname:this.user.fullname,email:this.user.email,password:this.user.password}).subscribe(o=>{console.log(o),this.router.navigate(["auth"])})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m),e.Y36(p.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-registration"]],decls:18,vars:4,consts:[["action","#",3,"ngSubmit"],["registrationForm","ngForm"],["for","username"],["type","text","id","username","name","username","placeholder","Login..","required","",3,"ngModel","ngModelChange"],["for","email"],["type","text","id","email","name","email","placeholder","Email..","required","",3,"ngModel","ngModelChange"],["for","password"],["type","password","id","password","name","password","placeholder","Password..","required","",3,"ngModel","ngModelChange"],[1,"buttons"],["type","submit",3,"disabled"],["type","button",3,"click"]],template:function(n,o){if(1&n){const u=e.EpF();e.TgZ(0,"h2"),e._uU(1,"Registration"),e.qZA(),e.TgZ(2,"form",0,1),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e.TgZ(4,"label",2),e._uU(5,"Username"),e.qZA(),e.TgZ(6,"input",3),e.NdJ("ngModelChange",function(r){return o.user.fullname=r}),e.qZA(),e.TgZ(7,"label",4),e._uU(8,"Email"),e.qZA(),e.TgZ(9,"input",5),e.NdJ("ngModelChange",function(r){return o.user.email=r}),e.qZA(),e.TgZ(10,"label",6),e._uU(11,"Password"),e.qZA(),e.TgZ(12,"input",7),e.NdJ("ngModelChange",function(r){return o.user.password=r}),e.qZA(),e.TgZ(13,"span",8)(14,"button",9),e._uU(15," Registration "),e.qZA(),e.TgZ(16,"button",10),e.NdJ("click",function(){e.CHM(u);const r=e.MAs(3);return e.KtG(r.reset())}),e._uU(17,"Clear"),e.qZA()()()}if(2&n){const u=e.MAs(3);e.xp6(6),e.Q6J("ngModel",o.user.fullname),e.xp6(3),e.Q6J("ngModel",o.user.email),e.xp6(3),e.Q6J("ngModel",o.user.password),e.xp6(2),e.Q6J("disabled",!u.form.valid)}},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.Q7,i.On,i.F],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:200px}form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:last-child){border-radius:4px;margin-bottom:10px}form[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%]{border-left:5px solid #a94442}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),t})()}];let M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(C),p.Bz]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,i.UX,M,i.u5]}),t})()}}]);