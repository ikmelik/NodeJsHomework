const fs = require('fs');

function readJson() {
    let readJsonData = {};
    let errorObj = {};

    fs.readFile('./someJson.json', (err, data) => {
        if (err) throw err;

        readJsonData = JSON.parse(data);

        for (let property in readJsonData) {
            if (property == 'flag') {
                if (typeof readJsonData[property] === 'boolean') {

                } else {
                    errorObj["flag"] = 'not boolean';
                }
            }

            if (property == 'myPromises') {
                if (Array.isArray(readJsonData[property])) {

                } else {
                    errorObj['myPromises'] = 'is not Array';
                }
            }

            if (property == 'element') {
                if (typeof readJsonData[property] === 'object') {

                } else {
                    errorObj[element] = 'is not an Object';
                }
            }

            if (property == 'screenshot') {
                if (readJsonData[property] === null) {

                } else {
                    errorObj['screenshot'] = 'is not null';
                }
            }

            if (property == 'elementText') {
                if (typeof readJsonData[property] === 'string') {

                } else {
                    errorObj['element'] = 'is not String';
                }
            }

            if (property == 'allElementsText') {
                if (readJsonData[property].includes('const') === true) {

                } else {
                    errorObj['allElementsText'] = 'does not include const';
                }
            }

            if (property == 'counter') {
                if (readJsonData[property] > 10) {

                } else {
                    errorObj['counter'] = 'less or equal to 10';
                }
            }

            if (property == 'Common') {
                if (readJsonData[property] > 10) {

                } else {
                    errorObj['Common'] = 'is not equal to Common';
                }
            }

            if (property == 'const') {
                if (readJsonData[property].localeCompare("FiRst", undefined, { sensitivity: 'accent' }) == 0) {

                } else {
                    errorObj.const = 'is not equal to FiRst case insensitive';
                }
            }

            if (property == 'parameters') {
                if (readJsonData[property].length == 8) {

                } else {
                    errorObj['parameters'] = 'length is not equal to 8';
                }
            }

            if (property == 'description') {
                if (readJsonData[property].length > 5 && readJsonData[property].length < 13) {

                } else {
                    errorObj['description'] = 'is not more than 5 and/or not less than 13';
                }
            }
        }

        if (Object.getOwnPropertyNames(errorObj).length === 0) {
            console.log("OK")
        } else {

            fs.writeFileSync('./whyFailed.json', JSON.stringify(errorObj),
                function (err) {
                    if (err) throw err;
                    console.log('Something went wrong');
                },
                console.log("New error file is created")
            );

        }

    })
};

readJson();

module.exports = {
    readJson: readJson
}
