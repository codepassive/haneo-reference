Ext.define('Reference.model.Category', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'name', type: 'string'},
            {name: 'description', type: 'string'},
            {name: 'last_updated', type: 'string'},
            {name: 'cover', type: 'string'},
            {name: 'favorited', type: 'boolean', defaultValue: false},
            {name: 'level', type: 'int', defaultValue: 0}
        ],
		hasMany: 'Reference.model.Content'
    }
});

Reference.store = Ext.create('Ext.data.Store', {
    model: 'Reference.model.Category',
	autoLoad: true,
    proxy: {
        type: 'ajax',
        url : 'store/categories.json',
        reader: {
            type: 'json'
        }
    }
});