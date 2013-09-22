(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['NewsTickerTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this, helperMissing=helpers.helperMissing, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\r\n			<li class=\"link ";
  options = {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data};
  stack2 = ((stack1 = helpers.firstIteration || depth0.firstIteration),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "firstIteration", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\" data-indexnumber=\""
    + escapeExpression(((stack1 = ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.indexNumber || depth0.indexNumber),stack1 ? stack1.call(depth0, ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options) : helperMissing.call(depth0, "indexNumber", ((stack1 = data),stack1 == null || stack1 === false ? stack1 : stack1.index), options)))
    + "</li>\r\n		";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "selected";
  }

  buffer += "<section class=\"news-ticker-pagination-device\" id=\"ntpd"
    + escapeExpression(((stack1 = ((stack1 = depth0.sender),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n	<ul class=\"inline-list\">\r\n		<li class=\"previous disabled\"><span class=\"previous-icon\"></span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.sender),stack1 == null || stack1 === false ? stack1 : stack1.previousLinkText)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\r\n		";
  stack2 = helpers.each.call(depth0, ((stack1 = depth0.sender),stack1 == null || stack1 === false ? stack1 : stack1.items), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n		<li class=\"next\"><span class=\"next-icon\"></span>"
    + escapeExpression(((stack1 = ((stack1 = depth0.sender),stack1 == null || stack1 === false ? stack1 : stack1.nextLinkText)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\r\n	</ul>\r\n</section>";
  return buffer;
  });
})();