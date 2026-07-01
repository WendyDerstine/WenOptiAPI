const locations = require('../../data/chartwell-locations.json');

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

    const { province, city, care } = event.queryStringParameters || {};

    const provinceKey = (province || 'ontario').toLowerCase();
    let data = locations[provinceKey];

    if (!data) {
        return {
            statusCode: 404,
            headers: CORS_HEADERS,
            body: JSON.stringify({ error: `No locations found for province: ${provinceKey}` }),
        };
    }

    if (city) {
        data = data.filter(l => l.city.toLowerCase() === city.toLowerCase());
    }

    if (care) {
        data = data.filter(l =>
            l.careTypes.some(c => c.toLowerCase().includes(care.toLowerCase()))
        );
    }

    return {
        statusCode: 200,
        headers: CORS_HEADERS,
        body: JSON.stringify({ province: provinceKey, total: data.length, locations: data }),
    };
};
