// // let p = new Promise((resolve, reject) => {
// // 	let a = 1 + 1;
// // 	if (a == 2) {
// // 		resolve("success");
// // 	} else {
// // 		reject("failed");
// // 	}
// // });

// // p.then(message => {
// // 	console.log(`this is in the then ${message}`);
// // }).catch(message => {
// // 	console.log(`this is in the catch ${message}`);
// // });
// let watch = false;
// let see = true;
// function watchMoviePomise() {
// 	return new Promise((resolve, reject) => {
// 		if (watch) {
// 			resolve({
// 				action: "user watching",
// 			});
// 		} else if (see) {
// 			reject({
// 				action: "doing something else",
// 			});
// 		} else {
// 			reject({
// 				action: "do nothing",
// 			});
// 		}
// 	});
// }
// watchMoviePomise()
// 	.then(message => {
// 		console.log(`yess ${message.action}`);
// 	})
// 	.catch(message => {
// 		console.log(`no ${message.action}`);
// 	});
function testGreaterThan(val) {
	if (val > 100) {
		// Change this line
		return "Over 100";
	}

	if (val > 10) {
		// Change this line
		return "Over 10";
	}

	return "10 or Under";
}

testGreaterThan(10);
