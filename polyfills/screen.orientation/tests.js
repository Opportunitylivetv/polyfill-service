it('window.screen.orientation returns a string', function () {
	expect(window.screen.orientation).to.be.a('string');
	expect(window.screen.orientation.split('-')).to.equal(2);
});
