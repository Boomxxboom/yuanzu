require(["require.config"],function(){
	require(["jquery","header","footer","url","template","right","zoom","fly"],function($,header,footer,url,template,right){
	        class Detail {
	          	
	          	constructor(){	
	          		
//	          		
	          		this.init();
				    this.zoom();
				}
	          	
	          	init(){
	          		
	          		let id = location.search.slice(4);
	          	
	          		$.ajax({
	          		url:url.baseUrl+"detail?id="+id,	
					type:"GET",
					dataType:"json",
					success: res =>{
						if(res.res_code === 1){
							
						    this.detail = res.res_body.data.detail;
						    this.detail.id = id;
							this.render(res.res_body.data);
						}
					}					
				    });
	          	}
	          	render(data){
	          		var html = template("detail-s",{...data.detail});
	          		$("#d-right").html(html);
	          		this.jiajian();
	          		this.addtocart();
	          	}
	          	
	          	
	          	
	          	zoom(){
	          		
	          		$(".zoomImg").elevateZoom({
						gallery: 'gal',
						cursor: 'pointer',
						galleryActiveClass: 'active',
						borderSize: '1',
						borderColor: '#c5c5c5'
					});
	          	}
	          	
	          	jiajian(){	          			          		
	          		$("#jia").on("click", () => {
					$("#num").val(Number($("#num").val()) + 1);
				})
				$("#jian").on("click", () => {
					let num = Number($("#num").val());
					if (--num <= 1) {
						num = 1;
					}
					$("#num").val(num);
				})	
				right.calcCartNum ();
	          	}
	          	
	          	addtocart(){
	          		
	          		var _this = this;
	          		$("#buy").on("click",function(e){
	          			$(`<div style="width:20px;height:20px;background:red;"></div>`).fly({
						        start:{
						          left: e.clientX,  //开始位置（必填）#fly元素会被设置成position: fixed
						          top: e.clientY,  //开始位置（必填）
						        },
						        end:{
						          left: $(window).innerWidth() - 30, //结束位置（必填）
                                  top: $("#sidebarcartnum").position().top +249 //结束位置（必填）
						          
						        },
						        autoPlay: true, //是否直接运动,默认true
						        speed: 1.3, //越大越快，默认1.2
						        vertex_Rtop: 10, //运动轨迹最高点top值，默认20
						        onEnd: function(){
						          this.destroy(); // 把运动的小方块销毁
						    
						
						        } //结束回调
						      })
	          			
	          			
	          			
	          			_this.numinput = $("#num").val();
	          			var  shopcar =localStorage.getItem("goods");
	          			if(shopcar){
	          				var shopcars = JSON.parse(shopcar);
	          				var index = 0;
	          				if(shopcars.some((item,i) => {
		          			   index = i;
		          			    return item.id == _this.detail.id;
		          			})){
		          			   shopcars[index].numbers = Number(shopcars[index].numbers)+ Number(_this.numinput);
		          			   localStorage.setItem("goods",JSON.stringify(shopcars));
		          			}else{
		          				_this.detail.numbers = _this.numinput;
		          				shopcars.push(_this.detail);
		          				 localStorage.setItem("goods",JSON.stringify(shopcars));
		          			}
	          			}else{
	          				_this.detail.numbers = _this.numinput;
	          				localStorage.setItem("goods",JSON.stringify([_this.detail]));
	          			}
	          			$("#sidebarcartnum").html(right.calcCartNum());
	          			
	          			
	          			
	          		})
	          		

	          	}
	          	
                

	          	
	          	
	          	

	          	
	          	
	        }
	           new Detail();
	})
})
