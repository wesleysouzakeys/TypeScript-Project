import { Pessoa } from "../Models/Pessoa.js";
import { TimesView } from "./times-view.js";

export class PessoasView {

    private elemento: HTMLElement;
    private timesSection = new TimesView('.times')

    constructor(seletor: string) {
        setTimeout(() => {
            this.elemento = document.querySelector(seletor)
        }, 1000)
    }

    template(pessoa: Pessoa, corPrimaria: string): string {
        return `
        <div class='colaborador'>
            <div class='cabecalho' style="background-color: ${corPrimaria}">
                <img src=${pessoa.image} alt={nome}/>
            </div>
            <div class='rodape'>
                <h4>${pessoa.name}</h4>
                <h5>${pessoa.role}</h5>
            </div>
        </div>`
    }

    

    update(pessoa: Pessoa): void {

        const tags = document.getElementsByClassName("colaboradores")

        const tagArray = Array.from(tags);

        const found = tagArray.find(element => element.getAttribute("key") === `${pessoa.team}`)
        const team = times.find(team => team.nome === found.getAttribute("key"))

        found.insertAdjacentHTML('beforeend', this.template(pessoa, team.corPrimaria)) 
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
]