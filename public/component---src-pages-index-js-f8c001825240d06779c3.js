(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6brp":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),l=a("PZBh"),o=a("Otd7");t.a=function(e){var t=e.postTitle,a=e.button,n=e.thumbnail,i=e.link;return r.a.createElement(o.f,null,r.a.createElement(c.Link,{to:i}," ",r.a.createElement(o.e,{newsCard:!0,src:n?n.url:null}),"   "),r.a.createElement(c.Link,{to:i}," ",r.a.createElement(o.i,{lightColor:!0},t)," "),r.a.createElement(l.a,{link:i,button:a,white:!0}))}},"7qaB":function(e,t,a){"use strict";a.d(t,"g",(function(){return n.a})),a.d(t,"f",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"e",(function(){return m})),a.d(t,"b",(function(){return h})),a.d(t,"c",(function(){return b})),a.d(t,"d",(function(){return f.a}));var n=a("x21s"),r=a("q1tI"),c=a.n(r),l=a("Otd7"),o=function(e){var t=e.header,a=e.subheader,n=e.img;return c.a.createElement(l.h,{helloSection:!0},c.a.createElement(l.j,null,c.a.createElement(l.j,{helloSection:!0,column:!0},c.a.createElement(l.d,{helloSection:!0},t),c.a.createElement(l.i,null,a)),c.a.createElement(l.e,{src:n,hello:!0})))},i=function(e){var t=e.header,a=e.subheader,n=e.paragraphes,r=e.img,o=n.map((function(e){return c.a.createElement(l.g,{key:e.id,section:"aboutMe",className:"aboutMe__container--paragraph"},e.content)}));return c.a.createElement(l.h,{white:!0},c.a.createElement(l.d,null,t),c.a.createElement(l.j,{column:!0},c.a.createElement(l.b,null,c.a.createElement(l.e,{src:r}),c.a.createElement(l.j,{column:!0},c.a.createElement(l.i,null,a),o))))},u=function(e){var t=e.img,a=e.title,n=e.paragraph;return c.a.createElement(l.a,null,c.a.createElement("img",{src:t}),c.a.createElement("div",{className:"description"},c.a.createElement(l.i,null,a),c.a.createElement(l.g,null,n)))},m=function(e){var t=e.header,a=e.activities.map((function(e){return c.a.createElement(u,{key:e.id,img:e.img,title:e.title,paragraph:e.paragraph})}));return c.a.createElement(l.h,{white:!0},c.a.createElement(l.j,{column:!0},c.a.createElement(l.d,null,t),c.a.createElement(l.j,null," ",a)))},s=a("6brp"),d=a("PZBh"),h=function(e){var t=e.header,a=e.button1,n=e.button2,r=e.data,o=e.limit,i=e.click,u=r.allDatoCmsArticle.edges.map((function(e){return c.a.createElement(s.a,{key:e.node.title,button:a,postTitle:e.node.title,postDescription:e.node.content,thumbnail:e.node.thumbnail,slug:e.node.slug,link:"/blog/"+e.node.slug+"/"})})).slice(0,o);return c.a.createElement(l.h,null,c.a.createElement(l.j,{column:!0},c.a.createElement(l.d,null,t),c.a.createElement(l.j,{row:!0,blogSection:!0},u),c.a.createElement(d.a,{button:n,click:i})))},E=a("vHOz"),p=function(e){var t=e.contactPictures.map((function(e){return c.a.createElement("a",{key:e.id,href:e.link},c.a.createElement("img",{src:e.src}))}));return c.a.createElement(E.a,null,t)},b=function(e){var t=e.header,a=e.subheader,n=e.img,r=e.contactPictures;return c.a.createElement(l.c,{contact:!0},c.a.createElement(l.d,null,t),c.a.createElement(l.j,{contactSection:!0},c.a.createElement(l.g,{section:"contact"},a),c.a.createElement(p,{contactPictures:r})),c.a.createElement(l.e,{contact:!0,src:n}))},f=a("voVc")},"8etU":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=a("vOnD").d.main.withConfig({displayName:"pageWrapper__StyledPageWrapper",componentId:"sc-1y96zon-0"})(["display:flex;flex-direction:column;align-items:center;"])},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return s}));var n=a("9Hrx"),r=a("q1tI"),c=a.n(r),l=a("YXbN"),o=a("vOnD"),i=a("BYIe"),u=a("7qaB"),m=a("8etU"),s="1405601902",d=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).state={newsLimit:3},t.loadMoreHandler=function(e){e.preventDefault();var a=t.state.newsLimit+3;t.setState({newsLimit:a})},t}return Object(n.a)(t,e),t.prototype.render=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(i.a,null),c.a.createElement(o.a,{theme:i.b},c.a.createElement(u.g,{buttons:l.a.buttons.navButtons}),c.a.createElement(m.a,null,c.a.createElement(u.f,{header:l.a.hello.header,subheader:l.a.hello.subheader,img:l.a.hello.img}),c.a.createElement(u.a,{header:l.a.aboutMe.header,subheader:l.a.aboutMe.subheader,paragraphes:l.a.aboutMe.paragraphes,img:l.a.aboutMe.img}),c.a.createElement(u.e,{header:l.a.myFreeTime.header,activities:l.a.myFreeTime.activities}),c.a.createElement(u.b,{header:l.a.blog.header,postTitle:l.a.blog.postTitle,postDescription:l.a.blog.postDescription,button1:l.a.buttons.showPostButton,button2:l.a.buttons.loadMorePostButton,limit:this.state.newsLimit,data:this.props.data,click:this.loadMoreHandler.bind(this)}),c.a.createElement(u.c,{header:l.a.contact.header,subheader:l.a.contact.subheader,img:l.a.contact.img,contactPictures:l.a.contact.contactPictures}),c.a.createElement(u.d,{footerContent:l.a.footer.footerContent}))))},t}(r.Component);t.default=d}}]);
//# sourceMappingURL=component---src-pages-index-js-f8c001825240d06779c3.js.map