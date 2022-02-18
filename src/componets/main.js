'use strict';
(() => {

//INPUTS
const btnBruto = document.querySelector('#btn-bruto');
const btnLiquido = document.querySelector('#btn-liquido');
const btnPre = document.querySelector('#btn-pre');
const btnPos = document.querySelector('#btn-pos');
const btnFixado = document.querySelector('#btn-ipca');

const aporteInit = document.querySelector('#aporte-inicial');
const prazoMens = document.querySelector('#prazo-mensal');
const IPCA = document.querySelector('#IPCA');
const aporteMens = document.querySelector('#aporte-mensal');
const rentabilidad = document.querySelector('#Rentabilidade');
const CDI = document.querySelector('#CDI');
const invalidFeed = document.querySelectorAll('.invalid-feedback');
const btnClear = document.querySelector('#btn-clear');
const btnSimulate = document.querySelector('#btn-simulate');

//OUTPUTS
const valorBruto = document.querySelector('#valor-bruto');
const valorLiquido = document.querySelector('#valor-liquido');
const aliquota = document.querySelector('#aliquota');
const valorInvestido = document.querySelector('#valor-investido');
const valorPago = document.querySelector('#valor-pago');
const ganhoLiquido = document.querySelector('#ganho-liquido');

    const state = {};
    const handleState = (key, value) => {
        state[key] = value;
    }

    // Lista de botoes
    ['#btn-bruto', '#btn-liquido', '#btn-pre', '#btn-pos', '#btn-ipca'].forEach(btnKey => {
        // Referencia do botão
        const btn = document.querySelector(btnKey);

        btn.addEventListener('click', () => {
            // Pego a chave do campo, para definir o valor no estado
            let _key = btnKey.split('-')[1];

            if(btnKey === '#btn-bruto') {

                handleState('tipoRendimento', _key);
                btnBruto.classList.add('active');
                btnLiquido.classList.remove('active');

            } else if (btnKey === '#btn-liquido') {

                handleState('tipoRendimento', _key);
                btnLiquido.classList.add('active');
                btnBruto.classList.remove('active');

            }

            if(btnKey === '#btn-pre') {

                handleState('tipoIndexacao', _key);
                btnPre.classList.add('active');
                btnPos.classList.remove('active');
                btnFixado.classList.remove('active');

            } else if (btnKey === '#btn-pos') {

                handleState('tipoIndexacao', _key);
                btnPos.classList.add('active');
                btnPre.classList.remove('active');
                btnFixado.classList.remove('active');

            } else if (btnKey === '#btn-ipca') {

                handleState('tipoIndexacao', _key);
                btnFixado.classList.add('active');
                btnPos.classList.remove('active');
                btnPre.classList.remove('active');

            }
        })

        btnClear.addEventListener('click', function (){
            btn.classList.remove('active');
        })
    })

    const useGet = async (route, callback) => {
        const res = await fetch('http://localhost:3000/' + route);
        const data = await res.json();
    
        callback(data);
    }
    
    const handleIndicadores = async (data = Promise.resolve([])) => {
        let _data = await data;
        
        _data.forEach(indicador => {
            let { nome, valor } = indicador;
    
            valor = (valor.toFixed(2)) + '%';
    
            if(nome == 'ipca'){
                IPCA.value = valor;
            }
    
            if(nome == 'cdi'){
                CDI.value =  valor;
            }
    
        })
    }


btnSimulate.addEventListener('click', function() {
    
    useGet(`simulacoes?tipoIndexacao=${state.tipoIndexacao}&tipoRendimento=${state.tipoRendimento}`, (data) => {

        if( aporteInit.value == '' ||
            prazoMens.value =='' ||
            aporteMens.value == '' ||
            rentabilidad.value == '') {

            console.log('error');

        }else if (data.length > 0) {

            const [response] = data;

            valorBruto.innerHTML = `R$ ${response.valorFinalBruto}`;
            valorLiquido.innerHTML = `R$ ${response.valorFinalLiquido}`;
            aliquota.innerHTML = `${response.aliquotaIR}%`;
            valorInvestido.innerHTML = `R$ ${response.valorTotalInvestido}.00`;
            valorPago.innerHTML = `R$ ${response.valorPagoIR}.00`;
            ganhoLiquido.innerHTML = `R$ ${response.ganhoLiquido}`;

            if (valorLiquido.value < 0 || ganhoLiquido.value < 0) {
                valorLiquido.style.cssText = 'color: red;';
                ganhoLiquido.style.cssText = 'color: red;';
            } else {
                valorLiquido.style.cssText = 'color: green;';
                ganhoLiquido.style.cssText = 'color: green;';

            }
            document.querySelector('.output-title').classList.remove('hide');
            document.querySelector('#section-cards').classList.remove('hide');
            btnSimulate.classList.add('active');
            console.log(response)

        }
    });
});

btnClear.addEventListener('click', function () {
    
    aporteInit.value = '';
    prazoMens.value = '';
    aporteMens.value = '';
    rentabilidad.value = '';
    useGet('indicadores', handleIndicadores);


    document.querySelector('.output-title').classList.add('hide');
    document.querySelector('#section-cards').classList.add('hide');
    btnSimulate.classList.remove('active')
});


useGet('indicadores', handleIndicadores);
})()
