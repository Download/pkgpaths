var pkgpaths = require('../pkgpaths');
var expect = require('chai').expect;

describe('pkgpaths', function(){
	it('is a function', function(){
		expect(pkgpaths).to.be.a('function');
	});
	it('returns an object', function(){
		expect(pkgpaths()).to.be.an('object');
	});
	it('accepts a string or array of strings as parameter', function(){
		expect(pkgpaths('keywords')).to.be.an('array');
		expect(pkgpaths(['keywords'])).to.be.an('array');
	});
	it('returns an object representation of package.json when given no arguments', function(){
		var pkg = pkgpaths();
		expect(pkg).to.have.a.property('name');
		expect(pkg.name).to.equal('pkgpaths');
		expect(pkg).to.have.a.property('version');
		expect(pkg).to.have.a.property('description');
	});
	it('returns a subtree from package.json when given an argument', function(){
		var keywords = pkgpaths('keywords');
		expect(keywords).to.be.an('array');
	});
});