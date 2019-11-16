/* eslint-disable no-undef */
async function randomImage()
{
    const imagesDoc = await fetch("/index.json");
    const images = await imagesDoc.json();

    return images[(Math.floor(Math.random() * images.length))];
}

u(document).on("click", () => {
    randomImage().then((img) => {
        u('.index-splash-image').attr('style', 'background-image: url(img/' + img + ')');
    })
});