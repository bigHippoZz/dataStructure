import { Stack } from "../../data-structure/stack";

describe("Stack", () => {
	let stack: Stack<number>;
	beforeEach(() => {
		stack = new Stack<number>();
	});

	it("should start empty stack", () => {
		expect(stack.isEmpty()).toBe(true);
		expect(stack.size()).toBe(0);
	});

	it("size should be equal", () => {
		for (let i = 0; i < 10; i++) {
			stack.push(i);
		}
		expect(stack.size()).toBe(10);
		stack.pop();
		expect(stack.size()).toBe(9);
		stack.push(100000000);
		expect(stack.size()).toBe(10);
		for (let i = 0; i < 100; i++) {
			stack.push(i);
		}
		expect(stack.size()).toBe(110);

		stack.reset();
		for (let i = 0; i < 100; i++) {
			1 & i ? stack.pop() : stack.push(i);
		}
		expect(stack.size()).toBe(0);
	});

	it("push should be equal", () => {
		stack.push(10);
		expect(stack.peek()).toBe(10);
		stack.push(1);
		expect(stack.peek()).toBe(1);
		stack.push(2);
		expect(stack.peek()).toBe(2);
		stack.push(3);
		expect(stack.peek()).toBe(3);
		expect(stack.size()).toBe(4);
		expect(stack.isEmpty()).toBe(false);
		stack.push(undefined);
		expect(stack.peek()).toBe(undefined);
		stack.push(null);
		expect(stack.peek()).toBe(null);
	});

	it("pop should be equal", () => {
		const stackErr = () => stack.pop();
		expect(stackErr).toThrowError();
		stack.push(1);
		stack.push(2);
		stack.push(3);
		stack.push(4);
		expect(stack.pop()).toBe(4);
		expect(stack.pop()).toBe(3);
		expect(stack.pop()).toBe(2);
		expect(stack.pop()).toBe(1);
		expect(stackErr).toThrowError();
	});

	it("reset should be equal", () => {
		for (let i = 0; i < 100; i++) {
			stack.push(i);
		}
		expect(stack.size()).toBe(100);
		stack.reset();
		expect(stack.size()).toBe(0);
		expect(stack.isEmpty()).toBe(true);
		stack.push(1);
		stack.pop();
		stack.reset();
		expect(stack.size()).toBe(0);
		expect(stack.isEmpty()).toBe(true);
	});
});
