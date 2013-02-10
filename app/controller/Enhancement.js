//Controller

Ext.define('EL.controller.Enhancement', {
	extend: 'Ext.app.Controller',

	stores: ['Enhancement'],
	models: ['Enhancement'],
	views: ['EnhancementGrid'],

	//Die Funktion init wird vor dem Application launch durchlaufen
	init: function() {
		//initialitation code
	}
});