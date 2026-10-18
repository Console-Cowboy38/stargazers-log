fetch("events.json")
	.then((response) => response.json())
	.then((events) => {
		const list = document.querySelector("#starred");
		events.forEach((event) => {
			const item = decument.createElement("li");
			item.textContent = `${event.name} - starred ${event.starred}`;
			list.appendChild(item);
		});
	});
