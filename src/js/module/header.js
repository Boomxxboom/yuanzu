define(["jquery"],function($){
	class Header{
		constructor(){
			this.init().then(() =>{
				this.src = $("#src");
				this.searchContainaer = $("#srcxiala")
				this.search();
				this.dengru();
			})
			
			
			
		}
		init(){
			return new Promise((resolve,reject) => {
				$("#header-container").load("/html/module/header.html",() => {
				   resolve();
			  });
	
			})
			
		}
		search(){
			let _this = this;
//			console.log(this.src)
			this.src.on("keyup",function(){
				let keyWord = $(this).val().trim();
				if(keyWord !==""){
					$.getJSON("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=?&wd="+keyWord,res =>{
					let lb = res.s;
					let ul = $("<ul>");
					lb.forEach(function(item,index){
						$("<li>").html(item).appendTo(ul);
					});
					_this.searchContainaer.empty().show().append(ul);
				})
					
				}else{
					_this.searchContainaer.hide();
				}
				//console.log(keyWord)
				
			})
			
			this.src.on("blur",function(){
				    setTimeout(()=>{
				    	_this.searchContainaer.hide();
				    },200)
					
				})
			
			this.searchContainaer.on("click","li",function(e){
				_this.src.val($(this).html());
				_this.searchContainaer.hide();
			})
		}
		dengru() {
			var _this = this;
			this.huanying = $("#huanying");
			this.tuichu = $("#tuichu");
			this.dengluzhong = $("#dengluzhong");
			this.yonghuming = $("#yonghuming");
			this.yonghuming =$("#yonghuming");
			var username = localStorage.getItem("username");
//			console.log(username)
			if (username) {
                
               _this.tuichu.css({
   						"display": "block"
					})
               _this.dengluzhong.css({
   						"display": "none"
					})
               _this.huanying.css({
   						"display": "block"
					})
               _this.yonghuming.html(username);

			}
			_this.tuichu.on("click",function(){
				if(confirm("确定退出？")){
					_this.tuichu.css({
   						"display": "none"
					})
               _this.dengluzhong.css({
   						"display": "block"
					})
               _this.huanying.css({
   						"display": "none"
					})
               localStorage.removeItem("username");
				}
				
				
			})
			
			
			
		}
		
		
	}
	return new Header();
})