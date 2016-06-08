/* jshint browserify:true,esnext:true,eqeqeq:true,undef:true,lastsemic:true,strict:true */
/* globals console:true */

function init(){
    "use strict";
    require('json-editor'); // defines window.JSONEditor
    /* defines a function accepting string, returning array of positive numbers or undefined */
    const positiveNumberArray = require('positive-number-array');
    window.JSONEditor.defaults.options.theme = 'bootstrap3';
    window.JSONEditor.defaults.options.iconlib = 'bootstrap3';
    /* suggested by json-editor README.md lines 1122-1165 */
    window.JSONEditor.defaults.resolvers.unshift(function(schema){
	if (schema.type === "array" && schema.format === "textarea" && schema.flavor==="positiveNumbers"){
	    return "positiveNumbers";
	}
    });
    /* from an examination of json-editor/src/editors/number.js */
    window.JSONEditor.defaults.editors.positiveNumbers = window.JSONEditor.defaults.editors.string.extend({
	sanitize: function(value){
	    return (positiveNumberArray(value) || []).join(" ");
	},
	getNumColumns: function(){
	    return 2;
	},
	getValue: function(){
	    return positiveNumberArray(this.value) || [];
	}
    });
    var editorElement = document.getElementById('editor');
    var editorOptions = {
	schema: { 
	    type: "object",
	    properties: {
		"favoriteNumbers": {
		    type: "array",
		    format: "textarea",
		    flavor: "positiveNumbers",
		    default: [1,2,3,5,8,13,21]
		}
	    }
	}
    };
    var editor = new window.JSONEditor(editorElement, editorOptions);
    editor.on('change', function(){
	console.log("detected editor change, new value follows");
	console.log(editor.getValue());
    });
}

document.addEventListener("DOMContentLoaded", function(event) { 
    "use strict";
    init();
});
