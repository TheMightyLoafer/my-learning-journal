function checkParagraphLength() {
    const paragraphs = document.querySelectorAll('.post p');
    const characterLimit = 100; // Set the character limit here

    for (const paragraph of paragraphs) {
        const paragraphText = paragraph.textContent;
        const truncatedText = paragraphText.substring(0, characterLimit);
        const overflowText = paragraphText.substring(characterLimit);

        paragraph.textContent = truncatedText;

        if (overflowText.length > 0) {
            const readMoreLink = document.createElement('a');
            readMoreLink.textContent = '... Read More';

            paragraph.appendChild(readMoreLink);

            readMoreLink.addEventListener('click', () => {
                window.location.href = `
                https://freecodecamp.org/`;
            });

        }
    }
}

window.onload = function () {
    checkParagraphLength();
};

/*function checkParagraphLength() {
  const paragraphs = document.querySelectorAll('.post p');
  const characterLimit = 100; // Set the character limit here

  for (const paragraph of paragraphs) {
    const paragraphText = paragraph.textContent;
    const truncatedText = paragraphText.substring(0, characterLimit);
    const overflowText = paragraphText.substring(characterLimit);

    paragraph.textContent = truncatedText;

    if (overflowText.length > 0) {
      const readMoreLink = document.createElement('a');
      readMoreLink.textContent = 'Read More';

      paragraph.appendChild(readMoreLink);

      readMoreLink.addEventListener('click', () => {
        paragraph.textContent = paragraphText;
        readMoreLink.style.display = 'none';
      });
    }
  }
}

window.onload = function() {
  checkParagraphLength();
}; */