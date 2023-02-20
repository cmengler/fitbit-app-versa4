const extraBuildTargets = {
    hera: {
        displayName: 'Fitbit Versa 4',
        minSDKVersion: '7.1.0',
        platform: ['20001.1.1+'],
        resourceFilterTag: '336x336',
        specs: {
            screenSize: {
                width: 336,
                height: 336,
            },
        },
    },
};
exports.default = extraBuildTargets;
