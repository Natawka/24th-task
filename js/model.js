define(
	'model',
	['jquery'],
	function() {
		return {
			Model: function (){
				var self = this; 
				
				self.data = [];
				
				self.addItem = function(item){ 
					if(item.length === 0){
						return;
					}
					
					self.data.push(item); 
					
					return self.data; 
				};
				
				self.removeItem = function(item){
					var index = self.data.indexOf(item); 
					
					if (index === -1){
						return;
					}
					
					self.data.splice(index, 1);
					
					return self.data;
				};
				
				
				
				self.editItem = function(item, updatedItem){
					
					//var target = self.data.indexOf(item);
					//	if (target === -1) return;
					//	self.data[target] = updatedItem;
						//return self.data;
					
					
					var target = self.data.indexOf(item);
					var changedItem = updatedItem;
					self.data.splice(target, 1, changedItem);
					
					return self.data;
				};
				
				
			}
		};
	}
);