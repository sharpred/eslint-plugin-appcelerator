/**
 * @fileoverview appcelerator titanium environment globals
 * @author Paul Ryan
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------
module.exports = {
    environments: {
        appcelerator: {
            globals: {
                Alloy: true,
                Ti: true,
                Titanium: true,
                OS_ANDROID: false,
                OS_IOS: false
            }
        }
    }
}
