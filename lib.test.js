const lib= require("./lib.js");

beforeEach(() => {
    console.log("Starting test");
})


afterEach(() => {
    console.log("Ending test");
})

describe("Test for strip module", () => {
    test("use strip with string \" abds   dddassd a  \"", () => {
        expect(lib.strip(str ="  abds   dddassd a  ")).toBe("abds dddassd a");
    })

    test("use strip with string \"abds  dddassda  \"", () => {
        expect(lib.strip(str ="abds  dddassda  ")).toBe("abds dddassda");
    })

    test("use strip with string \"      abdsdddassda\"", () => {
        expect(lib.strip(str ="      abdsdddassda")).toBe("abdsdddassda");
    })
})

describe("Test for reverse module", () => {
    test("use reverse with string \"abds dddassd a\"", () => {
        expect(lib.reverse(str ="abds dddassd a")).toBe("a dddassd abds");
    })

    test("use reverse with string \"dd abds  assd a\"", () => {
        expect(lib.reverse(str ="dd abds assd a")).toBe("a assd abds dd");
    })

    test("use reverse with string \"ds ab d ss dda a\"", () => {
        expect(lib.reverse(str ="ds ab d ss dda a")).toBe("a dda ss d ab ds");
    })
})

describe("Test for sort module", () => {
    test("use sort with string \"abds dddassd a\"", () => {
        expect(lib.sort(str ="abds dddassd a")).toBe("dddassd abds a");
    })

    test("use sort with string \"dd abds assd a\"", () => {
        expect(lib.sort(str ="dd abds assd a")).toBe("abds assd dd a");
    })

    test("use sort with string \"dddassd a abds\"", () => {
        expect(lib.sort(str ="dddassd a abds")).toBe("dddassd abds a");
    })
})