define(function() 
{
	return function() 
	{
		return {
			load: function(filePath)
			{
				// Create XMLHttpRequest object
				if (window.XMLHttpRequest)
					request = new XMLHttpRequest();
				else
					request = new ActiveXObject("Microsoft.XMLHTTP");
				
				// Execute the request.
				request.closure = this;
				request.open("GET",filePath,true);
				request.send();
				
				/* 	Listen for callback
						With extra time, we would check for other error's (such as 404)
						and invoke a different function instead - such as jsonDidNotLoad */
				request.onload = function(event)
				{
					if(this.status == 200)
						this.closure.jsonDidLoad(JSON.parse(this.responseText));
				}
			},
			jsonDidLoad: function(jsonObject)
			{
			}
		}
	}
});