define(['newstickertemplate', 'handlebars'], 
	function(newstickertemplate, handlebars) 
{
	return function() 
	{
		return {
			activeLink: 0,
			maxLinkCount: 0, 
			previousLinkText: "previous",
			nextLinkText: "next",
			previousLinkIcon: "prev-icon",
			nextLinkIcon: "next-icon",
			previousLinkPosition: 0,
			nextLinkPosition: 1,
			truncationCharacter: "...",
			truncationLinkCountInner: 2, 
			truncationLinkCountOuter: 2,
			truncationMinimimHiddenLinkCount: 2, 
			linksPosition: 1,
			items: new Array(),
			addItem: function(item)
			{
				this.items.push(item);
			},
			buildNewsTicker: function(DOMElement)
			{
				handlebars.registerHelper('indexNumber', function(index) {
					return index+=1;
				});
				DOMElement.innerHTML = handlebars.templates.NewsTickerTemplate({sender:this});
			},
			paginatedButtonWasClicked: function(prevItem, nextItem, sender)
			{
			}
		}
	}
});