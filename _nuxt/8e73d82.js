(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(e,t,r){var content=r(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(144).default)("56b15182",content,!0,{sourceMap:!1})},186:function(e){e.exports=JSON.parse('{"criteriaTitle":"Criteria","playersTitle":"Players"}')},187:function(e){e.exports=JSON.parse('{"criteria":{"title":"Criterios","newCriteriaPlaceHolder":"Estado físico, habilidad, etc","addButton":"Añadir criterio","errorMessage":{"emptyName":"Por favor, inserta un criterio."}},"player":{"title":"Jugadores","newPlayerPlaceHolder":"Nombre del jugador","addButton":"Añadir jugador","errorMessage":{"emptyName":"Por favor, inserta un nombre de jugador."}},"distribution":{"title":"Distribución"}}')},190:function(e,t,r){"use strict";var n={head:function(){return this.$nuxtI18nHead()}},o=(r(234),r(61)),component=Object(o.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"container"},[t("Nuxt")],1)}),[],!1,null,null,null);t.a=component.exports},193:function(e,t,r){r(194),e.exports=r(195)},234:function(e,t,r){"use strict";r(182)},235:function(e,t,r){var n=r(142)(!1);n.push([e.i,"body,html{margin:0;font-family:Arial,sans-serif;height:100%;font-size:1.15rem}.container{display:flex;justify-content:center;flex-direction:column;height:100%;min-width:100%;background:#ccc}.content{background:#fff;overflow:visible;border-radius:5px;margin:.5rem;box-shadow:5px 5px 4px #888}.content_title{display:flex;flex-wrap:wrap;flex-direction:row;align-items:center;justify-content:center;font-size:.75rem;background:#333;margin-bottom:1rem;color:#62d562}.content_expand{padding:.7rem}input,select{margin-bottom:10px;box-shadow:3px 3px 2px #888;flex:1}.add_button,input,select{width:100%;padding:.5rem;font-size:1.1rem;border-radius:5px}.add_button{margin:10px 0;background-color:#62d562}.icon_as_button{width:2.5rem;height:2.5rem;cursor:pointer}.inner_content{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;flex-direction:row;grid-gap:1rem;gap:1rem}.inner_content>*{align-self:center}",""]),e.exports=n},236:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return n})),r.d(t,"mutations",(function(){return o})),r.d(t,"getters",(function(){return c}));r(36),r(141);var n=function(){var e,t;return{list:(e=[{name:"Habilidad",id:"0"},{name:"Forma física",id:"1"}],e),nextId:2,criteriaValues:(t=[0,1,2,3,4,5],t)}},o={add:function(e,t){t.id=e.nextId,e.list.push(t),e.nextId++,console.log("New criteria created: "+t)},remove:function(e,t){var r=e.list.map((function(e){return e.id})).indexOf(t);e.list.splice(r,1),console.log("Criteria removed: "+t)}},c={getAll:function(e){return e.list},getAllCriteriaValues:function(e){return e.criteriaValues}}},237:function(e,t,r){"use strict";r.r(t),r.d(t,"state",(function(){return n})),r.d(t,"mutations",(function(){return o})),r.d(t,"getters",(function(){return c}));r(36),r(141);var n=function(){return{list:[],nextId:0}},o={add:function(e,t){t.id=e.nextId,e.list.push(t),e.nextId++,console.log("New player created: "+t)},remove:function(e,t){var r=e.list.map((function(e){return e.id})).indexOf(t);e.list.splice(r,1),console.log("Player removed: "+t)}},c={getAll:function(e){return e.list}}}},[[193,12,1,13]]]);