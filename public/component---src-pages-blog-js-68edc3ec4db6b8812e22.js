(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"6brp":function(e,t,n){"use strict";var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),c=n("PZBh"),o=n("Otd7");t.a=function(e){var t=e.postTitle,n=e.button,a=e.thumbnail,u=e.link;return r.a.createElement(o.f,null,r.a.createElement(l.Link,{to:u}," ",r.a.createElement(o.e,{newsCard:!0,src:a?a.url:null}),"   "),r.a.createElement(l.Link,{to:u}," ",r.a.createElement(o.i,{lightColor:!0},t)," "),r.a.createElement(l.Link,{to:u},"  ",r.a.createElement(c.a,{button:n,white:!0})," "))}},"7qaB":function(e,t,n){"use strict";n.d(t,"g",(function(){return a.a})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return m})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return p.a}));var a=n("x21s"),r=n("q1tI"),l=n.n(r),c=n("Otd7"),o=function(e){var t=e.header,n=e.subheader,a=e.img;return l.a.createElement(c.h,{helloSection:!0},l.a.createElement(c.j,null,l.a.createElement(c.j,{helloSection:!0,column:!0},l.a.createElement(c.d,{helloSection:!0},t),l.a.createElement(c.i,null,n)),l.a.createElement(c.e,{src:a,hello:!0})))},u=function(e){var t=e.header,n=e.subheader,a=e.paragraphes,r=e.img,o=a.map((function(e){return l.a.createElement(c.g,{key:e.id,section:"aboutMe",className:"aboutMe__container--paragraph"},e.content)}));return l.a.createElement(c.h,{white:!0},l.a.createElement(c.d,null,t),l.a.createElement(c.j,{column:!0},l.a.createElement(c.b,null,l.a.createElement(c.e,{src:r}),l.a.createElement(c.j,{column:!0},l.a.createElement(c.i,null,n),o))))},i=function(e){var t=e.img,n=e.title,a=e.paragraph;return l.a.createElement(c.a,null,l.a.createElement("img",{src:t}),l.a.createElement("div",{className:"description"},l.a.createElement(c.i,null,n),l.a.createElement(c.g,null,a)))},m=function(e){var t=e.header,n=e.activities.map((function(e){return l.a.createElement(i,{key:e.id,img:e.img,title:e.title,paragraph:e.paragraph})}));return l.a.createElement(c.h,{white:!0},l.a.createElement(c.j,{column:!0},l.a.createElement(c.d,null,t),l.a.createElement(c.j,null," ",n)))},s=n("6brp"),E=n("PZBh"),d=function(e){var t=e.header,n=e.button1,a=e.button2,r=e.data,o=e.limit,u=e.click,i=r.allDatoCmsArticle.edges.map((function(e){return l.a.createElement(s.a,{key:e.node.title,button:n,postTitle:e.node.title,postDescription:e.node.content,thumbnail:e.node.thumbnail,slug:e.node.slug,link:"/blog/"+e.node.slug+"/"})})).slice(0,o);return l.a.createElement(c.h,null,l.a.createElement(c.j,{column:!0},l.a.createElement(c.d,null,t),l.a.createElement(c.j,{row:!0,blogSection:!0},i),l.a.createElement(E.a,{button:a,click:u})))},f=n("vHOz"),h=function(e){var t=e.contactPictures.map((function(e){return l.a.createElement("a",{key:e.id,href:e.link},l.a.createElement("img",{src:e.src}))}));return l.a.createElement(f.a,null,t)},b=function(e){var t=e.header,n=e.subheader,a=e.img,r=e.contactPictures;return l.a.createElement(c.c,{contact:!0},l.a.createElement(c.d,null,t),l.a.createElement(c.j,{contactSection:!0},l.a.createElement(c.g,{section:"contact"},n),l.a.createElement(h,{contactPictures:r})),l.a.createElement(c.e,{contact:!0,src:a}))},p=n("voVc")},vx99:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return h}));var a=n("q1tI"),r=n.n(a),l=n("BYIe"),c=n("vOnD"),o=n("x21s"),u=n("6brp"),i=n("YXbN"),m=n("7qaB"),s=n("Otd7"),E=function(e){var t=e.data,n=e.button1,a=t.allDatoCmsArticle.edges.map((function(e){return r.a.createElement(u.a,{key:e.node.title,button:n,postTitle:e.node.title,postDescription:e.node.content,postImg:e.node.thumbnail,link:e.node.slug})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.h,null,r.a.createElement(s.j,{column:!0},r.a.createElement(s.d,null,"Co u mnie słychać"),r.a.createElement(s.j,null,a)),r.a.createElement(m.d,{footerContent:i.a.footer.footerContent})))},d=n("FWHX"),f=n.n(d),h="585202980";t.default=function(e){var t=e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(c.a,{theme:l.b},r.a.createElement(o.a,{buttons:i.a.buttons.navButtons}),r.a.createElement(f.a,{defaultStyle:{transition:"left 500ms cubic-bezier(0.47, 0, 0.75, 0.72)",left:"100%",position:"absolute",width:"100%"},transitionStyles:{entering:{left:"0%"},entered:{left:"0%"},exiting:{left:"100%"}},transitionTime:500},r.a.createElement(E,{button1:i.a.buttons.showPostButton,data:t}))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-68edc3ec4db6b8812e22.js.map