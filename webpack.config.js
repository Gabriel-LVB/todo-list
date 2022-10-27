module.exports = {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|woff)$/i,
                type: "asset/resource",
            },
        ],
    },
};
