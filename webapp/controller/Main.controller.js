sap.ui.define(["./BaseController", "sap/ui/model/json/JSONModel"], function (BaseController, JSONModel) {
	"use strict";

	return BaseController.extend("com.myorg.myapp.controller.Main", {
		onInit : function(){
			const model = new JSONModel({
				hours : "3.45"	// Dit komt uit de odata service
			});
			this.getView().setModel(model, "model");
		}, 

		onChangeUren : function(oEvt){
			const oSource = oEvt.getSource();
			const hours = oSource.getValue();
			const floatHours = parseFloat(hours);

			console.log({hours});	// string

			// check of uren > 0 en kleiner dan < 24
			if(floatHours !== 'NaN' && floatHours > 0){
				console.log(`Hours > 0`);
			}

		},

		onPressSetLanguage : function(sLanguage){
			sap.ui.getCore().getConfiguration().setLanguage(sLanguage);
		},

		onPressSubmit : function(){
			// de payload moet uren bevatten in het formaat van de odata service (dus "3.45").
			const model = this.getView().getModel("model");
			const hours = model.getProperty("/hours");
			console.log(`Submitting`);
			console.log({hours});
		}

	});
});
