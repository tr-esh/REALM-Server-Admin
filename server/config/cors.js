const whitelist = [
    'http://localhost:8080',
    'http://localhost:3000',
    'https://www.realm-server.com'
];

export const corsOption = {
    origin: function (origin, callback) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            console.log(origin, 'is blocked by CORS');
        }
    },
    credentials: true,
};

