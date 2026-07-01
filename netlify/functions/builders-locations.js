const locations = require('../../data/builders-locations.json');

const CORS_HEADERS = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
};

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 204, headers: CORS_HEADERS, body: '' };
    }

    const { zip, facilityType } = event.queryStringParameters || {};

    let data = locations;

    if (zip) {
        data = data.filter(l => l.zip === zip);
    }

    if (facilityType) {
        data = data.filter(l =>
            l.facilityTypes.some(f => f.toLowerCase().includes(facilityType.toLowerCase()))
        );
    }

    return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ total: data.length, locations: data }),
    };
};
