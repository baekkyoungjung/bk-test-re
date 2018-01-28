describe('description', () => {
	const calcPlus = (a, b) => {
		function decimalLength(who) {
			return (who + '').split('.').length;
		}
		const maxLegnth = Math.max(decimalLength(a), decimalLength(b));
		const resultPlus = a + b; 
		const resultPlusDecimal = decimalLength(resultPlus) > maxLegnth ? resultPlus.toFixed(maxLegnth) : resultPlus;
		return resultPlusDecimal;
		// return decimalLength(resultPlus) > maxLegnth ? resultPlus.toFixed(maxLegnth) : resultPlus;
	};
	const calcMinus = (a, b) =>  {

		return a - b;
	};

	test('randocall calls its callback with a number', () => {
		expect(calcPlus(0.2 ,0.1)).toBe(0.3);
		expect(calcMinus(0.2 ,0.1)).toBe(0.1);
	});
});


// // describe('toMatchObject applied to arrays arrays', () => {
// //   test('111the number of elements must match exactly', () => {
// //     expect([
// //       { foo: 'bar' },
// //       { baz: 1 }
// //     ]).toMatchObject([
// //       { foo: 'bar' },
// //       { baz: 1 }
// //     ]);
// //   });

// //   // // .arrayContaining "matches a received array which contains elements that are *not* in the expected array"
// //   // test('222.toMatchObject does not allow extra elements', () => {
// //   //   expect([
// //   //     { foo: 'bar' },
// //   //     { baz: 1, haha: 'kkk' }
// //   //   ]).toMatchObject([
// //   //     { foo: 'bar' }
// //   //   ]);
// //   // });

// //   test('333.toMatchObject is called for each elements, so extra object properties are okay', () => {
// //     expect([
// //       { foo: 'bar' },
// //       { baz: 123, extra: 'quux' }
// //     ]).toMatchObject([
// //       { foo: 'bar' },
// //       { baz: 123, uuu: 333 }
// //     ]);
// //   });
// // });