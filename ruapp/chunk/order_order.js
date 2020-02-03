(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"215":function(e,t,r){"use strict";var n=r(212),o=r(301),a=r(216),c=r(10),i={"API_SVC":"http://chileme.natapp1.cc/chileme/buyer/"};t.a={"baseOptions":function baseOptions(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",r=e.url,s=e.data,l={"isShowLoading":!0,"loadingText":"正在加载","credentials":"include","url":i.API_SVC+r,"data":s,"method":t,"header":e.contentType?{"content-type":e.contentType||""}:{},"success":function success(e){return e.statusCode===a.a.NOT_FOUND?Object(c.c)("api","请求资源不存在"):e.statusCode===a.a.SERVER_ERROR?(Object(n.c)({"title":e.data.msg,"icon":"none"}),Object(c.c)("api","服务端出现了问题")):e.statusCode===a.a.FORBIDDEN?Object(c.c)("api","没有权限访问"):e.statusCode===a.a.SUCCESS?(500===e.data.code&&Object(n.c)({"title":e.data.msg,"icon":"none"}),e.data):void 0},"error":function error(e){Object(c.c)("api","请求接口出现问题",e)}};return Object(o.a)(l)},"get":function get(e){var t={"url":e,"data":arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}};return this.baseOptions(t)},"post":function post(e){var t={"url":e,"data":arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},"contentType":arguments.length>2&&void 0!==arguments[2]?arguments[2]:"application/x-www-form-urlencoded"};return this.baseOptions(t,"POST")}}},"216":function(e,t,r){"use strict";r.d(t,"a",function(){return a}),r.d(t,"b",function(){return n}),r.d(t,"c",function(){return o});var n,o,a={"SUCCESS":200,"CLIENT_ERROR":400,"AUTHENTICATE":401,"FORBIDDEN":403,"NOT_FOUND":404,"SERVER_ERROR":500,"BAD_GATEWAY":502,"SERVICE_UNAVAILABLE":503,"GATEWAY_TIMEOUT":504};!function(e){e[e["新订单"]=0]="新订单",e[e["已送达"]=1]="已送达",e[e["已取消"]=2]="已取消",e[e["配送中..."]=3]="配送中..."}(n||(n={})),function(e){e[e["未付款"]=0]="未付款",e[e["已付款"]=1]="已付款"}(o||(o={}))},"217":function(e,t,r){"use strict";r.d(t,"a",function(){return createAction}),r.d(t,"b",function(){return createApiAction});var n=r(221),o=r.n(n);function createAction(e){return function(t){return{"type":e,"payload":t}}}function createApiAction(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){};return function(){var n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{"success":function success(){},"failed":function failed(){}},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return n=function _asyncToGenerator(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,r){return function step(n,o){try{var a=t[n](o),c=a.value}catch(e){return void r(e)}if(!a.done)return Promise.resolve(c).then(function(e){step("next",e)},function(e){step("throw",e)});e(c)}("next")})}}(o.a.mark(function _callee(e){var n;return o.a.wrap(function _callee$(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e({"type":i+"_request","params":a}),t.next=4,r(a);case 4:return n=t.sent,e({"type":i,"params":a,"payload":n}),c.success&&c.success({"payload":n}),t.abrupt("return",n);case 10:t.prev=10,t.t0=t.catch(0),e({"type":i+"_failure","params":a,"payload":t.t0}),c.failed&&c.failed({"payload":t.t0});case 14:case"end":return t.stop()}},_callee,t,[[0,10]])})),function(e){return n.apply(this,arguments)}}}},"220":function(e,t,r){},"224":function(e,t,r){"use strict";var n=r(8),o=r(24),a=r(217),c=r(215),i=r(11),s=Object(a.b)(i.d,function(e){return c.a.get("user/info",e)}),l=Object(a.b)(i.b,function(e){return c.a.post("register",e)}),u=Object(a.a)(i.c),p=Object(a.b)(i.a,function(){return c.a.get("logout")});t.a=Object(n.b)({"register":l,"login":u,"getUserInfo":s,"logout":p},o.a.dispatch)},"235":function(e,t,r){"use strict";r.d(t,"a",function(){return i});var n=r(2),o=r(3),a=r(307),c=(r(220),function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}());var i=function(e){function ANavBar(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,ANavBar),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(ANavBar.__proto__||Object.getPrototypeOf(ANavBar)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(ANavBar,o["a"].Component),c(ANavBar,[{"key":"hanldeRouterBack","value":function hanldeRouterBack(){o.a.navigateBack()}},{"key":"render","value":function render(){return n.j.createElement(a.a,{"onClickLeftIcon":this.hanldeRouterBack.bind(this),"color":"#000","leftIconType":"chevron-left"})}}]),ANavBar}()},"293":function(e,t,r){},"324":function(e,t,r){"use strict";r.r(t);var n,o,a=r(2),c=r(219),i=r(212),s=r(3),l=r(13),u=r(302),p=r(248),d=r(214),f=r.n(d),h=r(7),y=r.n(h),m=r(213),O=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}();var b=(o=n=function(e){function AtIcon(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,AtIcon),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(AtIcon.__proto__||Object.getPrototypeOf(AtIcon)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(AtIcon,m["a"]),O(AtIcon,[{"key":"handleClick","value":function handleClick(){var e;(e=this.props).onClick.apply(e,arguments)}},{"key":"render","value":function render(){var e=this.props,t=e.customStyle,r=e.className,n=e.prefixClass,o=e.value,c=e.size,i=e.color,l={"fontSize":""+s.a.pxTransform(2*parseInt(c)),"color":i},u=o?n+"-"+o:"";return a.j.createElement(p.a,{"className":y()(n,u,r),"style":this.mergeStyle(l,t),"onClick":this.handleClick.bind(this)})}}]),AtIcon}(),n.defaultProps={"customStyle":"","className":"","prefixClass":"at-icon","value":"","color":"","size":24,"onClick":function onClick(){}},n.propTypes={"customStyle":f.a.oneOfType([f.a.object,f.a.string]),"className":f.a.oneOfType([f.a.array,f.a.string]),"prefixClass":f.a.string,"value":f.a.string,"color":f.a.string,"size":f.a.oneOfType([f.a.string,f.a.number]),"onClick":f.a.func},o),v=r(299),j=r(317),g=r(318),E=r(23),_=r(10),P=(r(293),r(235)),C=r(224),N=r(215),w=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),T=function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0};var k=function(e){function Order(e){!function order_classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Order);var t=function order_possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Order.__proto__||Object.getPrototypeOf(Order)).call(this,e));return t.state={"fee":12,"coupon":10,"openPay":!1,"payMethod":"rupay","payLoading":!1,"orderId":"","prePayLoading":!1},C.a.getUserInfo({"openid":e.openid}),t}return function order_inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Order,s["a"].Component),w(Order,[{"key":"renderOrderProduct","value":function renderOrderProduct(){return this.props.currentOrder.chooseList.map(function(e){var t=e.id,r=e.icon,n=e.name,o=e.description,c=e.price,i=e.chooseCount;return a.j.createElement(l.a,{"className":"productItemWrapper","key":t},a.j.createElement(u.a,{"className":"foodOrderImg","mode":"scaleToFill","src":r}),a.j.createElement(l.a,{"className":"foodOrderRight"},a.j.createElement(p.a,{"className":"foodOrderName"},n),a.j.createElement(p.a,{"className":"foodOrderDesc two-line"},o),a.j.createElement(l.a,{"className":"foodOrderPrice"},a.j.createElement(p.a,null,"×",i),a.j.createElement(p.a,null,"¥",a.j.createElement(p.a,{"className":"foodOrderPriceHighLight"},c)))))})}},{"key":"handleChangePayMethod","value":function handleChangePayMethod(e){this.setState({"payMethod":e})}},{"key":"goToPay","value":function goToPay(){var e=this,t=this.state.orderId;console.log(t);var r=this.props.openid;if(this.setState({"payLoading":!0}),"rupay"!==this.state.payMethod)return this.setState({"payLoading":!1}),void Object(i.c)({"title":"暂未开放","icon":"none"});var n={"openid":r,"orderId":t};N.a.post("order/pay",n).then(function(r){e.setState({"payLoading":!1}),0===r.data.code&&Object(i.c)({"title":"支付成功","icon":"success","duration":1e3}).then(function(){setTimeout(function(){s.a.redirectTo({"url":"/pages/orderSuc/orderSuc?orderId="+t})},1e3)})})}},{"key":"handlePayDisplay","value":function handlePayDisplay(){var e=this;this.setState({"prePayLoading":!0});var t=this.props,r={"name":"儒先生","phone":"18868822111","address":"望京街道，望京西园三区3单元1001室","openid":t.openid,"items":t.chooseList.map(function(e){return{"productId":e.id,"productQuantity":e.chooseCount}})};N.a.post("order/create",r).then(function(t){e.setState({"prePayLoading":!1}),0===t.data.code&&e.setState(function(e){return{"orderId":t.data.data.orderId,"openPay":!e.openPay}})})}},{"key":"handleClosePayMethod","value":function handleClosePayMethod(){var e=this.state.orderId;s.a.redirectTo({"url":"/pages/orderSuc/orderSuc?orderId="+e})}},{"key":"render","value":function render(){var e=this,t=this.props,r=t.currentOrder,n=t.account,o=r.totalPrice;return a.j.createElement(l.a,null,a.j.createElement(P.a,null),a.j.createElement(l.a,{"className":"dd-padding orderWrapper"},a.j.createElement(p.a,{"className":"orderTitle"},"创建订单"),a.j.createElement(l.a,null,a.j.createElement(p.a,{"className":"lastTime"},"约",Object(_.b)(Date.now()+18e5),"后送达")),a.j.createElement(l.a,{"className":"orderUserInfoWrapper"},a.j.createElement(l.a,{"className":"userInfoLeft"},a.j.createElement(p.a,{"className":"userName"},"儒先生",a.j.createElement(p.a,{"className":"userPhone"},"13888888888")),a.j.createElement(l.a,{"className":"userAddr"},a.j.createElement(b,{"value":"map-pin","size":"18","color":"#fff"}),a.j.createElement(p.a,{"className":"userAddrText"},"望京街道，望京西园三区3单元1001室"))),a.j.createElement(l.a,{"className":"userInfoRight"},a.j.createElement(b,{"value":"chevron-right","size":"24","color":"#fff"}))),a.j.createElement(l.a,{"className":"dd-padding order"},a.j.createElement(l.a,{"className":"dd-padding"},this.renderOrderProduct()),a.j.createElement(l.a,{"className":"orderBottom"},a.j.createElement(l.a,{"style":"display:flex;justify-content:space-between"},a.j.createElement(p.a,{"className":"feeTip"},"配送费"),a.j.createElement(p.a,null,"¥ ",a.j.createElement(p.a,{"className":"fee"}," ",this.state.fee))),a.j.createElement(p.a,{"className":"totalPrice"},"¥ ",a.j.createElement(p.a,null,o+this.state.fee)))),a.j.createElement(l.a,{"className":"couponWrapper"},a.j.createElement(l.a,{"className":"couponTopWrapper"},a.j.createElement(p.a,{"className":"coupon"},"优惠券"),a.j.createElement(p.a,{"className":"couponColor"},"-¥",a.j.createElement(p.a,{"className":"couponAmount"},this.state.coupon))),a.j.createElement(p.a,{"className":"couponTip"},"新人特惠券"))),a.j.createElement(v.a,{"className":"shopBtn","loading":this.state.prePayLoading,"type":"primary","onClick":this.handlePayDisplay.bind(this)},"需支付：¥",o+this.state.fee-this.state.coupon),a.j.createElement(j.a,{"isOpened":this.state.openPay,"title":"请选择支付方式","onClose":this.handleClosePayMethod.bind(this)},a.j.createElement(g.a,{"options":[{"label":"支付宝","value":"alipay"},{"label":"微信支付","value":"wechat"},{"label":"儒币支付（余额："+n+"）","value":"rupay"}],"value":this.state.payMethod,"onClick":this.handleChangePayMethod.bind(this)}),a.j.createElement(v.a,{"loading":this.state.payLoading,"className":"shopBtn","type":"primary","onClick":function onClick(){return e.goToPay()}},"立即支付")))}},{"key":"componentDidMount","value":function componentDidMount(){T(Order.prototype.__proto__||Object.getPrototypeOf(Order.prototype),"componentDidMount",this)&&T(Order.prototype.__proto__||Object.getPrototypeOf(Order.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){T(Order.prototype.__proto__||Object.getPrototypeOf(Order.prototype),"componentDidShow",this)&&T(Order.prototype.__proto__||Object.getPrototypeOf(Order.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){T(Order.prototype.__proto__||Object.getPrototypeOf(Order.prototype),"componentDidHide",this)&&T(Order.prototype.__proto__||Object.getPrototypeOf(Order.prototype),"componentDidHide",this).call(this)}}]),Order}();k=Object(c.a)([Object(E.b)(function(e){var t=e.order,r=e.user;return{"currentOrder":t.currentOrder,"chooseList":t.currentOrder.chooseList,"account":r.userInfo.account,"openid":r.openid}})],k);t.default=k}}]);