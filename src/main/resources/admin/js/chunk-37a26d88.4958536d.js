(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-37a26d88"],{"1f27":function(t,e,a){"use strict";var r=a("9efd"),n="/api/admin/menus",o={listAll:function(){return Object(r["a"])({url:n,method:"get"})},listTree:function(){return Object(r["a"])({url:"".concat(n,"/tree_view"),method:"get"})},create:function(t){return Object(r["a"])({url:n,data:t,method:"post"})},delete:function(t){return Object(r["a"])({url:"".concat(n,"/").concat(t),method:"delete"})},get:function(t){return Object(r["a"])({url:"".concat(n,"/").concat(t),method:"get"})},update:function(t,e){return Object(r["a"])({url:"".concat(n,"/").concat(t),data:e,method:"put"})}};e["a"]=o},"7e89":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-header-index-wide"},[a("a-row",{attrs:{gutter:12}},[a("a-col",{style:{"padding-bottom":"12px"},attrs:{xl:10,lg:10,md:10,sm:24,xs:24}},[a("a-card",{attrs:{title:t.title,bodyStyle:{padding:"16px"}}},[a("a-form",{attrs:{layout:"horizontal"}},[a("a-form-item",{attrs:{label:"名称：",help:"* 页面上所显示的名称"}},[a("a-input",{model:{value:t.categoryToCreate.name,callback:function(e){t.$set(t.categoryToCreate,"name",e)},expression:"categoryToCreate.name"}})],1),a("a-form-item",{attrs:{label:"别名：",help:"* 一般为单个分类页面的标识，最好为英文"}},[a("a-input",{model:{value:t.categoryToCreate.slugName,callback:function(e){t.$set(t.categoryToCreate,"slugName",e)},expression:"categoryToCreate.slugName"}})],1),a("a-form-item",{attrs:{label:"上级目录："}},[a("category-select-tree",{attrs:{categories:t.categories},model:{value:t.categoryToCreate.parentId,callback:function(e){t.$set(t.categoryToCreate,"parentId",e)},expression:"categoryToCreate.parentId"}})],1),a("a-form-item",{attrs:{label:"描述：",help:"* 分类描述，部分主题可显示"}},[a("a-input",{attrs:{type:"textarea",autosize:{minRows:3}},model:{value:t.categoryToCreate.description,callback:function(e){t.$set(t.categoryToCreate,"description",e)},expression:"categoryToCreate.description"}})],1),a("a-form-item",["create"===t.formType?a("a-button",{attrs:{type:"primary"},on:{click:t.handleSaveClick}},[t._v("保存")]):a("a-button-group",[a("a-button",{attrs:{type:"primary"},on:{click:t.handleSaveClick}},[t._v("更新")]),"update"===t.formType?a("a-button",{attrs:{type:"dashed"},on:{click:t.handleAddCategory}},[t._v("返回添加")]):t._e()],1)],1)],1)],1)],1),a("a-col",{style:{"padding-bottom":"1rem"},attrs:{xl:14,lg:14,md:14,sm:24,xs:24}},[a("a-card",{attrs:{title:"分类列表",bodyStyle:{padding:"16px"}}},[t.isMobile()?a("a-list",{attrs:{itemLayout:"vertical",size:"large",pagination:!1,dataSource:t.categories,loading:t.loading},scopedSlots:t._u([{key:"renderItem",fn:function(e,r){return a("a-list-item",{key:r},[a("template",{slot:"actions"},[a("span",[a("a-icon",{attrs:{type:"form"}}),t._v("\n                "+t._s(e.postCount)+"\n              ")],1),a("a-dropdown",{attrs:{placement:"topLeft",trigger:["click"]}},[a("span",[a("a-icon",{attrs:{type:"bars"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(a){return t.handleEditCategory(e)}}},[t._v("编辑")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"你确定要添加【"+e.name+"】到菜单？",okText:"确定",cancelText:"取消"},on:{confirm:function(a){return t.handleCategoryToMenu(e)}}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("添加到菜单")])])],1),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"你确定要删除【"+e.name+"】分类？",okText:"确定",cancelText:"取消"},on:{confirm:function(a){return t.handleDeleteCategory(e.id)}}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("删除")])])],1)],1)],1)],1),a("a-list-item-meta",[a("template",{slot:"description"},[t._v("\n                "+t._s(e.slugName)+"\n              ")]),a("span",{staticStyle:{"max-width":"300px",display:"block","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},attrs:{slot:"title"},slot:"title"},[t._v("\n                "+t._s(e.name)+"\n              ")])],2),a("span",[t._v("\n              "+t._s(e.description)+"\n            ")])],2)}}],null,!1,229073744)}):a("a-table",{attrs:{columns:t.columns,dataSource:t.categories,rowKey:function(t){return t.id},loading:t.loading},scopedSlots:t._u([{key:"name",fn:function(e){return a("ellipsis",{attrs:{length:30,tooltip:""}},[t._v("\n            "+t._s(e)+"\n          ")])}},{key:"action",fn:function(e,r){return a("span",{},[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.handleEditCategory(r)}}},[t._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",{attrs:{trigger:["click"]}},[a("a",{staticClass:"ant-dropdown-link",attrs:{href:"javascript:void(0);"}},[t._v("更多")]),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1"},[a("a-popconfirm",{attrs:{title:"你确定要添加【"+r.name+"】到菜单？",okText:"确定",cancelText:"取消"},on:{confirm:function(e){return t.handleCategoryToMenu(r)}}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("添加到菜单")])])],1),a("a-menu-item",{key:"2"},[a("a-popconfirm",{attrs:{title:"你确定要删除【"+r.name+"】分类？",okText:"确定",cancelText:"取消"},on:{confirm:function(e){return t.handleDeleteCategory(r.id)}}},[a("a",{attrs:{href:"javascript:void(0);"}},[t._v("删除")])])],1)],1)],1)],1)}}])})],1)],1)],1)],1)},n=[],o=(a("7f7f"),a("ac0d")),i=a("fa25"),c=a("c405"),l=a("1f27"),s=[{title:"名称",dataIndex:"name"},{title:"别名",dataIndex:"slugName"},{title:"描述",dataIndex:"description"},{title:"文章数",dataIndex:"postCount"},{title:"操作",key:"action",scopedSlots:{customRender:"action"}}],d={components:{CategorySelectTree:i["a"]},mixins:[o["a"],o["b"]],data:function(){return{formType:"create",categories:[],categoryToCreate:{},menu:{},loading:!1,columns:s}},computed:{title:function(){return this.categoryToCreate.id?"修改分类":"添加分类"}},created:function(){this.loadCategories()},methods:{loadCategories:function(){var t=this;this.loading=!0,c["a"].listAll(!0).then((function(e){t.categories=e.data.data,t.loading=!1}))},handleSaveClick:function(){this.createOrUpdateCategory()},handleAddCategory:function(){this.formType="create",this.categoryToCreate={}},handleEditCategory:function(t){this.categoryToCreate=t,this.formType="update"},handleDeleteCategory:function(t){var e=this;c["a"].delete(t).then((function(t){e.$message.success("删除成功！"),e.loadCategories(),e.handleAddCategory()}))},createOrUpdateCategory:function(){var t=this;this.categoryToCreate.name?(this.categoryToCreate.id?c["a"].update(this.categoryToCreate.id,this.categoryToCreate).then((function(e){t.$message.success("更新成功！"),t.loadCategories(),t.categoryToCreate={}})):c["a"].create(this.categoryToCreate).then((function(e){t.$message.success("保存成功！"),t.loadCategories(),t.categoryToCreate={}})),this.handleAddCategory()):this.$notification["error"]({message:"提示",description:"分类名称不能为空！"})},handleCategoryToMenu:function(t){var e=this;this.menu["name"]=t.name,this.menu["url"]="/categories/".concat(t.slugName),l["a"].create(this.menu).then((function(t){e.$message.success("添加到菜单成功！"),e.menu={}}))}}},u=d,m=a("2877"),p=Object(m["a"])(u,r,n,!1,null,null,null);e["default"]=p.exports},c405:function(t,e,a){"use strict";a("7f7f"),a("ac6a");var r=a("9efd"),n="/api/admin/categories",o={};function i(t,e){e.forEach((function(e){t.key===e.parentId&&(t.children||(t.children=[]),t.children.push({key:e.id,title:e.name,isLeaf:!1}))})),t.children?t.children.forEach((function(t){return i(t,e)})):t.isLeaf=!0}o.listAll=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(r["a"])({url:"".concat(n),params:{more:t},method:"get"})},o.listTree=function(){return Object(r["a"])({url:"".concat(n,"/tree_view"),method:"get"})},o.create=function(t){return Object(r["a"])({url:n,data:t,method:"post"})},o.delete=function(t){return Object(r["a"])({url:"".concat(n,"/").concat(t),method:"delete"})},o.get=function(t){return Object(r["a"])({url:"".concat(n,"/").concat(t),method:"get"})},o.update=function(t,e){return Object(r["a"])({url:"".concat(n,"/").concat(t),data:e,method:"put"})},o.concreteTree=function(t){var e={key:0,title:"top",children:[]};return i(e,t),e.children},e["a"]=o},fa25:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-tree-select",{attrs:{treeData:t.categoryTreeData,placeholder:"请选择上级目录，默认为顶级目录",treeDefaultExpandAll:"",treeDataSimpleMode:!0,allowClear:!0,value:t.categoryIdString},on:{change:t.handleSelectionChange}})},n=[],o=(a("6b54"),a("7f7f"),a("c5f6"),{name:"CategorySelectTree",model:{prop:"categoryId",event:"change"},props:{categoryId:{type:Number,required:!0,default:0},categories:{type:Array,required:!1,default:function(){return[]}}},computed:{categoryTreeData:function(){return this.categories.map((function(t){return{id:t.id,title:t.name,value:t.id.toString(),pId:t.parentId}}))},categoryIdString:function(){return this.categoryId.toString()}},methods:{handleSelectionChange:function(t,e,a){this.$log.debug("value: ",t),this.$log.debug("label: ",e),this.$log.debug("extra: ",a),this.$emit("change",t?parseInt(t):0)}}}),i=o,c=a("2877"),l=Object(c["a"])(i,r,n,!1,null,null,null);e["a"]=l.exports}}]);