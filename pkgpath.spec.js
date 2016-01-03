var pkgpath = require('../pkgpath');
var expect = require('chai').expect;

describe('pkgpath', function(){
	it('is a function', function(){
		expect(pkgpath).to.be.a('function');
	});
	it('returns an object', function(){
		expect(pkgpath()).to.be.an('object');
	});
	it('accepts a string or array of strings as parameter', function(){
		expect(pkgpath('keywords')).to.be.an('array');
		expect(pkgpath(['keywords'])).to.be.an('array');
	});
	it('returns an object representation of package.json when given no arguments', function(){
		var pkg = pkgpath();
		expect(pkg).to.have.a.property('name');
		expect(pkg.name).to.equal('pkgpath');
		expect(pkg).to.have.a.property('version');
		expect(pkg).to.have.a.property('description');
	});
	it('returns a subtree from package.json when given an argument', function(){
		var keywords = pkgpath('keywords');
		expect(keywords).to.be.an('array');
	});
});