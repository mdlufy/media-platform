"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[966],{5966:(I,a,r)=>{r.r(a),r.d(a,{ProfileModule:()=>A});var s=r(9791),c=r(6895),f=r(1917),e=r(4650),p=r(8505),m=r(7199),g=r(9698),d=r(529);let v=(()=>{class t{constructor(o){this.http=o}fecthUser$(o){return this.http.get(`${g.J}/user/${o}`)}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(d.eN))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();const h={fullname:"",email:""};let P=(()=>{class t{constructor(o){this.userService=o,this.profileData=new m.y(h)}getUser(){const o=localStorage.getItem("token")??"",u=JSON.parse(atob(o.split(".")[1]));this.userService.fecthUser$(u.email).pipe((0,p.b)(i=>console.log(i))).subscribe(i=>this.profileData.setState(i))}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(v))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=r(6582),y=r(2210);function S(t,n){if(1&t&&(e.TgZ(0,"a",5),e._uU(1),e.qZA()),2&t){const o=e.oxw().$implicit;e.Q6J("routerLink",o.routerLink),e.xp6(1),e.hij(" ",o.caption," ")}}function C(t,n){1&t&&(e.ynx(0),e.YNc(1,S,2,2,"a",4),e.BQk())}function F(t,n){if(1&t&&(e.ynx(0),e.TgZ(1,"div",6)(2,"span"),e._uU(3,"\u041c\u043e\u0439 \u0430\u043a\u043a\u0430\u0443\u043d\u0442"),e.qZA()(),e.TgZ(4,"div",7)(5,"span"),e._uU(6),e.qZA(),e.TgZ(7,"span"),e._uU(8),e.qZA()(),e.BQk()),2&t){const o=n.ngIf;e.xp6(6),e.hij("\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f: ",o.fullname,""),e.xp6(2),e.hij("\u041f\u043e\u0447\u0442\u0430: ",o.email,"")}}function Z(t,n){1&t&&(e.TgZ(0,"p"),e._uU(1,"error"),e.qZA())}const k=[{path:"",component:(()=>{class t{constructor(o){this.profileStore=o,this.breadcrumbItems=[{caption:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",routerLink:"../"},{caption:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",routerLink:"./"}],this.profile$=o.profileData.state$}ngOnInit(){this.profileStore.getUser()}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(P))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-profile"]],decls:6,vars:5,consts:[["size","l"],[4,"ngFor","ngForOf"],[4,"ngIf","ngIfElse"],["error",""],["tuiLink","",3,"routerLink",4,"tuiItem"],["tuiLink","",3,"routerLink"],[1,"header"],[1,"info-block"]],template:function(o,u){if(1&o&&(e.TgZ(0,"tui-breadcrumbs",0),e.YNc(1,C,2,0,"ng-container",1),e.qZA(),e.YNc(2,F,9,2,"ng-container",2),e.ALo(3,"async"),e.YNc(4,Z,2,0,"ng-template",null,3,e.W1O)),2&o){const i=e.MAs(5);e.xp6(1),e.Q6J("ngForOf",u.breadcrumbItems),e.xp6(1),e.Q6J("ngIf",e.lcZ(3,3,u.profile$))("ngIfElse",i)}},dependencies:[c.sg,c.O5,l.yS,f.l,y.w,s.V,c.Ov],styles:[".info-block[_ngcontent-%COMP%]{display:flex;flex-direction:column}.header[_ngcontent-%COMP%]{margin:1rem 0;display:flex;align-items:center;justify-content:space-between;font:var(--tui-font-heading-3)}"]}),t})()}];let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(k),l.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,x,f.T,s.j]}),t})()}}]);