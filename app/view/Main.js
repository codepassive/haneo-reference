Ext.define("Reference.view.Main", {
    extend: 'Ext.Panel',
	ui: 'haneo-chek',
	
    config: {
		layout: 'card',
		
		defaults: {
			styleHtmlContent: true,
			showAnimation: 'fade',
		},
		
        items: [
			/**
			 * Main View
			 */
			{	
				title: 'Categories',
				xtype: 'container',
				layout: 'fit',
				cls: 'reference-screen',
				id: 'reference-screen-main',
				style: 'background:#fff;',
				padding: 0,
				fullscreen: true,
				items: [
					{
						xtype: 'toolbar',
						docked: 'top',
						id: 'screen-toolbar',
						border: 0,
						items: [
							{
								xtype: 'image',
								src: 'resources/images/logo.png',
								margin: '0 16',
								id: 'app-logo',
								height: 32,
								width: 135
							},
							{
								xtype: 'spacer'
							},
							{
								xtype: 'panel',
								html: '<p class="icon-reorder"></p>',
								padding: '5 20',
								style: 'border-left:1px solid #f0f0f0;font-size:28px;color:#555;'
							}
						]
					},
					{
						xtype: 'container',
						id: 'reference-screen-main-grid',
						layout: 'vbox',
						defaults: {
							styleHtmlContent: true,
						}
					}
					
				]
			},
			
			/**
			 * Catalog View
			 */
			{	
				title: 'Catalog',
				xtype: 'container',
				layout: 'fit',
				scrollable: true,
				cls: 'reference-screen',
				id: 'reference-screen-catalog',
				items: [
					{
						xtype: 'titlebar',
						title: 'Catalog',
						docked: 'top'
					},
					{
						xtype: 'container',
						html: 'this is the catalog grid',
					}
					
				]
			},
			
			/**
			 * Read View
			 */
			{	
				title: 'Reading',
				xtype: 'container',
				html: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas justo metus, eleifend nec hendrerit vel, consectetur non purus. Phasellus purus tortor, facilisis sed malesuada sit amet, adipiscing quis nisl. Suspendisse odio odio, pellentesque vitae venenatis vitae, ultricies ut arcu. In sodales dictum nisl at posuere. Ut euismod augue in neque facilisis vehicula eget eu odio. Vivamus vel diam libero. Phasellus venenatis bibendum odio vel condimentum. Phasellus pharetra, lacus ac mattis adipiscing, elit elit aliquam turpis, a scelerisque ipsum mi at odio. Aliquam a tristique nisl. Vivamus odio nisl, tincidunt non congue id, tincidunt sed magna.</p><p>Etiam sollicitudin tristique mauris et posuere. Duis fermentum ullamcorper lectus at vestibulum. Proin blandit, tortor in mollis sagittis, libero tellus posuere lorem, ut tempor urna velit a ante. Phasellus vitae pellentesque mauris. Aliquam metus tortor, mattis nec gravida at, aliquet nec elit. Quisque volutpat eleifend consectetur. Ut venenatis eleifend nunc vitae sollicitudin. Morbi imperdiet, tellus eu imperdiet fermentum, metus erat tristique massa, eget faucibus sapien felis nec elit.</p><p>Nulla facilisi. Aliquam varius, velit at faucibus vestibulum, nibh purus convallis velit, tincidunt pretium arcu tellus vel erat. Duis iaculis malesuada luctus. Maecenas massa metus, gravida nec vehicula a, auctor id justo. Donec tortor mi, porta eu tincidunt ut, auctor nec nulla. Etiam ac turpis rhoncus felis adipiscing hendrerit non id diam. Nunc vel cursus diam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur vitae pellentesque est.</p><p>Sed velit neque, consequat quis tincidunt et, molestie in quam. Nullam elementum pellentesque neque, facilisis lobortis arcu rhoncus a. Ut ut lacus tortor. Nulla vitae arcu eget libero condimentum dictum. Vestibulum sit amet congue risus. In rhoncus ipsum pretium dui lobortis posuere. Morbi sem velit, viverra sed lobortis ut, blandit non purus. Fusce diam tortor, ullamcorper aliquam scelerisque nec, pulvinar ac libero. Proin ac justo diam. In hac habitasse platea dictumst. Etiam ut nisl dolor, ac hendrerit mauris. Aenean arcu purus, rhoncus vel egestas molestie, molestie volutpat nibh. Cras faucibus risus sit amet ante volutpat laoreet. Fusce gravida, leo ac accumsan eleifend, tellus nunc vulputate quam, id sagittis sapien augue in libero. Praesent non diam mauris, id pretium mauris.</p>',
				scrollable: true,
				cls: 'reference-screen',
				id: 'reference-screen-reading',
			},
			
			/**
			 * Settings View
			 */
			{	
				title: 'Settings',
				xtype: 'container',
				cls: 'reference-screen',
				id: 'reference-screen-settings'
			}
		],
    },
	
	/**
	 * Make a Category Screen
	 */
	addCategoryScreen: function(data) {
		var level = (data.level == 1) ? 'Intermediate': 'Easy';
		var favorited = (data.favorited) ? 'd': '';

		Ext.ComponentManager.get('reference-screen-main-grid').add({

			xtype: 'container',
			layout: 'hbox',
			flex: 1,
			items:[
			{
				xtype:'panel',
				style: 'background:#333;',
				ui: 'action',
				flex: 1,
				margin: '0 10'
			},
			{
				xtype:'panel',
				style: 'background:#333;',
				ui: 'action',
				flex: 1,
				margin: '0 10'
			}

		});
		
		/*{
					items: [
						{
							xtype: 'panel',
							html: '<p class="item_count" style="float:left;">' + data.items + '</p><p class="favorite' + favorited + '" style="float:right;">&nbsp;</p>',
							margin: 20,
							docked: 'top'
						},
						{
							xtype: 'panel',
							html: [
								'<h1 style="font-size:200%;">' + data.name + '</h1><p style="font-size:120%;">' + data.description + '</p>',
								'<div style=""></div>'
							].join(""),
							margin: 20,
							docked: 'bottom'
						}
					],
					style: "background: #f0f0f0 url('" + data.cover + "') no-repeat center scroll; background-size: cover;",
					cls: 'category-screen ' + data.theme,
					id: 'category-screen-' + data.id,
					
					/*listeners: [
						{
							element: 'element',
							event: 'tap',
							fn: function() {
								console.log("Opening Category " + data.name.toUpperCase());
							}
						}
					]*/
				});
		console.log('Creating ' + data.name.toUpperCase() + ' Screen');
		return this;
	},
});
