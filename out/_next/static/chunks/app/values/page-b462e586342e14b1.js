(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[548],{7452:function(e,t,n){Promise.resolve().then(n.bind(n,2375))},636:function(e,t,n){"use strict";var s=n(7437),i=n(7110);t.Z=e=>{let{children:t}=e,{ref:n,inView:r}=(0,i.YD)({rootMargin:"-50px",triggerOnce:!0});return(0,s.jsx)("div",{ref:n,className:"".concat(r?"opacity-100":"opacity-0"," duration-[1s]"),children:t})}},7285:function(e,t,n){"use strict";var s=n(7437),i=n(8792),r=n(2265);t.Z=()=>{let[e,t]=(0,r.useState)(!1);return(0,s.jsxs)("header",{className:"header",children:[(0,s.jsxs)(i.default,{href:"/",className:"header_logo",children:[(0,s.jsx)("img",{src:"./img/icon.png",alt:"icon",width:36,height:36}),"Seto Yusaku"]}),(0,s.jsxs)("nav",{className:"".concat(e?"menu_open":""),children:[(0,s.jsxs)("div",{className:"menu_toggle",onClick:()=>{t(!e)},children:[(0,s.jsx)("div",{className:"toggle_line"}),(0,s.jsx)("div",{className:"toggle_line"}),(0,s.jsx)("div",{className:"toggle_line"})]}),(0,s.jsxs)("ul",{className:"header_list ".concat(e?"menu_open":""),children:[(0,s.jsx)("li",{className:"header_item",children:(0,s.jsx)(i.default,{href:"/about",className:"header_item_link",children:"About"})}),(0,s.jsx)("li",{className:"header_item",children:(0,s.jsx)(i.default,{href:"/learning",className:"header_item_link",children:"Learning"})}),(0,s.jsx)("li",{className:"header_item",children:(0,s.jsx)(i.default,{href:"/contact",className:"header_item_link",children:"Contact"})})]})]})]})}},2375:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var s=n(7437),i=n(636),r=n(7285);function c(){return(0,s.jsxs)("div",{className:"body",children:[(0,s.jsx)(r.Z,{}),(0,s.jsx)("div",{className:" bg-gray-100 "}),(0,s.jsxs)("div",{className:"scroll-section",children:[(0,s.jsx)("div",{className:"background-image"}),(0,s.jsx)("div",{className:"max-w-6xl mx-auto p-8",children:(0,s.jsx)("section",{children:(0,s.jsxs)("section",{className:"vision-section",children:[(0,s.jsx)(i.Z,{children:(0,s.jsx)("h2",{className:"h2-title",children:"大切にしていること"})}),(0,s.jsxs)("div",{className:"vision-content",children:[(0,s.jsx)("h3",{className:"vision-title",children:"計画性"}),(0,s.jsxs)("p",{className:"vision-content",children:["私が最も大切にしていることは、優先順位を明確にし、計画を立てて効率的に行動することです。この考え方は、私の高校生時代からの軸であり、さまざまな経験において支えになりました。大学受験時には、限られた時間の中で自分の得意分野と課題を見極め、塾に通わずに独学で国立理系大学に現役合格することができました。大学入学後も2年の前期には27単位を取得し、GPA 3.92/4という成績を収めることができました。また、3年時にはインターンや複数のプロジェクトと並行してTOEICで820点を取得し、自分のスキルを着実に高めてきました。",(0,s.jsx)("br",{}),"私は、多岐にわたる知識と経験を社会に還元することを目指しています。これまで、電力業界ではAIを活用して電力需給予測モデルを構築し、省エネをサポートするシステムを開発しました。また、数学や物理の知識を応用し、Unityを使ったアート展示を制作。来場者が楽しめる体験型コンテンツを提供し、技術が持つ可能性を体感していただきました。このように、古典的な工学の知識と最新のAIやプログラミング技術を融合させることで、さまざまな分野で新しい価値を生み出すことを心がけています。 さらに、エンジニアとしての役割にとどまらず、展示会対応などの営業活動にも参加してきました。また、チームでプロジェクトを進める際には、自分の作業が他のメンバーに与える影響を意識し、優先すべきタスクに集中することで、チーム全体の効率を高めるよう努めています。",(0,s.jsx)("br",{}),"これまでの経験を通じて学んだのは、個人の知識やスキルを高めるだけでなく、それを活かして周囲や社会にどのように貢献できるかを常に考えることの大切さです。私は、自分の専門知識や技術を使って社会の課題解決に役立てると同時に、チームやプロジェクト全体がより良い成果を上げられるように尽力していきたいと考えています。"]})]}),(0,s.jsx)("a",{href:"/about",children:"戻る"})]})})})]})]})}},7110:function(e,t,n){"use strict";n.d(t,{YD:function(){return o}});var s=n(2265),i=Object.defineProperty,r=new Map,c=new WeakMap,a=0,l=void 0;function o(){var e;let{threshold:t,delay:n,trackVisibility:i,rootMargin:o,root:d,triggerOnce:u,skip:h,initialInView:m,fallbackInView:g,onChange:f}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[v,x]=s.useState(null),j=s.useRef(),[N,_]=s.useState({inView:!!m,entry:void 0});j.current=f,s.useEffect(()=>{let e;if(!h&&v)return e=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:l;if(void 0===window.IntersectionObserver&&void 0!==s){let i=e.getBoundingClientRect();return t(s,{isIntersecting:s,target:e,intersectionRatio:"number"==typeof n.threshold?n.threshold:0,time:0,boundingClientRect:i,intersectionRect:i,rootBounds:i}),()=>{}}let{id:i,observer:o,elements:d}=function(e){let t=Object.keys(e).sort().filter(t=>void 0!==e[t]).map(t=>{var n;return"".concat(t,"_").concat("root"===t?(n=e.root)?(c.has(n)||(a+=1,c.set(n,a.toString())),c.get(n)):"0":e[t])}).toString(),n=r.get(t);if(!n){let s;let i=new Map,c=new IntersectionObserver(t=>{t.forEach(t=>{var n;let r=t.isIntersecting&&s.some(e=>t.intersectionRatio>=e);e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=r),null==(n=i.get(t.target))||n.forEach(e=>{e(r,t)})})},e);s=c.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:c,elements:i},r.set(t,n)}return n}(n),u=d.get(e)||[];return d.has(e)||d.set(e,u),u.push(t),o.observe(e),function(){u.splice(u.indexOf(t),1),0===u.length&&(d.delete(e),o.unobserve(e)),0===d.size&&(o.disconnect(),r.delete(i))}}(v,(t,n)=>{_({inView:t,entry:n}),j.current&&j.current(t,n),n.isIntersecting&&u&&e&&(e(),e=void 0)},{root:d,rootMargin:o,threshold:t,trackVisibility:i,delay:n},g),()=>{e&&e()}},[Array.isArray(t)?t.toString():t,v,d,o,u,h,i,g,n]);let b=null==(e=N.entry)?void 0:e.target,p=s.useRef();v||!b||u||h||p.current===b||(p.current=b,_({inView:!!m,entry:void 0}));let y=[x,N.inView,N.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}s.Component}},function(e){e.O(0,[792,971,69,744],function(){return e(e.s=7452)}),_N_E=e.O()}]);