require(["require.config"],function(){
	require(["jquery","header","footer","url","template","right"],function($,header,footer,url,template,right){
	  class Cart{
	  	constructor(){
	  		this.init();
	  		
	  	}
	  	init(){
	  		  
	  		   this.goods = JSON.parse(localStorage.getItem("goods"));
	  		   this.render();
	  	}
	  	render(){
	  		this.car = localStorage.getItem("goods");
	  		var html = template("carttemplate",{cart:this.goods});
         	$("#carshow-c").html(html);
         	this.jiajian();
         	this.chuxian();
         	this.shanchu();
         	this.zongjia();
	  	}
	  	
	  	jiajian(){
	  		
	  		    $("#carshow").on("click",".up",function(e){
	  		    	e = e || window.event;
	  		    	e.target.nextElementSibling.value++;
	  		    	this.zongjia();
//	  		    	var goodsnumber = JSON.parse(localStorage.getItem("goods"));
//	  		    	console.log(goodsnumber);
//	  		    	 goodsnumber.numbers = e.target.nextElementSibling.value;
//	  		    	 console.log(e.target.nextElementSibling.value);
//	  		    	 console.log(goodsnumber)
//	  		    	 localStorage.setItem("goods",JSON.stringify(goodsnumber));
	  		    }.bind(this))
	  		     $("#carshow").on("click",".down",function(e){
	  		    	e = e || window.event;
	  		      
	  		    	e.target.previousElementSibling.value--;
	  		    	if(e.target.previousElementSibling.value<1){
	  		    		e.target.previousElementSibling.value = 1;
	  		    	}
	  		    	 this.zongjia();
	  		    }.bind(this))
	          	}
	  	
	  	chuxian(){
	  		let goods1 = JSON.parse(localStorage.getItem("goods"));
	  		
	  		if(goods1 != ""){
	  		}
	  		else{
	  			$("#carshow").hide();
	  			$("#carnone").show();
	  			
	  		}
	  		
	  	}
	  	
	  	shanchu(){
			var _this=this;
			this.shanchu=$(".shanchu");
			this.shanchu.on("click",function(){

				if(confirm("确定删除这件商品吗？")){
					
					var scid=JSON.parse(localStorage.getItem("goods"));
					let cartId=Number($(this).parent().parent().attr("deta-id"));
					let i=0;
					scid.some((item,index)=>{
						i=index;
						return item.id=cartId;
					})
					
					scid.splice(i,1);
					
					
						localStorage.setItem("goods",JSON.stringify(scid))
					
					
					$(this).parent().parent().remove();
					location.reload();
				}
			})
		}
        
        zongjia(){
        	  this.sumnum = 0;
        	  this.sumprice = 0 ; 
              this.ali = $(".carlist");
              for(let i =0 ; i<this.ali.length ; i++){
              var prices = $(this.ali[i]).find(".jg").html().slice(1);
              var nums = $(this.ali[i]).find(".numser").val();
              this.sumprice = this.sumprice + prices*nums;
              this.sumnum = Number(this.sumnum)+Number(nums);
              
              }
              console.log(this.sumnum);
              console.log(this.sumprice);
              $("#zongjia").html(this.sumprice);
              $("#zongjia1").html(this.sumprice);
              $("#zongshunum").html(this.sumnum);
             
               
        }
	  	      


	  		
	  	
	  }
	  new Cart();
		
	})
})
