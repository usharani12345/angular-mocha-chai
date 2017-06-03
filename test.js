var assert = require("chai").assert,
expect = require("chai").expect,
should = require("chai").should();
var supertest = require('supertest');
var server = supertest.agent("http://localhost:4013")

describe("etesting contact list api",function(){
	

	it("should get all contacts",function(done){
		/*var foo = "hello";
		var tea ={
			flavour :"lemon tea"
		}
		foo.should.be.a('string')
		foo.should.equal('hello')
		foo.should.have.lengthOf(5)
		tea.should.have.property('flavour')*/
		server.get("/getContactList")
				.expect(200)
				.expect('content-type',/json/)
				.end(function(err,response){
					console.log(response.body)
					response.body.forEach(function(data){
						console.log(data)
						data.should.have.property("name")
						data.name.should.be.a('string')
						data.name.should.equal('usha')
						data.name.should.have.lengthOf(4)
						data.mobile.should.have.property("mobile")
					
					})
					done();
				})
	})
	
	
});


