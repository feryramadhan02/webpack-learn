module.exports = {
    presets: [
        [
            "@babel/preset-env", {
                "modules": false,
                "targets": {
                    //compatible dengan browser versi brp
                    "browsers": [
                        "last 2 Chrome versions",
                        "last 2 Firefox versions",
                        "last 2 Safari versions",
                        "last 2 iOS versions",
                        "last 1 Android version",
                        "ie 11"
                    ]
                }
            }
        ],
        "@babel/preset-react"
    ],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}