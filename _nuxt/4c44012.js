(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{266:function(e,t,r){"use strict";r.r(t);var n={name:"CriteriaSelector",data:function(){return{criteriaName:""}},computed:{criterias:function(){return this.$store.state.criteria.list}},methods:{add:function(){this.$store.commit("criteria/add",{name:this.criteriaName})},remove:function(e){this.$store.commit("criteria/remove",e)}}},c=r(61),component=Object(c.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h1",[e._v(e._s(e.$t("criteria.title")))]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.criteriaName,expression:"criteriaName"}],attrs:{placeholder:e.$t("criteria.newCriteriaPlaceHolder"),type:"text"},domProps:{value:e.criteriaName},on:{input:function(t){t.target.composing||(e.criteriaName=t.target.value)}}}),e._v(" "),r("button",{on:{click:e.add}},[e._v(e._s(e.$t("criteria.newButton")))]),e._v(" "),r("ul",e._l(e.criterias,(function(t){return r("li",{key:t.id},[r("p",[e._v(e._s(t.name))]),e._v(" "),r("button",{on:{click:function(r){return e.remove(t.id)}}},[e._v(e._s(e.$t("criteria.removeButton")))])])})),0)])}),[],!1,null,"fa9a61ac",null);t.default=component.exports}}]);