(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{182:function(t,e,r){var content=r(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(114).default)("56b15182",content,!0,{sourceMap:!1})},186:function(t){t.exports=JSON.parse('{"criteriaTitle":"Criteria","playersTitle":"Players"}')},187:function(t){t.exports=JSON.parse('{"criteria":{"title":"Criterios","newCriteriaPlaceHolder":"Estado físico, habilidad, etc","addButton":"Añadir criterio","errorMessage":{"emptyName":"Por favor, inserta un criterio."}},"player":{"title":"Jugadores","newPlayerPlaceHolder":"Nombre del jugador","addButton":"Añadir jugador","errorMessage":{"emptyName":"Por favor, inserta un nombre de jugador."}},"distribution":{"title":"Distribución","button":{"random":"Aleatoria","optimized":"Optimizada"},"team":"Equipo"}}')},190:function(t,e,r){"use strict";var n={head:function(){return this.$nuxtI18nHead()}},o=(r(234),r(61)),component=Object(o.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},194:function(t,e,r){r(195),t.exports=r(196)},234:function(t,e,r){"use strict";r(182)},235:function(t,e,r){var n=r(113)(!1);n.push([t.i,"body,html{margin:0;font-family:Arial,sans-serif;height:100%;font-size:1.15rem}h3{max-width:40%;font-size:1.75rem}.container{display:flex;justify-content:center;flex-direction:column;height:100%;min-width:100%;background:#ccc}.content{background:#fff;overflow:visible;border-radius:5px;margin:.5rem;box-shadow:5px 5px 4px #888}.content_title{display:flex;flex-wrap:wrap;flex-direction:row;align-items:center;justify-content:center;font-size:.75rem;background:#333;margin-bottom:1rem;color:#62d562}.content_expand{padding:.7rem}input,select{margin-bottom:10px;border-radius:5px;box-shadow:3px 3px 2px #888;flex:1}.add_button,input,select{width:100%;padding:.5rem;font-size:1.1rem}.add_button{margin:10px 0;border-radius:10px;background-color:#62d562;cursor:pointer}.icon_as_button{width:2.5rem;height:2.5rem;cursor:pointer}.inner_content{display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;flex-direction:row;grid-gap:1rem;gap:1rem}.inner_content>*{align-self:center}",""]),t.exports=n},236:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o})),r.d(e,"getters",(function(){return d}));r(36),r(143);var n=function(){var t,e;return{list:(t=[{name:"Habilidad",id:"0"},{name:"Forma física",id:"1"}],t),nextId:2,criteriaValues:(e=[0,1,2,3,4,5],e)}},o={add:function(t,e){e.id=t.nextId,t.list.push(e),t.nextId++,console.log("New criteria created: "+e)},remove:function(t,e){var r=t.list.map((function(t){return t.id})).indexOf(e);t.list.splice(r,1),console.log("Criteria removed: "+e)}},d={getAll:function(t){return t.list},getAllCriteriaValues:function(t){return t.criteriaValues}}},237:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return o})),r.d(e,"mutations",(function(){return d})),r.d(e,"getters",(function(){return c}));var n={RANDOM:{id:"100",name:"random"},OPTIMIZE:{id:"101",name:"optimize"}},o=function(){var t;return{teams:(t=[["pepe","paco"],["antonio","luis"]],t),distributionCriteriaList:[],distributionCriteria:n.RANDOM}},d={addDistribution:function(t,e,r){t.list=e,t.distributionCriteria=r},addDistributionCriteria:function(t,e){t.distributionCriteria=e}},c={getTeams:function(t){return t.teams},getDistributionCriteriaList:function(t){return t.distributionCriteriaList},getDistributionCriteria:function(t){return t.distributionCriteria}}},238:function(t,e,r){"use strict";r.r(e),r.d(e,"state",(function(){return n})),r.d(e,"mutations",(function(){return o})),r.d(e,"getters",(function(){return d}));r(36),r(143);var n=function(){return{list:[],nextId:0}},o={add:function(t,e){e.id=t.nextId,t.list.push(e),t.nextId++,console.log("New player created: "+e)},remove:function(t,e){var r=t.list.map((function(t){return t.id})).indexOf(e);t.list.splice(r,1),console.log("Player removed: "+e)},updateCriteriaValue:function(t,object){var e=t.list.map((function(t){return t.id})).indexOf(id);t.list.splice(e,1),console.log("Player removed: "+id)}},d={getAll:function(t){return t.list}}}},[[194,14,1,15]]]);