import{_ as d,o as i,c,z as u,i as _,A as p,a as t,t as r,j as f,w as o,S as m,b as n}from"./index.7e7ab3d9.js";const h={},g={class:"w-full h-full bg-gray-300 flex justify-center"},x=u('<div class="w-full max-w-[700px] min-h-[180px] p-7 mt-8 bg-light-100 rounded-xl overflow-hidden self-start"><div class="w-1/10 float-left"><img class="w-full pt-[100%] pl-[100%] rounded-1/2 border-5 border-green-500 bg-gray-300 animate-pulse"></div><div class="w-[85%] float-right"><span class="block w-full h-4 bg-gray-300 animate-pulse"></span><h3 class="my-3 w-65 h-6 bg-gray-300 animate-pulse"></h3><p class="w-[80%] h-4 bg-gray-300 animate-pulse"></p></div></div>',1),w=[x];function v(s,e){return i(),c("div",g,w)}var b=d(h,[["render",v]]);function y(s=1e3){return new Promise(e=>{setTimeout(()=>{e({name:"Sheep",pic:"https://raw.githubusercontent.com/SheepNDW/Bootstrap5-learning/main/img/rice.jpg",bio:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, nam quasi assumenda expedita quidem veritatis reiciendis iusto id voluptas voluptatem."})},s)})}const k={class:"w-full h-full bg-gray-300 flex justify-center"},S={class:"w-full max-w-[700px] min-h-[180px] p-7 mt-8 bg-light-100 rounded-xl overflow-hidden self-start"},B={class:"w-1/10 float-left"},$=["src"],j={class:"w-[85%] float-right"},C=t("span",{class:"uppercase text-[#777] tracking-3px"}," Written By ",-1),D={class:"my-3 text-[#222] text-2xl"},N={class:"leading-normal text-[#777]"},P={__name:"ProfileCard",async setup(s){let e,l;const a=_(null);return a.value=([e,l]=p(()=>y(2e3)),e=await e,l(),e),(V,q)=>(i(),c("div",k,[t("div",S,[t("div",B,[t("img",{src:a.value.pic,alt:"avatar",class:"w-full p-1 rounded-1/2 border-5 border-green-500"},null,8,$)]),t("div",j,[C,t("h3",D,r(a.value.name),1),t("p",N,r(a.value.bio),1)])])]))}},E={__name:"SkeletonEffect",setup(s){return(e,l)=>(i(),f(m,null,{default:o(()=>[n(P)]),fallback:o(()=>[n(b)]),_:1}))}};export{E as default};