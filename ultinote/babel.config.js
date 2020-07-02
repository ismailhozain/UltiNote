module.exports = api => {
    return {
      presets: ['next/babel'],
      plugins: [
        [
          "import", {
            libraryName: 'antd',
            style: 'css',
          }
        ]],
    };
    api.cache(true)
  };
