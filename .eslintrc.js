module.exports = {
    env: {
        es6: true,
        browser: true
    },
    parser: "babel-eslint",
    extends: [
        "airbnb",
        "airbnb/hooks",
        "plugin:prettier/recommended",
        "prettier/react"
    ],
    globals: {
        $: "readonly"
    },
    rules: {
        "linebreak-style": "off",
        "func-names": "off",
        "react/jsx-props-no-spreading": "off",
        "react/jsx-filename-extension": [1, { "extensions": [".js", "jsx"]}]
    }
};
