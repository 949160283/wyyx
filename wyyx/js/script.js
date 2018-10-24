window.onload =function(){
	var span = document.getElementById('span')
	var remove = document.getElementById('remove')
	var input = document.getElementsByClassName('input')
	var div = document.getElementsByClassName('gg4')
	div = Array.prototype.slice.call(div,0)
	span.onclick = function(){
		div.forEach(function(item){
			remove.removeChild(item)
		})
		
	}
}