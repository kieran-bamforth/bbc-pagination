(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['NewsTickerTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function", self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, options;
  buffer += "\r\n		<li>";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexNumber || depth0.indexNumber),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "indexNumber", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</li>\r\n	";
  return buffer;
  }

  buffer += "<ul class=\"news-ticker-pagination-device\">\r\n	<li class=\"previous\"><span class=\"previous-icon\"></span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.sender),stack1 == null || stack1 === false ? stack1 : stack1.previousLinkText)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\r\n	";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.sender),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n	<li class=\"next\"><span class=\"next-icon\"></span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.sender),stack1 == null || stack1 === false ? stack1 : stack1.nextLinkText)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\r\n</ul>";
  return buffer;
  });
})();