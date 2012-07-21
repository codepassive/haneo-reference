Ext.application({
    models: ["Content", "Category"],

    //controllers: ["main"],

    name: 'Reference',

    requires: [
		'Ext.Msg',
	],

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
	
		// Load Data from Storage
		Reference.store.load(function(records, operation, success) {
			Ext.Array.each(records, function(record, index) {
				console.log(record.data);
				if (index >= records.length - 1) {
					Ext.fly('appLoadingIndicator').destroy();
				}
			});
		});
		
		
		// Populate Categories
		
		
		
		// Destroy the Loading Screen
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
        // Destroy the #appLoadingIndicator element

        // Initialize the main view
        //Reference.screen.Main = Ext.Viewport.add(Ext.create('Reference.view.Main'));
		/*Reference.screen = Ext.Viewport.add(Ext.create('Ext.Container', {
			fullscreen: true,
			items: [
				{
					xtype : 'toolbar',
					docked: 'top',
					title: 'ㅎHaneo: Chek'
				},
				{
					xtype: 'titlebar',
					docked: 'bottom',
					items: [
						{
							iconCls: 'settings',
							iconMask: true,
							align: 'right'
						}
					]
				}
			]
		}));*/
		/*
		Ext.Viewport.add({
			xtype: 'container',
			docked: 'bottom',
			cls: 'dockbarBottom',
			html: 'text'
		});
		
		Ext.Viewport.add({
			xtype: 'carousel',
			fullscreen: true,
			direction: 'horizontal',

			defaults: {
				styleHtmlContent: true
			},

			items: [
				{	
					cls: 'hey1',
					html : new Ext.Template('<div style="position:absolute;bottom:0;width:90%;margin-bottom:10%;color:#fff;background:rgba(0,0,0,0.5);"><div style="padding:20px;"><h1 style="color:#fff;font-weight:bold;line-height:120%;">Songs 노래</h1><p style="font-size:110%;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam est sapien, molestie in venenatis sit amet, mattis nec urna. Fusce dictum tortor at est lacinia pretium.</p></div></div>').apply(),
					style: 'background-color: #f0f0f0;'
				},
				{
					cls: 'hey2',
					html : 'Item 2',
					style: 'background-color: #759E60'
				},
				{
					cls: 'hey3',
					html : 'Item 3'
				},
			]
		});*/
		
		
		
		
		
    },
});
