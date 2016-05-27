define(
	'controller',
	['jquery'],
	function() {
		return {
			Controller: function(model, view){
				var self = this;
				
				view.elements.addBtn.bind('click', addItem);
				view.elements.listContainer.delegate('.edit', 'click', editItem);
				view.elements.listContainer.delegate('.item-delete', 'click', removeItem);
				
					function addItem(){
						var newItem = view.elements.input.val();
						
						model.addItem(newItem);
						view.renderList(model.data); 
						view.elements.input.val('');
					};
					
					
					function editItem(){
						var item = $(this).attr('data-value');
						var changedItem = view.elements.input.val();
						
						model.editItem(item, changedItem);
						view.renderList(model.data); 
						view.elements.input.val('');
					};
					
					
					function removeItem(){
						var item = $(this).attr('data-value');
						model.removeItem(item);
						view.renderList(model.data);
					}
			}
		};
	}
);