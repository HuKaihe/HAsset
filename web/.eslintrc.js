module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb",
  "env": {
      "browser": true,
  },
  "rules": {

      "camelcase": "off",

      // 打印
      "no-console": "off",
      "max-len": "off",

      // 缩进
      "indent": ["error", 4],
      "react/jsx-indent": ["error", 4],
      "react/jsx-indent-props": ["error", 4],

      // 模块
      "react/jsx-filename-extension": 'off',

      // react
      "react/no-did-mount-set-state": 'off',
      "react/prop-types": ['off'],
      "react/default-props-match-prop-types": ['off'],
      "react/no-array-index-key": ['off'],

      // dom与界面
      "jsx-a11y/click-events-have-key-events": 'off',
      "jsx-a11y/no-static-element-interactions": "off",
      "jsx-a11y/label-has-for": "off",
      "jsx-a11y/no-noninteractive-element-interactions": "off"
  },
  "globals": {
  }
};