import{f as e}from"./index-DV5EutoI.js";import{_ as u}from"./MyTask-BErVukAV.js";import"./vue.esm-bundler-CGM-SVwx.js";const g={onPinTask:e(),onArchiveTask:e()},_={component:u,title:"MyTask",tags:["autodocs"],excludeStories:/.*Data$/,args:{...g}},s={args:{task:{id:"1",state:"TASK_INBOX",title:"Test Task"}}},a={args:{task:{...s.args.task,state:"TASK_PINNED"}}},t={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}};var r,n,o;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      state: 'TASK_INBOX',
      title: 'Test Task'
    }
  }
}`,...(o=(n=s.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var c,i,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(k=(p=t.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const D=["ActionsData","Default","Pinned","Archived"];export{g as ActionsData,t as Archived,s as Default,a as Pinned,D as __namedExportsOrder,_ as default};
