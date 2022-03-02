import start from './modules/start.js'
import getFormPerson from './modules/formPerson.js'
import readyPlane from './modules/readyPlane.js'
import getData from './services/getTour.js'

const init = async (selectorApp, title) =>{
    const app = document.querySelector(selectorApp);
    const data = await getData();
    const {main, firstForm, h1} = start(app, title, data);

    firstForm.addEventListener('submit', (e) =>{
        e.preventDefault();

        const tourData = data.find(tour => tour.id === firstForm.tour.value);
        h1.textContent = tourData.tour;

        firstForm.remove();

        const forms = getFormPerson(firstForm.count.value);
        main.append(...forms);

        readyPlane(forms, main, tourData);
    })
};

init('.app', 'Выберите тур');