module.exports = {
    mode: "development",
    output: {
        globalObject: "self",
    },
    module: {
        rules: [
            {
                test: /\.rs$/,
                use: ['raw-loader'],
            }
        ],
    },
    // It is needed for firefox works
    devServer: {
        headers: {
            'Cross-Origin-Embedder-Policy': 'require-corp',
            'Cross-Origin-Opener-Policy': 'same-origin'
        },
    },
};
