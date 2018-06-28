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
                _: true,
                Alloy: true,
                Backbone: true,
                DIST_ADHOC: false,
                DIST_STORE: false,
                DIST_PRODUCTION: false,
                ENV_DEV: false,
                ENV_TEST: false,
                ENV_PRODUCTION: false,
                L: true,
                OS_ANDROID: false,
                OS_IOS: false,
                OS_MOBILEWEB: false,
                OS_WINDOWS: false,
                updateUI: false,
                Ti: true,
                Titanium: true,
                Widget: false,
            }
        }
    }
}