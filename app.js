Ext.application({
	name:  'EL',//EL = Enhancement Log
	
	controllers: ['Enhancement'],
	
	//sprich: in the launch-Property we add a function
	launch: function(){
		Ext.create('Ext.container.Viewport', {
			layout: 'fit',
			items: [{
				//xtype-Definition s. View-Klasse EnhancementGrid.js
				xtype: 'EnhancementGrid'
			}]
		});
	}
});