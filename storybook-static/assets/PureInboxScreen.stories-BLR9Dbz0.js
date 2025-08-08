import{w as N,a as p}from"./index-DV5EutoI.js";import{k as v,j as y,v as B,p as c,l,s as a,C as E}from"./vue.esm-bundler-CGM-SVwx.js";import{d as w}from"./pinia-Ba3_f1sO.js";import{_ as A}from"./PureTaskList-B2O7AMOr.js";import"./MyTask-BErVukAV.js";const P=[{id:"1",title:"Something",state:"TASK_INBOX"},{id:"2",title:"Something more",state:"TASK_INBOX"},{id:"3",title:"Something else",state:"TASK_INBOX"},{id:"4",title:"Something again",state:"TASK_INBOX"}],K=w("task",{state:()=>({tasks:P,status:"idle",error:null}),getters:{getFilteredTasks:t=>t.tasks.filter(s=>s.state==="TASK_INBOX"||s.state==="TASK_PINNED")},actions:{archiveTask(t){const e=this.tasks.find(s=>s.id===t);e&&(e.state="TASK_ARCHIVED")},pinTask(t){const e=this.tasks.find(s=>s.id===t);e&&(e.state="TASK_PINNED")}}}),h=v({__name:"TaskList",setup(t){const e=K(),s=y(()=>e.getFilteredTasks||[]),I=r=>e.archiveTask(r),b=r=>e.pinTask(r);return(r,D)=>(c(),B(A,{tasks:s.value,onArchiveTask:I,onPinTask:b},null,8,["tasks"]))}});h.__docgenInfo={exportName:"default",displayName:"TaskList",description:"",tags:{},sourceFiles:["/Users/gigisabie/Work/Practică/taskbox/src/components/TaskList.vue"]};const L={key:0,class:"page lists-show"},O={key:1,class:"page lists-show"},x=v({__name:"PureInboxScreen",props:{error:{type:Boolean,default:!1}},setup(t){return(e,s)=>(c(),l("div",null,[e.error?(c(),l("div",L,s[0]||(s[0]=[a("div",{class:"wrapper-message"},[a("span",{class:"icon-face-sad"}),a("p",{class:"title-message"},"Oh no!"),a("p",{class:"subtitle-message"},"Something went wrong")],-1)]))):(c(),l("div",O,[s[1]||(s[1]=a("nav",null,[a("h1",{class:"title-page"},"Taskbox")],-1)),E(h)]))]))}});x.__docgenInfo={exportName:"default",displayName:"PureInboxScreen",description:"",tags:{},props:[{name:"error",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/Users/gigisabie/Work/Practică/taskbox/src/components/PureInboxScreen.vue"]};const H={component:x,title:"PureInboxScreen",tags:["autodocs"]},n={},o={args:{error:!0}},i={play:async({canvasElement:t})=>{const e=N(t);await p.click(e.getByLabelText("pinTask-1")),await p.click(e.getByLabelText("pinTask-3"))}};var m,d,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(u=(d=n.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var k,f,g;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    error: true
  }
}`,...(g=(f=o.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var T,_,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
  }
}`,...(S=(_=i.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const U=["Default","Error","WithInteractions"];export{n as Default,o as Error,i as WithInteractions,U as __namedExportsOrder,H as default};
