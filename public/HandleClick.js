function getStocks(){
		console.log("sometext1");

		var inputSym = document.getElementById("StockInput").value;
		//var inputSym = InputText.StockInput.value;
		// window.alert("sometext");
		console.log(inputSym);
		$.ajax({
			url: '/',
			type: 'POST',
			data: {symbol: inputSym}
		}).success(function(data) {
			console.log("hello");

			// $('#stocks')[0].innerHTML = JSON.stringify(data.message);

			// $('#stocks').append(JSON.stringify(data.data[0].securityData.eidData[0].length));
			// $('#stocks').append('<br>');

			$('#stocks')[0].innerHTML = JSON.stringify(data.data[0].securityData[0].security);

			$('#stocks').append('<br>');

			$('#stocks').append('$');

			$('#stocks').append(JSON.stringify(data.data[0].securityData[0].fieldData.PX_LAST));
			$('#stocks').append('<br>');
			$('#stocks').append('<br>');


			// $('#stocks').append(JSON.stringify(data.data[0].securityData.eidData[0].length));
			// $('#stocks').append('<br>');



			// $('#stocks').append(JSON.stringify(data));
			//document.getElementById("formId").reset()

		}).error(function(){
			console.log("BLAH");
		})

		console.log("someText2");
};

$(document).ready(function(){
	$("#button1").click(function(){
		getStocks();
	});

	setInterval(function(){getStocks()}, 500);
});