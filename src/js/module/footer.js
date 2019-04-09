define(["jquery"],function($){
	class Footer{
		constructor(){
			this.init();
		}
		init(){
			return new Promise(resolve =>{
				$("#footer-container").load("/html/module/footer.html",function(){
				  resolve();
			   })
				
			})
			
		}		
	}
	return new Footer();
})