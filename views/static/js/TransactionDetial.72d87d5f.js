(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TransactionDetial"],{"28ec":function(t,e,c){"use strict";c.r(e);var a=c("7a23"),s=Object(a["eb"])("data-v-71975f70");Object(a["G"])("data-v-71975f70");var i={class:"transaction-detial-box"},l=Object(a["m"])("div",{slot:"header"},[Object(a["m"])("div",{class:"card-header"}," 交易 ")],-1),b={class:"item flex-middle"},d=Object(a["m"])("div",{class:"title"},"交易哈希:",-1),m={class:"value"},n={class:"item flex-middle"},j=Object(a["m"])("div",{class:"title"},"状态:",-1),O={class:"value"},v={class:"item flex-middle"},o=Object(a["m"])("div",{class:"title"},"区块:",-1),r={class:"value"},f={class:"item flex-middle"},u=Object(a["m"])("div",{class:"title"},"时间戳:",-1),h={class:"value"},I={class:"item flex-middle"},x=Object(a["m"])("div",{class:"title"},"发送方:",-1),w={class:"value"},Q={class:"item flex-middle"},p=Object(a["m"])("div",{class:"title"},"接收方:",-1),g={class:"value"},y={class:"item flex-middle"},M=Object(a["m"])("div",{class:"title"},"价值:",-1),k={class:"value"},D={class:"item flex-middle"},G=Object(a["m"])("div",{class:"title"},"交易费用:",-1),W={class:"value"},_={class:"item flex-middle"},J=Object(a["m"])("div",{class:"title"},"燃料价格:",-1),P={class:"value"},A={class:"item flex-middle"},E=Object(a["m"])("div",{class:"title"},"燃料限制:",-1),F={class:"value"},H={class:"item flex-middle"},N=Object(a["m"])("div",{class:"title"},"nonce:",-1),S={class:"value"},T={class:"item flex-middle"},U=Object(a["m"])("div",{class:"title"},"数据输入:",-1),q={class:"value"};Object(a["E"])();var z=s((function(t,e,c,z,B,C){var K=Object(a["M"])("el-divider"),L=Object(a["M"])("el-card");return Object(a["D"])(),Object(a["i"])("div",i,[Object(a["m"])(L,{class:"box-card"},{default:s((function(){return[l,Object(a["m"])(K),Object(a["m"])("div",b,[d,Object(a["m"])("div",m,Object(a["Q"])(t.transactionInfo.hash),1)]),Object(a["m"])(K),Object(a["m"])("div",n,[j,Object(a["m"])("div",O,Object(a["Q"])(t.transactionInfo.status?"成功":"失败"),1)]),Object(a["m"])(K),Object(a["m"])("div",v,[o,Object(a["m"])("div",r,Object(a["Q"])(t.transactionInfo.blockNumber),1)]),Object(a["m"])(K),Object(a["m"])("div",f,[u,Object(a["m"])("div",h,Object(a["Q"])(t.dateFormat("yyyy-MM-dd hh:mm:ss",new Date(1e3*t.transactionInfo.timestamp||0))),1)]),Object(a["m"])(K),Object(a["m"])("div",I,[x,Object(a["m"])("div",w,Object(a["Q"])(t.transactionInfo.from),1)]),Object(a["m"])(K),Object(a["m"])("div",Q,[p,Object(a["m"])("div",g,Object(a["Q"])(t.transactionInfo.to),1)]),Object(a["m"])(K),Object(a["m"])("div",y,[M,Object(a["m"])("div",k,Object(a["Q"])(t.web3.utils.fromWei(t.transactionInfo.value||"0","ether"))+" eth",1)]),Object(a["m"])(K),Object(a["m"])("div",D,[G,Object(a["m"])("div",W,Object(a["Q"])(t.web3.utils.fromWei("".concat(t.transactionInfo.gasPrice*t.transactionInfo.gasUsed||0),"ether"))+" eth",1)]),Object(a["m"])(K),Object(a["m"])("div",_,[J,Object(a["m"])("div",P,Object(a["Q"])(t.web3.utils.fromWei(t.transactionInfo.gasPrice||"0","Gwei"))+" Gwei",1)]),Object(a["m"])(K),Object(a["m"])("div",A,[E,Object(a["m"])("div",F,Object(a["Q"])(t.transactionInfo.gas),1)]),Object(a["m"])(K),Object(a["m"])("div",H,[N,Object(a["m"])("div",S,Object(a["Q"])(t.transactionInfo.nonce),1)]),Object(a["m"])(K),Object(a["m"])("div",T,[U,Object(a["m"])("div",q,Object(a["Q"])(t.transactionInfo.input),1)])]})),_:1})])})),B=c("5530"),C=c("6c02"),K=c("365c"),L={components:{},setup:function(){Object(C["e"])();var t=Object(C["d"])(),e=Object(a["H"])({hash:t.params.hash,transactionInfo:{}});Object(a["A"])((function(){Object(K["h"])({hash:e.hash}).then((function(t){e.transactionInfo=t.data}))})),Object(C["c"])((function(t,e){}));var c=Object(a["S"])(e);return Object(B["a"])({},c)}};c("69df");L.render=z,L.__scopeId="data-v-71975f70";e["default"]=L},"69df":function(t,e,c){"use strict";c("7442")},7442:function(t,e,c){}}]);
//# sourceMappingURL=TransactionDetial.72d87d5f.js.map