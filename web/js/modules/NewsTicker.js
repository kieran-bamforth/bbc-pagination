define(['newstickertemplate', 'handlebars'],
	function(newstickertemplate, handlebars)
{
	var newsTickerID = -1;

	return function()
	{
		newsTickerID++;
		return {
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

			id: newsTickerID,
			DOMElement: null,
			items: new Array(),
			links: null,
			currentItemIndex: 0,

			addItem: function(item)
			{
				this.items.push(item);
			},
			buildNewsTicker: function(DOMElement)
			{
				// Create pagination device DOMElement.
				handlebars.registerHelper('firstIteration', function(options, context) {
					if(options == 0)
						return context.fn(this);
					return '';
				});
				handlebars.registerHelper('indexNumber', function(index) {
					return index+=1;
				});
				DOMElement.innerHTML = handlebars.templates.NewsTickerTemplate({sender:this});
				this.DOMElement = document.getElementById("ntpd"+this.id);

				// Assign behaviour when buttons in paginated devices are clicked
				var newsTicker = this;
				this.links = this.DOMElement.getElementsByClassName('link');
				for(var link = 0; link < this.links.length; link++)
				{
					this.links[link].addEventListener('click', function(clickEvent)
					{
						var currentItemIndex = newsTicker.currentItemIndex,
							nextItemIndex = this.getAttribute("data-indexnumber");
						/* if current/nextItemIndex are the same, then the user has clicked
							on the same story that is already displaying. Abort! */
						if(currentItemIndex == nextItemIndex) return false;
						var currentItem = newsTicker.items[currentItemIndex],
							nextItem = newsTicker.items[nextItemIndex];

						if(newsTicker.paginatedButtonWasClicked(currentItem, nextItem, newsTicker, clickEvent))
						{
							// Set current story.
							newsTicker.currentItemIndex = nextItemIndex;
							// Set CSS classes for prev / next then links.
							var prevLink = newsTicker.DOMElement.getElementsByClassName('previous')[0],
								newLink = newsTicker.DOMElement.getElementsByClassName('next')[0];
							prevLink.className = "previous"+((nextItemIndex == 0)? " disabled" : "");
							newLink.className = "next"+((nextItemIndex == newsTicker.links.length-1)? " disabled" : "");
							for(var link = 0; link < newsTicker.links.length; link++)
								 newsTicker.links[link].className = "link";
							this.className = "link selected";
						}
					});
				}
			},
			/* Occurs when a paginated button is clicked.
				This function should return true to allow navigation to the next item,
				or return false to cancel it and remain on the current item. */
			paginatedButtonWasClicked: function(currentItem, nextItem, sender, clickEvent)
			{
				return true;
			}
		}
	}
});