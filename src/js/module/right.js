define(["jquery"],function($){
	class Right{
		constructor(){
			this.load();
		}
		load(){
			    var _this =this;
			return new Promise(resolve =>{
				$("#right-container").load("/html/module/right.html",function(){
				  _this.calcCartNum();
				  resolve();
			   })
				
			})
			
		}
		calcCartNum () {
			
	      let goods = localStorage.getItem("goods");
	      if(goods) {
	        goods = JSON.parse(goods);
	        this.num = goods.reduce(function (num, prod) {
	          num += prod.numbers;
	          return num;
	        }, 0);
	        $("#sidebarcartnum").html(this.num);
	      }
	      return this.num;
    }
		
		
		
		
	}
	return new Right();
})