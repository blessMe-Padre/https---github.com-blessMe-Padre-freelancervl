import mixitup from 'mixitup';

const gallery = document.querySelector('.gallery__inner');
let mixer;

if (gallery) {
    let mixer = mixitup(gallery, {
        load: {
            filter: ".category-living"
        }
    });
}
