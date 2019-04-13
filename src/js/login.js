require(["require.config"], function() {
	require(["jquery", "header", "footer","right"], function($, header, footer,right) {
		class Longin {
			constructor() {
				this.change();
				this.denglu();
				this.zhuce();
			}

			change() {
				var _this = this;
				this.dl = $("#dl");
				this.zc = $("#zc");

				this.zc.on("click", function() {
					$("#login").hide();
					$("#register").show();
					_this.zc.css({
						"border-bottom": "1px solid #848484"
					})
					_this.dl.css({
						"border-bottom": "none"
					})
				})
				this.dl.on("click", function() {
					$("#login").show();
					$("#register").hide();
					_this.dl.css({
						"border-bottom": "1px solid #848484"
					})
					_this.zc.css({
						"border-bottom": "none"
					})
				})

			}
			denglu(){
				var _this = this;
				this.dlusername = $("#dlusername");
				this.dlpassword = $("#dlpassword");
				this.loginbtn = $("#loginbtn");
				if(localStorage.getItem("obj")){
					let obj1 = JSON.parse(localStorage.getItem("obj"));
				this.dlusername.val(obj1.username);
				this.dlpassword.val(obj1.password);
				}
				
				this.loginbtn.on("click", function(e) {
					e.preventDefault();
					let username = _this.dlusername.val();
					let password = _this.dlpassword.val();

					$.ajax({
						type: "POST",
						url: "http://localhost/api/v1/login.php",
						data: "username=" + username + "&password=" + password,
						success: function(res) {
							var res = JSON.parse(res);
							console.log(res);

							if (res.res_code === 1) {
								localStorage.setItem("username", username);
								if (confirm(res.res_message + "即将跳转首页")) {
									location.href = "../index.html";
								}

							} else {
								alert(res.res_message);
							}

						}
					});

				})
			}

			zhuce() {

				var mail = document.querySelector("#mail");
				var cpassword = document.querySelector("#zcpassword");
				var registerbtn = document.querySelector("#registerbtn");
				var check2 = document.querySelector("#check2");
				registerbtn.onclick = function(e) {
					e.preventDefault();
					let username = mail.value;
					let password = zcpassword.value;
					if (check2.checked) {
						$.ajax({
							type: "POST",
							url: "http://localhost/api/v1/register.php",
							data: "username=" + username + "&password=" + password,
							success: function(res) {
								var res = JSON.parse(res);
								console.log(res);

								if (res.res_code === 1) {
									let obj = {
										"username": username,
										"password": password
									}
									localStorage.setItem("obj", JSON.stringify(obj));
									if (confirm(res.res_message + "即将跳转登录页面")) {
										location.href = "/html/login.html";
									}

								} else {
									alert(res.res_message);
								}

							}
						})
					} else {
						confirm("请阅读协议并同意");
					}

				}

			}

		}
		return new Longin();

	})
})