// export const presets = [
//     '@babel/preset-env',
//     '@babel/preset-react',
// ];
// export const plugins = [];

module.exports = {
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };