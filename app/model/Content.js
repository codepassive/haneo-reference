Ext.define('Reference.model.Content', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'id', type: 'int'},
            {name: 'category_id', type: 'int'},
            {name: 'title', type: 'string'},
            {name: 'description', type: 'string'},
            {name: 'author', type: 'string'},
            {name: 'excerpt', type: 'string'},
            {name: 'views', type: 'int', defaultValue: 0},
            {name: 'cover', type: 'string'},
            {name: 'favorited', type: 'boolean', defaultValue: false},
            {name: 'level', type: 'int', defaultValue: 0},
            {name: 'path', type: 'string'},
        ],
		belongsTo: 'Reference.model.Category'
    }
});