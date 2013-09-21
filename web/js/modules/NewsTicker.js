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
			addItem: function(item)
			{
			},
			buildNewsTicker: function(DOMElement)
			{
			},
			paginatedButtonWasClicked: function(prevItem, nextItem, sender)
			{
			}
		}
	}
});