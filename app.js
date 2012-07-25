Ext.application({
    name: 'Reference',
    requires: ['Ext.Msg'],
	
	controllers: ["Main"],
    models: ["Content", "Category"],
	stores: [],
    views: ['Main'],
	
    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
		console.log('1. Launching App');
	
		// Load Local Data from Storage
		Reference.store.load(function(records, operation, success) {
			// We make the main Screen
			Reference.Screens = Ext.Viewport.add(Ext.create('Reference.view.Main'));
			console.log('2. Building Main Screen');
			
			Ext.Array.each(records, function(record, index) {
				// build screens from the category data
				// Reference.Screens.addCategoryScreen(record.data, index);
				
				// final category was loaded
				if (index >= records.length - 1) {
					console.log('3. Showing Main Screen');
				}
			});
		});
    },
});