const generateId = () => Date.now().toString(32) + Math.random().toString(32).substring(2)

module.exports = generateId 