import { MaxPQ, MinPQ } from "../../data-structure/priority-queue";

describe("MaxPQ", () => {
	let maxPQ: MaxPQ<number>;

	beforeEach(() => {
		maxPQ = new MaxPQ();
	});

	it("starts empty MaxPQ", () => {
		expect(maxPQ.isEmpty()).toBe(true);
		expect(maxPQ.size()).toBe(0);
	});

	it("insert value into MaxPQ", () => {
		for (let i = 0; i < 1000; i++) {
			maxPQ.insert(i);
		}
		expect(maxPQ.size()).toBe(1000);
		expect(maxPQ.isEmpty()).toBe(false);
	});

	it("get max value from MaxPQ", () => {
		for (let i = 0; i < 10; i++) {
			maxPQ.insert(i);
		}
		expect(maxPQ.max()).toBe(9);

		for (let i = 9; i <= 0; i--) {
			maxPQ.insert(i);
		}
		expect(maxPQ.max()).toBe(9);
	});

	it("delete max value into MaxPQ", () => {
		for (let i = 0; i < 10; i++) {
			maxPQ.insert(i);
		}
		expect(maxPQ.deleteMax()).toBe(9);
		expect(maxPQ.max()).toBe(8);
		expect(maxPQ.deleteMax()).toBe(8);
		expect(maxPQ.max()).toBe(7);
		expect(maxPQ.deleteMax()).toBe(7);
		expect(maxPQ.max()).toBe(6);
	});

	it("deleting out of bounds should report an error", () => {
		for (let i = 0; i < 10; i++) {
			maxPQ.insert(i);
		}
		try {
			for (let i = 0; i < 20; i++) {
				maxPQ.deleteMax();
			}
		} catch (error) {
			expect(error.message).toBe("priority queue is empty");
		}
	});
});


describe("MinPQ", () => {
	let minPQ: MinPQ<number>;

	beforeEach(() => {
		minPQ = new MinPQ();
	});

	it("starts empty MinPQ", () => {
		expect(minPQ.isEmpty()).toBe(true);
		expect(minPQ.size()).toBe(0);
	});

	it("insert value into MinPQ", () => {
		for (let i = 0; i < 1000; i++) {
			minPQ.insert(i);
		}
		expect(minPQ.size()).toBe(1000);
		expect(minPQ.isEmpty()).toBe(false);
	});

	it("get min value from MinPQ", () => {
		for (let i = 0; i < 10; i++) {
			minPQ.insert(i);
		}
		expect(minPQ.min()).toBe(0);

		for (let i = 9; i <= 0; i--) {
			minPQ.insert(i);
		}
		expect(minPQ.min()).toBe(0);
	});

	it("delete min value into MinPQ", () => {
		for (let i = 0; i < 10; i++) {
			minPQ.insert(i);
		}
		expect(minPQ.deleteMin()).toBe(0);
		expect(minPQ.min()).toBe(1);
		expect(minPQ.deleteMin()).toBe(1);
		expect(minPQ.min()).toBe(2);
		expect(minPQ.deleteMin()).toBe(2);
		expect(minPQ.min()).toBe(3);
	});

	it("deleting out of bounds should report an error", () => {
		for (let i = 0; i < 10; i++) {
			minPQ.insert(i);
		}
		try {
			for (let i = 0; i < 20; i++) {
				minPQ.deleteMin();
			}
		} catch (error) {
			expect(error.message).toBe("priority queue is empty");
		}
	});
});

