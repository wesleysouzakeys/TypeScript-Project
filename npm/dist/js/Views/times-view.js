export class TimesView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(tituloTime, corPrimaria, corSecundaria) {
        return `
        <section class='time' style='background-color: ${corSecundaria}'>
            <h3 style='border-color: ${corPrimaria};'>${tituloTime}</h3>
            <div class='colaboradores' onLoad="">
                
            </div>
        </section> `;
    }
    update() {
        times.forEach(i => { this.elemento.insertAdjacentHTML('afterbegin', this.template(i.nome, i.corPrimaria, i.corSecundaria)); });
    }
}
const times = [
    {
        nome: 'Programação',
        corPrimaria: '#57C278',
        corSecundaria: '#D9F7E9'
    },
    {
        nome: 'Front-End',
        corPrimaria: '#82CFFA',
        corSecundaria: '#E8F8FF'
    },
    {
        nome: 'Data Science',
        corPrimaria: '#A6D157',
        corSecundaria: '#F0F8E2'
    },
    {
        nome: 'Devops',
        corPrimaria: '#E06B69',
        corSecundaria: '#FDE7E8'
    },
    {
        nome: 'UX e Design',
        corPrimaria: '#DB6EBF',
        corSecundaria: '#FAE9F5'
    },
    {
        nome: 'Mobile',
        corPrimaria: '#FFBA05',
        corSecundaria: '#FFF5D9'
    },
    {
        nome: 'Inovação e Gestão',
        corPrimaria: '#FF8A29',
        corSecundaria: '#FFEEDF'
    }
];
