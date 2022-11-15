const withSolid = require('rollup-preset-solid')

console.log(withSolid)

module.exports = withSolid.default({
	input: 'src/index.tsx',
	targets: ['esm', 'cjs']
})
