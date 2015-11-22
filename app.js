function sendAjax(){
	var email  = $('#mail').val();
	if(email===''){
		$('#error').text( "Not valid!" ).show().fadeOut( 1500 );
	}else{
		$.post('https://docs.google.com/forms/d/1jtXcvrvOxqOgsJ2DhFEY-WDf6ySHknyusnZpGU8MNtU/formResponse', {'entry.2001510779':email});
	}
}
