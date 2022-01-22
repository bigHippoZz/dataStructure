export class LSD {
	static sort(list: string[]) {
		const w = list[0].length;
		const length = list.length;
		const R = 256;
		const aux = Array<string>(length);
		for (let i = w - 1; i >= 0; i--) {

			const count = Array<number>(R + 1).fill(0);

			for (let j = 0; j < length; j++) {
				count[list[j].charCodeAt(i) + 1]++;
			}

			for (let j = 0; j < R; j++) {
				count[j + 1] += count[j];
			}

			for (let j = 0; j < length; j++) {
				aux[count[list[j].charCodeAt(i)]++] = list[j];
			}
			
			for (let j = 0; j < length; j++) {
				list[j] = aux[j];
			}
		}
	}
}
