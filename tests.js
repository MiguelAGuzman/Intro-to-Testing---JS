// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


describe("foo", function() {
    let expectedResult = 2;
    let actualResult = 2;
    it('should return true if 2 === 2', function() {
        expect(actualResult).toBe(expectedResult)
    });
})



describe('sayHello testing suite', function() {
    it('should return function', function() {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it("Jane", function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("Alex", function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("Pat", function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    })

    expect(sayHello(true)).toBe("Hello, World!");

    expect(sayHello()).toBe("Hello, World!");

    expect(sayHello(false)).toBe("Hello, World!");
});


describe('isFive testing suite', function() {
    it('should return function', function() {
        expect(typeof isFive).toBe("function");
    })
    it(5, function () {
        expect(isFive(5).toBe(true));
    })
    it("5", function () {
        expect(isFive("5").toBe(true));
    });
    it("7", function () {
        expect(isFive("7").toBe(false));
    })
    it(3, function () {
        expect(isFive(3).toBe(false));
    })
    it("number", function () {
        expect(isFive("number").toBe(false));
    })
});

