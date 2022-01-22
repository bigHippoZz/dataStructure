import { Node } from "./node";
export class Stack<T> {
	private _head: Node<T> | null = null;

	private _size: number = 0;

	push(value: T): void {
		const node = new Node<T>(value);
		node.next = this._head;
		this._head = node;
		this._size++;
	}

	pop() {
		if (this.isEmpty()) {
			throw new Error("stack is empty");
		}
		const value = this._head.value;
		this._head = this._head.next;
		this._size--;
		return value;
	}

	peek(): T | null {
		if (this.isEmpty()) {
			throw new Error("stack is empty");
		}
		return this._head.value;
	}

	reset(): void {
		this._head = null;
		this._size = 0;
	}

	isEmpty(): boolean {
		return this.size() === 0;
	}

	size() {
		return this._size;
	}
}
