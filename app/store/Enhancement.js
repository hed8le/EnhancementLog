//Store

Ext.define('EL.store.Enhancement', {
	extend: 'Ext.data.Store',

	model: 'EL.model.Enhancement',

	//Inline data. Normalerweise holt man sich die Daten aus einem json-file.
	data: [{
		id: 1,
		title: 'Search Field Autocomplete',
		description: 'Could the main search field have an autocomplete facility to increase my productivity.'
	}]
});