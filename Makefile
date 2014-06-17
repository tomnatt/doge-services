lint:
	./node_modules/.bin/jshint js/*.js

sass:
	sass sass/style.sass:css/style.css

test: lint
	./node_modules/.bin/node-qunit-phantomjs test/index.html

