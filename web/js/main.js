define(['jsonloader',  'newstickeritem', 'newsticker'],
	function(jsonloader, newstickeritem, newsticker) 
{
	// Initiate news feed loader & news ticker objects.
	var loader = new jsonloader(),
		newsTicker = new newsticker();
	// When news feed has loaded, do this.
	loader.jsonDidLoad = function(jsonObject)
	{
		/* For every story in the news feed, Create a news ticker item and add it 
			into to our news ticker! */
		for(entry in jsonObject.entries)
		{
			var newsTickerItem = new newstickeritem(),
				currentStory = jsonObject.entries[entry]
			newsTickerItem.headline = currentStory.headline;
			newsTickerItem.prompt = currentStory.prompt;
			newsTickerItem.url = currentStory.url;
			newsTickerItem.isLive = currentStory.isLive;
			newsTickerItem.isBreaking = currentStory.isBreaking;
			
			newsTicker.addItem(newsTickerItem);
		}
		
		// All good? build the Pagination device into the page & finished!
		newsTicker.buildNewsTicker(document.getElementById('news-ticker-nav'));
	}
	// Begin!
	loader.load('js/json/news-feed.json');
});
