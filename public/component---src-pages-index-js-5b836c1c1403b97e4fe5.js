(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6brp":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),o=a("PZBh"),l=a("Otd7");t.a=function(e){var t=e.postTitle,a=e.button,n=e.thumbnail,i=e.link;return r.a.createElement(l.f,null,r.a.createElement(c.Link,{to:i}," ",r.a.createElement(l.e,{newsCard:!0,src:n?n.url:null}),"   "),r.a.createElement(c.Link,{to:i}," ",r.a.createElement(l.i,{lightColor:!0},t)," "),r.a.createElement(o.a,{link:i,button:a,white:!0}))}},"7qaB":function(e,t,a){"use strict";a.d(t,"g",(function(){return n.a})),a.d(t,"f",(function(){return u})),a.d(t,"a",(function(){return m})),a.d(t,"e",(function(){return d})),a.d(t,"b",(function(){return E})),a.d(t,"c",(function(){return g})),a.d(t,"d",(function(){return v.a}));var n=a("x21s"),r=a("q1tI"),c=a.n(r),o=a("Otd7"),l=a("EQDu"),i=a.n(l),u=function(e){var t=e.header,a=e.subheader,n=e.img;return c.a.createElement(o.h,{helloSection:!0,background:i.a},c.a.createElement(o.j,null,c.a.createElement(o.j,{helloSection:!0,column:!0},c.a.createElement(o.d,{helloSection:!0},t),c.a.createElement(o.i,{helloSection:!0},a)),c.a.createElement(o.e,{src:n,hello:!0})))},m=function(e){var t=e.header,a=e.subheader,n=e.paragraphes,r=e.img,l=n.map((function(e){return c.a.createElement(o.g,{key:e.id,section:"aboutMe",className:"aboutMe__container--paragraph"},e.content)}));return c.a.createElement(o.h,{white:!0},c.a.createElement(o.d,null,t),c.a.createElement(o.j,{column:!0},c.a.createElement(o.b,null,c.a.createElement(o.e,{src:r}),c.a.createElement(o.j,{column:!0},c.a.createElement(o.i,null,a),l))))},s=function(e){var t=e.img,a=e.title,n=e.paragraph;return c.a.createElement(o.a,null,c.a.createElement("img",{src:t}),c.a.createElement("div",{className:"description"},c.a.createElement(o.i,null,a),c.a.createElement(o.g,null,n)))},d=function(e){var t=e.header,a=e.activities.map((function(e){return c.a.createElement(s,{key:e.id,img:e.img,title:e.title,paragraph:e.paragraph})}));return c.a.createElement(o.h,{white:!0},c.a.createElement(o.j,{column:!0},c.a.createElement(o.d,null,t),c.a.createElement(o.j,null," ",a)))},h=a("6brp"),f=a("PZBh"),E=function(e){var t=e.header,a=e.button1,n=e.button2,r=e.data,l=e.limit,i=e.click,u=r.allDatoCmsArticle.edges.map((function(e){return c.a.createElement(h.a,{key:e.node.title,button:a,postTitle:e.node.title,postDescription:e.node.content,thumbnail:e.node.thumbnail,slug:e.node.slug,link:"/blog/"+e.node.slug+"/"})})).slice(0,l);return c.a.createElement(o.h,null,c.a.createElement(o.j,{column:!0},c.a.createElement(o.d,null,t),c.a.createElement(o.j,{row:!0,blogSection:!0},u),c.a.createElement(f.a,{button:n,click:i})))},p=a("vHOz"),b=function(e){var t=e.contactPictures.map((function(e){return c.a.createElement("a",{key:e.id,href:e.link},c.a.createElement("img",{src:e.src}))}));return c.a.createElement(p.a,null,t)},g=function(e){var t=e.header,a=e.subheader,n=e.img,r=e.contactPictures;return c.a.createElement(o.c,{contact:!0},c.a.createElement(o.d,null,t),c.a.createElement(o.j,{contactSection:!0},c.a.createElement(o.g,{section:"contact"},a),c.a.createElement(b,{contactPictures:r})),c.a.createElement(o.e,{contact:!0,src:n}))},v=a("voVc")},"8etU":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=a("vOnD").d.main.withConfig({displayName:"pageWrapper__StyledPageWrapper",componentId:"sc-1y96zon-0"})(["display:flex;flex-direction:column;align-items:center;"])},EQDu:function(e,t,a){e.exports=a.p+"static/background-633ac9404dba99f0a5e51754f8ce4f2c.jpg"},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return s}));var n=a("9Hrx"),r=a("q1tI"),c=a.n(r),o=a("YXbN"),l=a("vOnD"),i=a("BYIe"),u=a("8etU"),m=a("7qaB"),s="3331106748",d=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={newsLimit:3},t.loadMoreHandler=function(e){e.preventDefault();var a=t.state.newsLimit+3;t.setState({newsLimit:a})},t}return Object(n.a)(t,e),t.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,null),c.a.createElement(l.a,{theme:i.b},c.a.createElement(m.g,{buttons:o.a.buttons.navButtons}),c.a.createElement(u.a,null,c.a.createElement(m.f,{header:o.a.hello.header,subheader:o.a.hello.subheader,img:o.a.hello.img}),c.a.createElement(m.a,{header:o.a.aboutMe.header,subheader:o.a.aboutMe.subheader,paragraphes:o.a.aboutMe.paragraphes,img:o.a.aboutMe.img}),c.a.createElement(m.e,{header:o.a.myFreeTime.header,activities:o.a.myFreeTime.activities}),c.a.createElement(m.b,{header:o.a.blog.header,postTitle:o.a.blog.postTitle,postDescription:o.a.blog.postDescription,button1:o.a.buttons.showPostButton,button2:o.a.buttons.loadMorePostButton,limit:this.state.newsLimit,data:this.props.data,click:this.loadMoreHandler.bind(this)}),c.a.createElement(m.c,{header:o.a.contact.header,subheader:o.a.contact.subheader,img:o.a.contact.img,contactPictures:o.a.contact.contactPictures}),c.a.createElement(m.d,{footerContent:o.a.footer.footerContent}))))},t}(r.Component);t.default=d},voVc:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("vOnD"),o=a("UeZE"),l=c.d.footer.withConfig({displayName:"FooterSection__FooterStyled",componentId:"sc-1qrv79f-0"})(["height:5vh;width:100vw;overflow:hidden;background-color:",";p{font-size:",";text-align:center;color:",";;@media ","{font-size:",";}}"],(function(e){return e.theme.colors.primary}),(function(e){return e.theme.fontSize.s}),(function(e){return e.theme.colors.gray}),o.a.tablet,(function(e){return e.theme.fontSize.m}));t.a=function(e){var t=e.footerContent;return r.a.createElement(l,null,r.a.createElement("p",null,t))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5b836c1c1403b97e4fe5.js.map