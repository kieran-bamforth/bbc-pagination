define(['jsonloader',  'newstickeritem', 'newstickeritemtemplate', 'newsticker'],
	function(jsonloader, newstickeritem, newstickeritemtemplate, newsticker) 
{
	// Initiate news feed loader & news ticker objects.
	var loader = new jsonloader(),
		newsTicker = new newsticker();
	/* When the news ticker paginated buttons are pressed,
		generate the HTML from template and insert into the page */
	newsTicker.paginatedButtonWasClicked = function(currentItem, nextItem, sender, clickEvent)
	{
		document.getElementById('news-ticker-item').innerHTML = Handlebars.templates.NewsTickerItemTemplate(nextItem)
		return true;
	}
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
			newsTickerItem.isLive = (currentStory.isLive=="true") ? true : false;
			newsTickerItem.isBreaking = (currentStory.isBreaking=="true") ? true : false;
			
			newsTicker.addItem(newsTickerItem);
		}
		
		// All good? build the Pagination device into the page & finished!
		newsTicker.buildNewsTicker(document.getElementById('news-ticker-nav'));
		document.getElementById('news-ticker-item').innerHTML = Handlebars.templates.NewsTickerItemTemplate(newsTicker.items[0]);
	}
	// Begin!
	loader.load('js/json/news-feed.json');
});
