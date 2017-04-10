// BgBox *********************************************************************************************************************
var BgBox =
{
	width  : 40,
	height : 60,
	matrix : [],
	
	generateMatrix : function(x, y)
	{
		for(var i=1; i<=this.height; i++){
			var arr = []
			for(var j=1; j<=this.width; j++){
				arr.push(0)
			}
			this.matrix.push(arr)
		}

		this.matrix[y][x] = 1
	},

	generateHtml : function()
	{
		for(var r=0; r<this.matrix.length; r++){
			var rowHtml = "<div>"
			for(var c=0; c<this.matrix[r].length; c++){
				if(this.matrix[r][c] == 1){
					rowHtml = rowHtml + "<div class='pixel' style='background:red'></div>"
				}else{
					rowHtml = rowHtml + "<div class='pixel'></div>"
				}
			}
			rowHtml = rowHtml + "</div>"
			$("#BgBox").append(rowHtml)
		}

		var BgWidth = this.width * 10
		$("#BgBox").css("width", BgWidth+"px")
	},
}