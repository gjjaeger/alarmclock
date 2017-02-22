var Alarmclock=require('./../js/alarmclock.js').nowModule;



$(document).ready(function() {
	var alarm = new Alarmclock();
	var now = alarm.getCurrentTime;
	var alarmTime;
	var printTime = function(){
		$('#time').text(now());
	};
	setInterval(printTime,1000);
	$('#alarmtime').on('click', function(){
		alarmTime=$('#alarm1').val();
		alarm.setAlarm(alarmTime);
		$('.showalarm').text("Alarm set at: " + alarmTime);
	});

	setInterval(
		function(){
			alarm.checkAlarm(alarmTime)
		},1000);
});

