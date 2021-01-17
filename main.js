let currentTarget;

function changeContent(target) {
	currentTarget = target;
	document.getElementById('popup-title').textContent = target.children[1].children[0].textContent;
	document.getElementById('popup-img').src = target.children[0].src;
	document.getElementById('popup-content').textContent = target.getAttribute('data-content');
}

function closePopup() {
	document.getElementById('photo-popup').style.display = '';
	document.body.style.overflow = '';
}

for (const element of document.getElementById('photo-grid').children) {
	element.addEventListener('click', () => {
		currentTarget = element;
		const popup = document.getElementById('photo-popup');

		popup.style.display = 'flex';
		changeContent(element);

		if (popup.scrollHeight > popup.clientHeight) {
			document.body.style.overflow = 'hidden';
		}
	});
}

document.getElementById('photo-popup').addEventListener('click', () => {
	if (event.target.id != 'photo-popup')
		return;

	closePopup();
});

document.getElementById('popup-close').addEventListener('click', closePopup);

document.getElementById('popup-before').addEventListener('click', () => {
	const target = currentTarget.previousElementSibling;
	if (target === null)
		return;
	target.scrollIntoView();
	changeContent(currentTarget.previousElementSibling)
});
document.getElementById('popup-next').addEventListener('click', () => {
	const target = currentTarget.nextElementSibling;
	if (target === null)
		return;
	target.scrollIntoView();
	changeContent(currentTarget.nextElementSibling)
});
