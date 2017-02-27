/**
 * BetterDiscord Utilities Module
 * Copyright (c) 2015-present Jiiks - https://jiiks.net
 * All rights reserved.
 * https://github.com/Jiiks/BetterDiscordApp - https://betterdiscord.net
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree. 
*/

'use strict';

const fs = require('fs');

class Utils {

    static tryParse(data) {
        try {
            return JSON.parse(data);
        }catch(err) {
            console.log(err);
            return null;
        }
    }

    static fileExistsSync(path) {
        try {
            return fs.statSync(path).isFile();
        }catch(err) {
            return false;
        }
    }

    static readFileSync(path, encoding) {
        if(!this.fileExistsSync(path)) return null;
        return fs.readFileSync(path, encoding || 'utf8');
    }

    static writeFileSync(path, data, encoding) {
        try {
            fs.writeFileSync(path, data, encoding || 'utf8');
            return true;
        } catch(err) {
            return false;
        }
    }

    static readDir(path, cb) {
        fs.readdir(path, (err, files) => {
            if (err) {
                cb(null);
                return;
            }
            cb(files);
        });
    }

}

module.exports = Utils;