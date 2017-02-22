Alarmclock = function() {
	// this.alarm = alarm;
}

Alarmclock.prototype.setAlarm=function(alarm){
	this.alarm=alarm;
	console.log("In Set Alarm "+this.alarm);
	console.log(this);
}

Alarmclock.prototype.getAlarm=function(){
	return this.alarm;
}

Alarmclock.prototype.getCurrentTime=function(){
	var currenttime = moment(new Date()).format('HH:mm:ss');
	return currenttime;
}


Alarmclock.prototype.checkAlarm= function(alarmTime){
	var now = moment(new Date()).format('HH:mm');
	if (now==alarmTime){
		$("#Alarmring").text("GET UPPPPP");
	}
}

exports.nowModule=Alarmclock;

