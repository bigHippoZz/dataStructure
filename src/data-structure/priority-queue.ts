import { biggerComparisonFunction, defaultCompare, ICompareFunction, lessComparisonFunction } from "../utils";

export class MaxPQ<T> {
	private _size: number = 0;
	private _items: (T | null)[] = [];
	constructor(private compareFunction: ICompareFunction<T> = defaultCompare) {}

	insert(value: T) {
		this._items[++this._size] = value;
		this._swim(this._size);
	}

	max(): T {
		if (this.isEmpty()) {
			throw new Error("priority queue is empty");
		}

		return this._items[1];
	}

	deleteMax() {
		if (this.isEmpty()) {
			throw new Error("priority queue is empty");
		}
		const max = this.max();
		this._swap(1, this._size--);
		this._sink(1);
		this._items[this._size + 1] = null;
		return max;
	}

	isEmpty() {
		return this.size() === 0;
	}

	size(): number {
		return this._size;
	}

	private _swim(index: number) {
		while (index > 1 && this._less(index >> 1, index)) {
			this._swap(index, index >> 1);
			index = index >> 1;
		}
	}

	private _sink(index: number) {
		while (index * 2 <= this._size) {
			let j = index * 2;
			if (j + 1 <= this._size && this._less(j , j + 1)) j++;
			if (this._less(j, index)) break;
			this._swap(j,index);
			index = j;
		}
	}

	private _less(a: number, b: number) {
		return lessComparisonFunction(
			this._items[a],
			this._items[b],
			this.compareFunction.bind(this),
		);
	}

	private _swap(a: number, b: number) {
		[this._items[a], this._items[b]] = [this._items[b], this._items[a]];
	}
	
}




export class MinPQ<T> {
	private _size: number = 0;
	private _items: (T | null)[] = [];
	constructor(private compareFunction: ICompareFunction<T> = defaultCompare) {}
	insert(value: T) {
		this._items[++this._size] = value;
		this._swim(this._size);
	}
	min(): T {
		if (this.isEmpty()) {
			throw new Error("priority queue is empty");
		}

		return this._items[1];
	}

	deleteMin() {
		if (this.isEmpty()) {
			throw new Error("priority queue is empty");
		}
		const min = this.min();
		this._swap(1, this._size--);
		this._sink(1);
		this._items[this._size + 1] = null;
		return min;
	}

	isEmpty() {
		return this.size() === 0;
	}

	size(): number {
		return this._size;
	}

	private _swim(index: number) {
		while (index > 1 && this._bigger(index >> 1, index)) {
			this._swap(index, index >> 1);
			index = index >> 1;
		}
	}

	private _sink(index: number) {
		while (index * 2 <= this._size) {
			let j = index * 2;
			if (j + 1 <= this._size && this._bigger(j , j + 1)) j++;
			if (this._bigger(j, index)) break;
			this._swap(j,index);
			index = j;
		}
	}

	private _bigger(a: number, b: number) {
		return biggerComparisonFunction(
			this._items[a],
			this._items[b],
			this.compareFunction.bind(this),
		);
	}

	private _swap(a: number, b: number) {
		[this._items[a], this._items[b]] = [this._items[b], this._items[a]];
	}

}
