import { TimesView } from "./times-view.js";
export class PessoasView {
    constructor(seletor) {
        this.timesSection = new TimesView('.times');
        setTimeout(() => {
            this.elemento = document.querySelector(seletor);
        }, 1000);
    }
    template(pessoa) {
        return `
        <div class='colaborador'>
            <div class='cabecalho' style="">
                <img src=${pessoa.image} alt={nome}/>
            </div>
            <div class='rodape'>
                <h4>${pessoa.name}</h4>
                <h5>${pessoa.role}</h5>
            </div>
        </div>`;
    }
    update(pessoa) {
        console.log(this.timesSection.elemento);
        const tags = document.getElementsByTagName('div');
        // Convert the HTMLCollection to an array for easier iteration
        const tagArray = Array.from(tags);
        // Iterate over the array of tags
        tagArray.forEach((tag) => {
            // Perform actions on each tag
            console.log(tag.innerHTML);
        });
        // insertAdjacentHTML('beforeend', this.template()) 
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
