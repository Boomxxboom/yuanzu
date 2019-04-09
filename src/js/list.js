require(["require.config"],function(){
	require(["jquery","header","footer","url","template"],function($,header,footer,url,template){
		class List{
			constructor(){	
				this.caty();
				
				
			}
			
			caty(){
				$.ajax({
					type:"get",
					url:url.baseUrl+"list",
					async:true,
					success:function(res){
						if(res.res_code === 1){
							let list =res.res_body.list1;
							var html = template("catyList",{list1:list});
							
							$("#catylistc").html(html);
						}
					}					
				});
			}
			
			
		    
		
		
		}
		 new List();
		
	})
	
	
})
