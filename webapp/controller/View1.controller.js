sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function(Controller,MessageToast) {
	"use strict";

	return Controller.extend("renova.egitimrenova.egitim1.controller.View1", {
		onPress : function(){
			MessageToast.show("DURACAK");
		},
		onAktar : function(){
			var vArea = this.getView().byId("inputArea").getValue();
			this.getView().byId("textArea").setText(vArea);
		},
		onDialog : function(){
			this._getDialog().open();
			var vArea = this.getView().byId("inputArea").getValue();
			sap.ui.getCore().byId("textDialogArea").setText(vArea);
		},
		_getDialog: function() {
			if (!this._dialog) {
				this._dialog = sap.ui.xmlfragment("renova.egitimrenova.egitim1.view.Dialog", this);
				this.getView().addDependent(this._dialog);
				jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this._dialog);
			}
			return this._dialog;
		},
	});
});