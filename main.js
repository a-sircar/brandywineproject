let currentTarget;

function changeContent(target) {
	currentTarget = target;
	document.getElementById('popup-title').textContent = target.children[1].children[0].textContent;
	document.getElementById('popup-author').textContent = 'Photo taken by ' + target.children[1].children[1].textContent;
	document.getElementById('popup-img').src = target.children[0].src;
	document.getElementById('popup-content').textContent = target.getAttribute('data-content');
}

function closePopup() {
	document.getElementById('photo-popup').style.display = '';
	document.body.style.overflow = '';
}

document.getElementById('photo-grid').addEventListener('click', () => {
	const target = event.path[1];
	if (target.tagName.toLowerCase() != 'figure')
		return;

	document.getElementById('photo-popup').style.display = 'flex';
	document.body.style.overflow = 'hidden';

	changeContent(target);
});

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