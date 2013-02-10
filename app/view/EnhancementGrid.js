//View

Ext.define('EL.view.EnhancementGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.EnhancementGrid',

	title: 'System Enhancements',
	//We bind the grid to the store "Enhancement". Von hier kommen die Daten.
	store: 'Enhancement',

	columns: [{
		header: 'Title',
		dataIndex: 'title',
		flex: 1
	}, {
		header: 'Enhancement Description',
		dataIndex: 'description',
		flex: 3
	}]
});