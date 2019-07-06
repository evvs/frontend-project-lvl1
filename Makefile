install: 
	npm install

start: 
	npx babel-node 'src/games/bin/brain-games.js'

testpublish: 
	npm publish --dry-run

lint:
	npx eslint .
