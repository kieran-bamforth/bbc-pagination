define(['newstickertemplate', 'handlebars'],
	function(newstickertemplate, handlebars)
{
	var newsTickerID = -1;

	return function()
	{
		newsTickerID++;
		return {
			maxLinkCount: 11,
			previousLinkText: "previous",
			nextLinkText: "next",
			previousLinkIcon: "prev-icon",
			nextLinkIcon: "next-icon",
			previousLinkPosition: 0,
			nextLinkPosition: 1,
			truncationCharacter: "...", // The character used to hide items in pagination. 
			truncationLinkCountInner: 2, // The amount of links to show on either side of the active item.
			truncationLinkCountOuter: 2, // The amount of links to always show on the beginning and end of the paginated list.
			truncationMinimimHiddenLinkCount: 2, // The amount of hidden links required to show the truncation character.
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
							// Set styles for prev / next buttons and then set the links styles.
							var prevLink = newsTicker.DOMElement.getElementsByClassName('previous')[0],
								newLink = newsTicker.DOMElement.getElementsByClassName('next')[0];
							prevLink.className = "previous"+((nextItemIndex == 0)? " disabled" : "");
							newLink.className = "next"+((nextItemIndex == newsTicker.links.length-1)? " disabled" : "");
							for(var link = 0; link < newsTicker.links.length; link++)
								 newsTicker.links[link].className = "link";
							this.className = "link selected";
							// All styled up, final step: paginate!
							newsTicker.paginate();
						}
					});
				}
			},
			paginate: function()
			{
				/* For pagination to be successful there needs to be enough links to vouch for
					the need of pagination, i.e there should be enough items to require at least 
					one set of ellipses - therefore we need to create a boundary. */
				var currentItemIndex = parseInt(this.currentItemIndex)+1;
				var boundary = this.truncationLinkCountOuter + this.truncationMinimimHiddenLinkCount + this.truncationLinkCountInner + 1;
				var minimumAmountOfLinksRequiredForPagination = boundary + this.truncationLinkCountInner + this.truncationLinkCountOuter;
				if(this.links.length >= minimumAmountOfLinksRequiredForPagination)
				{
					var output = Array(this.links[0], this.links[1]); // The indexes of the items that will be visible. -1 means elipsis.
					
					/* Okay we made it here so begin paginating. If the current link is inside the lower
						 or upper boundary, we only need to generate one set of ellipsis. */
					if(currentItemIndex < boundary)
					{
						for(var i=this.truncationLinkCountOuter; i<boundary; i++)
							output.push(this.links[i]);
						output.push(-1);
					}
					else if(currentItemIndex > (this.links.length+1-boundary))
					{
						output.push(-1);
						// The links
					}
					// If we make it here, we need 2 sets of ellipses. 
					else
					{
						output.push(-1);
						// The links
						output.push(-1);
					}
					output.push(this.links[this.links.length-2], this.links[this.links.length-1]);
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