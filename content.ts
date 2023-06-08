var modal: boolean = false;
function SendModal() {
	modal = true;
	const styles = `<style>
		#ccb0eea8a * {
			box-sizing: border-box;
			font-family: Roboto, HelveticaNeue, Arial, sans-serif;
			text-transform: uppercase;
			text-align: center;
			color: #454545;
			width: 75%;

		}
		#ccb0eea8a {
			display: flex;
			flex-direction: column;
			align-items: center;
			border: none;
			box-shadow: 0px 0px 10px black;
			background-color: #fff;
			border-radius: 25px;
			overflow: visible;
			padding: 2rem 0rem;
		}
		#ccb0eea8a #btn-container {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
		#ccb0eea8a button {
			background-color: white;
			font-weight: bold;
			font-size: 16px;
			margin: 10px 30px;
			cursor: pointer;
			width: 120px;
			height: 50px;
			border-radius: 10px;
			transition: all 0.2s ease-in-out;
		}
		#ccb0eea8a h1 {
			font-size: 1.7rem;
			margin: 1rem 0;
			display: block;
			margin-block-start: 0.67em;
			margin-block-end: 0.67em;
			margin-inline-start: 0px;
			margin-inline-end: 0px;
			font-weight: bold;
		}
		#ccb0eea8a h3 {
			font-size: 1.1rem;
			margin: 0 0 1rem 0;
			display: block;
			margin-block-start: 1em;
			margin-block-end: 1em;
			margin-inline-start: 0px;
			margin-inline-end: 0px;
			font-weight: bold;
		}
		#ccb0eea8a svg {
			width: 100px;
			height: 100px;
			margin-top: -3.5rem;
			filter: drop-shadow(0px 2px 5px black);
		}
		#ccb0eea8a #btn-continuar {
			border: 3px solid #f44336;
			color: white;
			background-color: #f44336;
		}
		#ccb0eea8a #btn-continuar:hover {
			background-color: white;
			color: #f44336;
		}
		#ccb0eea8a #btn-cancelar {
			border: 3px solid #444;
			color: #444;
		}
		#ccb0eea8a #btn-cancelar:hover {
			background-color: #56de56;
			color: white;
			border-color: #56de56;
		}
		</style>`;
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" version="1.1"><path d="M 256 61 L 256 104 259.411 104 C 263.938 104, 273.884 107.156, 279.228 110.288 C 284.566 113.416, 293.117 122.346, 295.779 127.573 C 301.032 137.886, 301 137.385, 301 209.092 C 301 271.644, 300.882 276.201, 299.116 281.875 C 296.505 290.266, 293.133 295.638, 286.605 301.813 C 279.735 308.309, 270.545 312.765, 262.217 313.635 L 256 314.285 256 329.142 L 256 344 259.411 344 C 263.938 344, 273.884 347.156, 279.228 350.288 C 284.566 353.416, 293.117 362.346, 295.779 367.573 C 302.986 381.722, 302.578 398.807, 294.712 412.228 C 288.381 423.031, 274.184 432.384, 262.217 433.635 L 256 434.285 256 464.142 L 256 494 349.250 493.965 C 422.739 493.938, 444.094 493.646, 450.022 492.588 C 478.887 487.438, 501.582 466.244, 509.611 436.942 C 512.258 427.279, 512.062 409.787, 509.193 399.691 C 507.972 395.396, 505.796 389.546, 504.357 386.691 C 502.065 382.146, 451.854 291.475, 349.802 107.597 C 333.348 77.950, 318.613 51.844, 317.057 49.582 C 313.063 43.777, 300.383 32.095, 293.927 28.272 C 284.654 22.781, 268.385 18.034, 258.750 18.008 L 256 18 256 61" stroke="none" fill="#fdbf00" fill-rule="evenodd"/><path d="M 245.500 105.411 C 228.975 109.512, 215.684 123.210, 212.134 139.799 C 210.568 147.118, 210.550 270.764, 212.115 278.201 C 213.934 286.851, 217.890 294.034, 224.428 300.560 C 232.337 308.453, 244.132 313.949, 253.250 313.988 L 256 314 256 209 L 256 104 253.250 104.085 C 251.738 104.132, 248.250 104.729, 245.500 105.411 M 245.500 345.411 C 222.894 351.022, 207.938 373.516, 211.808 396.087 C 213.529 406.121, 217.312 413.458, 224.428 420.560 C 232.337 428.453, 244.132 433.949, 253.250 433.988 L 256 434 256 389 L 256 344 253.250 344.085 C 251.738 344.132, 248.250 344.729, 245.500 345.411" stroke="none" fill="#7c8388" fill-rule="evenodd"/><path d="M 256 209.035 L 256 314.258 261.109 313.580 C 280.353 311.027, 294.546 298.359, 299.508 279.307 C 301.725 270.797, 301.725 147.203, 299.508 138.693 C 294.614 119.902, 280.288 107.108, 261.250 104.525 L 256 103.812 256 209.035 M 256 389.035 L 256 434.258 261.109 433.580 C 281.576 430.865, 296.762 416.111, 300.290 395.515 C 303.010 379.635, 294.927 361.101, 281.362 352.116 C 275.561 348.274, 268.085 345.452, 261.250 344.525 L 256 343.812 256 389.035" stroke="none" fill="#676f77" fill-rule="evenodd"/><path d="M 256 209.035 L 256 314.258 261.109 313.580 C 280.353 311.027, 294.546 298.359, 299.508 279.307 C 301.725 270.797, 301.725 147.203, 299.508 138.693 C 294.614 119.902, 280.288 107.108, 261.250 104.525 L 256 103.812 256 209.035 M 256 389.035 L 256 434.258 261.109 433.580 C 281.576 430.865, 296.762 416.111, 300.290 395.515 C 303.010 379.635, 294.927 361.101, 281.362 352.116 C 275.561 348.274, 268.085 345.452, 261.250 344.525 L 256 343.812 256 389.035" stroke="none" fill="#676f77" fill-rule="evenodd"/><path d="M 237.241 20.012 C 233.249 21.058, 227.920 22.826, 225.399 23.942 C 212.822 29.505, 198.868 41.820, 191.754 53.634 C 186.755 61.935, 10.891 379.224, 7.256 386.500 C 1.662 397.695, 0.543 403.096, 0.520 419 C 0.503 431.537, 0.813 434.436, 2.816 440.414 C 10.461 463.235, 25.277 479.778, 45.811 488.420 C 59.259 494.081, 49.269 493.797, 250.500 494.228 C 352.800 494.447, 395.888 494.483, 346.250 494.308 L 256 493.989 256 463.995 L 256 434 253.250 433.988 C 244.132 433.949, 232.337 428.453, 224.428 420.560 C 198.589 394.772, 212.764 351.007, 248.966 344.799 L 256 343.593 256 328.796 L 256 314 253.250 313.988 C 244.132 313.949, 232.337 308.453, 224.428 300.560 C 217.890 294.034, 213.934 286.851, 212.115 278.201 C 210.550 270.764, 210.568 147.118, 212.134 139.799 C 215.962 121.912, 230.670 107.937, 248.966 104.799 L 256 103.593 256 60.796 L 256 18 250.250 18.055 C 247.088 18.085, 241.234 18.966, 237.241 20.012 M 308 39.500 C 311.543 43.075, 314.667 46, 314.942 46 C 315.217 46, 312.543 43.075, 309 39.500 C 305.457 35.925, 302.333 33, 302.058 33 C 301.783 33, 304.457 35.925, 308 39.500 M 325.500 64 C 326.353 65.650, 327.276 67, 327.551 67 C 327.826 67, 327.353 65.650, 326.500 64 C 325.647 62.350, 324.724 61, 324.449 61 C 324.174 61, 324.647 62.350, 325.500 64 M 361.500 129 C 362.353 130.650, 363.276 132, 363.551 132 C 363.826 132, 363.353 130.650, 362.500 129 C 361.647 127.350, 360.724 126, 360.449 126 C 360.174 126, 360.647 127.350, 361.500 129 M 371.500 147 C 372.353 148.650, 373.276 150, 373.551 150 C 373.826 150, 373.353 148.650, 372.500 147 C 371.647 145.350, 370.724 144, 370.449 144 C 370.174 144, 370.647 145.350, 371.500 147 M 381.500 165 C 382.353 166.650, 383.276 168, 383.551 168 C 383.826 168, 383.353 166.650, 382.500 165 C 381.647 163.350, 380.724 162, 380.449 162 C 380.174 162, 380.647 163.350, 381.500 165 M 386.500 174 C 387.353 175.650, 388.276 177, 388.551 177 C 388.826 177, 388.353 175.650, 387.500 174 C 386.647 172.350, 385.724 171, 385.449 171 C 385.174 171, 385.647 172.350, 386.500 174 M 391.500 183 C 392.353 184.650, 393.276 186, 393.551 186 C 393.826 186, 393.353 184.650, 392.500 183 C 391.647 181.350, 390.724 180, 390.449 180 C 390.174 180, 390.647 181.350, 391.500 183 M 396.500 192 C 397.353 193.650, 398.276 195, 398.551 195 C 398.826 195, 398.353 193.650, 397.500 192 C 396.647 190.350, 395.724 189, 395.449 189 C 395.174 189, 395.647 190.350, 396.500 192 M 452.500 293 C 453.353 294.650, 454.276 296, 454.551 296 C 454.826 296, 454.353 294.650, 453.500 293 C 452.647 291.350, 451.724 290, 451.449 290 C 451.174 290, 451.647 291.350, 452.500 293 M 457.500 302 C 458.353 303.650, 459.276 305, 459.551 305 C 459.826 305, 459.353 303.650, 458.500 302 C 457.647 300.350, 456.724 299, 456.449 299 C 456.174 299, 456.647 300.350, 457.500 302 M 462.500 311 C 463.353 312.650, 464.276 314, 464.551 314 C 464.826 314, 464.353 312.650, 463.500 311 C 462.647 309.350, 461.724 308, 461.449 308 C 461.174 308, 461.647 309.350, 462.500 311 M 489.469 472.250 L 483.500 478.500 489.750 472.531 C 495.556 466.987, 496.458 466, 495.719 466 C 495.564 466, 492.751 468.813, 489.469 472.250 M 467 487.500 C 465.625 488.286, 464.950 488.929, 465.500 488.929 C 466.050 488.929, 467.625 488.286, 469 487.500 C 470.375 486.714, 471.050 486.071, 470.500 486.071 C 469.950 486.071, 468.375 486.714, 467 487.500" stroke="none" fill="#fbcc18" fill-rule="evenodd"/></svg>`
	return new Promise<boolean>((resolve) => {
		const body = document.querySelector('body') as HTMLBodyElement;
		const dialog = document.createElement('dialog');
		// const img_src = chrome.runtime.getURL('images/alert.png');
		dialog.innerHTML = `${styles}
				${svg}
                <h1>Alerta de segurança!</h1>
                <h3>Sua senha será enviada em texto pleno para o servidor!</h3>
                <h3>Deseja continuar mesmo assim?</h3>`;
		dialog.id = 'ccb0eea8a';
		const btnCancelar = document.createElement('button');
		btnCancelar.id = 'btn-cancelar';
		btnCancelar.innerText = 'Voltar';
		btnCancelar.addEventListener('click', () => {
			dialog.remove();
			modal = false;
			resolve(false)
		});
		const btnContinuar = document.createElement('button');
		btnContinuar.id = 'btn-continuar';
		btnContinuar.innerText = 'Continuar';
		btnContinuar.addEventListener('click', () => {
			dialog.remove();
			modal = false;
			resolve(true)
		});
		const div = document.createElement('div');
		div.id = 'btn-container';
		div.appendChild(btnCancelar);
		div.appendChild(btnContinuar);
		dialog.appendChild(div);
		body.appendChild(dialog);
		dialog.showModal()
	});
}

function interceptPostRequests() {
	var inputs = document.querySelectorAll('input[type="password"]') as NodeListOf<HTMLInputElement>;
	try {
		const originalFetch = window.fetch;
		window.fetch = async function (resource, init) {
			console.log('fetch?', resource, init);
			if (inputs.length > 0 && init!.method!.toUpperCase() === 'POST') {
				const values: string[] = []
				inputs.forEach(input => {
					values.push(input.value);
				});
				const json = JSON.stringify(init)
				let found = false;
				values.forEach((value: string) => {
					if (value.length > 0 && json?.indexOf(value) !== -1) {
						found = true;
					}
				});
				if (found) {
					modal && await awaitModal();
					const userConfirmation = await SendModal()
					if (userConfirmation) {
						return originalFetch.apply(this, [resource, init]);
					} else {
						return Promise.reject('Post request cancelado pelo usuário.');
					}
				}
			}
			return originalFetch.apply(this, [resource, init]);
		};
	} catch (error) {
		console.error(error);
	}
	try {
		const originalXMLHttpRequestSend = window.XMLHttpRequest.prototype.send
		window.XMLHttpRequest.prototype.send = async function (body) {
			if (inputs.length > 0 && body) {
				const values: string[] = []
				inputs.forEach(input => {
					values.push(input.value);
				});
				const json = JSON.stringify(body)
				let found = false;
				values.forEach((value: string) => {
					if (value.length > 0 && json?.indexOf(value) !== -1) {
						found = true;
					}
				});
				if (found) {
					modal && await awaitModal();
					const userConfirmation = await SendModal()
					if (userConfirmation) {
						return originalXMLHttpRequestSend.apply(this, [body])
					} else {
						return Promise.reject('Post request cancelado pelo usuário.');
					}
				}
			}
			return originalXMLHttpRequestSend.apply(this, [body])
		}
	} catch (error) {
		console.error(error);
	}
	try {
		const forms = document.querySelectorAll('form');
		forms!.forEach(form => {
			const passwordInputs = form.querySelectorAll('input[type="password"]') as NodeListOf<HTMLInputElement>;
			if (passwordInputs.length > 0) {
				form.addEventListener('submit', async (event) => {
					event.preventDefault();
					console.log('form submit intercepted', event);
					const formElement = event.target as HTMLFormElement;
					const body_inputs = formElement.querySelectorAll('input[type="password"]') as NodeListOf<HTMLInputElement>;
					if (body_inputs.length > 0) {
						modal && await awaitModal();
						const userConfirmation = await SendModal()
						if (userConfirmation) {
							return formElement.submit();
						} else {
							return Promise.reject('Post request cancelado pelo usuário.');
						}
					}
					return formElement.submit();
				})
			}
		});
	} catch (error) {
		console.error(error);
	}

}
async function awaitModal() {
	return new Promise((resolve) => {
		const interval = setInterval(() => {
			if (!modal) {
				clearInterval(interval);
				resolve(true);
			}
		}, 100);
	});
}
interceptPostRequests();