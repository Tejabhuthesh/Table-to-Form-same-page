sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("idarra.arraytotable.controller.View1", {
            onInit: function () {
                var data = {
                    "array1": [
                        {
                            "Name": "Teja",
                            "Age": "23",
                            "Designation": "intern"
                        },
                        {
                            "Name": "Bhuthesh",
                            "Age": "21",
                            "Designation": "fiori"
                        },
                        {
                            "Name": "Sandeep",
                            "Age": "25",
                            "Designation": "employee"
                        }
                    ]
                };

                // var path = jQuery.sap.getModulePath("idarra.arraytotable", "/model/array.json")
                var oModel = new sap.ui.model.json.JSONModel(data);
                // oModel.setData(data);
                this.getView().setModel(oModel, "Data1");
            },

            onPress: function (oEvent) {
                // var key = oEvent.oSource.mAggregations;
                var key=oEvent.oSource.mAggregations.cells[0].mProperties;
     
               

                var array2 = [
                    {
                        "Name": "Teja",
                        "Age": "23",
                        "Designation": "intern"
                    },
                    {
                        "Name": "Bhuthesh",
                        "Age": "21",
                        "Designation": "fiori"
                    },
                    {
                        "Name": "Sandeep",
                        "Age": "25",
                        "Designation": "employee"
                    }
                ];


                var data2 = [];

                for (var i = 0; i < array2.length; i++) {
                    if (key.text == array2[i].Name) {
                        data2.push(array2[i]);
                        var oModel = new sap.ui.model.json.JSONModel();
                        oModel.setData(data2);
                        this.getView().setModel(oModel, "Data2");
                    }
                }
            }
        });
    });
