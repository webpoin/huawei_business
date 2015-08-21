
	// 返回顶部
	!function(){
		
		var totop = document.createElement('div');
		totop.className = 'totop';
		totop.innerHTML = '<img src="images/totop.png"  />';

		var scroll = (function(screenh){
			return function(){
				var scroll = document.documentElement.scrollTop || document.body.scrollTop; 
				totop.style.display = scroll>screenh ? 'block':'none';
			}
		})(document.documentElement.clientHeight || document.body.clientHeight)

		window.onscroll = scroll;
		totop.onclick = function() {
			document.documentElement.scrollTop = document.body.scrollTop = 0;
			return false;
		}

		// 初始化
		document.body.appendChild(totop);
		scroll();
	}();