(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['NewsTickerItemTemplate'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  return "breaking-story";
  }

function program3(depth0,data) {
  
  
  return "live-story";
  }

  buffer += "<article class=\"news-ticker-story\">\r\n	<h3 class=\"";
  stack1 = helpers['if'].call(depth0, depth0.isBreaking, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " ";
  stack1 = helpers['if'].call(depth0, depth0.isLive, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\"  >";
  if (stack1 = helpers.headline) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.headline; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\r\n	<!--<p>";
  if (stack1 = helpers.prompt) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.prompt; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "<p>-->\r\n	<a href=\"http://www.bbc.co.uk/";
  if (stack1 = helpers.url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.url; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">Read More</a>\r\n</article>";
  return buffer;
  });
})();