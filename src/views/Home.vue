<template>
  <section id="main-section" class="lg:pt-5">
    <div id="info" class="mb-1">
      <div class="font-semibold text-lg mb-3 lg:mb-4 lg:mt-2 lg:text-xl">Descuento de Cheques</div>
      <div class="font-light leading-just lg:leading-snug lg:text-lg">
        Calculá tus operaciones de descuento de cheques y conocé el saldo en el mercado de capitales. Ingresando los datos de la operación en nuestra calculadora vas a
        poder conocer el costo de financiamiento
      </div>
      <div class="font-semibold text-lg mb-3 mt-6 lg:mb-4 lg:mt-10 lg:text-xl">Financiamiento hasta 360 días</div>
      <div class="font-light leading-just lg:leading-snug lg:text-lg">
        Neuquen Pymes te avala para que descuentes cheques propios o de tus clientes en el mercado de capitales. Financiate hasta 360 días sin afectar tu acuerdo
        crediticio y sin bancos.
      </div>
    </div>
    <div id="requirements">
      <div class="font-semibold text-lg mb-4 mt-4 lg:mb-5 lg:mt-10 lg:text-xl">Requisitos</div>
      <button class="accordion">Persona Física</button>
      <div class="panel">
        <div class="pt-4 pb-5 leading-snug">
          <ul>
            <li>- DNI</li>
            <li>- DDJJ de IIBB (en caso de corresponder a MONOTRIBUTO - últimos 3-)</li>
            <li>- DDJJ Ganancias (en caso de corresponder a RESPONSABLE INSCRIPTO)</li>
            <li>- Manifestación de bienes por profesional y certificada por consejo</li>
            <li>- Constancia de CBU</li>
            <li>- Constancia de domicilio (ej: factura de servicio)</li>
          </ul>
          <div class="font-semibold mt-3">
            Envianos tu Documentación haciendo click
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeQ5LEYTlhOFFZ9fLY_kVziP14EiFNSD3lVTJO006Gn31TX_A/viewform" class="text-secondary" target="_blank">aquí</a>.
          </div>
          <div>
            En caso de NO contar con toda la documentación haga click
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSebXC4ZjJnqVhHBXYbELS4xbiYReOTgEzNdHQX8K39kCOqaKw/viewform" class="text-secondary" target="_blank">aquí</a>.
          </div>
        </div>
      </div>
      <button class="accordion">Persona Jurídica</button>
      <div class="panel">
        <div class="pt-4 pb-5 leading-snug">
          <ul>
            <li>- Estatuto/Contrato social</li>
            <li>- DNI socios/accionistas</li>
            <li>- Último balance certificado ante Consejo profesional</li>
            <li>- Manifestación de bienes del socio/accionista fiador</li>
            <li>- Constancia de domicilio de socio/accionista fiador (ej. factura de servicio)</li>
            <li>- Constancia de CBU cuenta corriente</li>
          </ul>
          <div class="font-semibold mt-3">
            Envianos tu Documentación haciendo click
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfkZROhwjV6dq-rDXuFZKlbBMDvphyMRGzQmhB9Af-q4nm87g/viewform" class="text-secondary" target="_blank">aquí</a>.
          </div>
          <div>
            En caso de NO contar con toda la documentación haga click
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScwrxcA-AlUkXTPy6g3q2wE02wFHVYnDsyGhwnofKpUM3MatQ/viewform" class="text-secondary" target="_blank">aquí</a>.
          </div>
        </div>
      </div>
    </div>
    <div id="contact" class="my-6 pt-5 lg:mt-10 lg:pt-10 border-t border-solid font-light">
      Comunicate con nosotros via mail o whatsapp para mas información:
      <ul class="mt-4">
        <li class="mb-2 flex items-center">
          <img src="@/assets/icons/mail.svg" id="logo" alt="email" class="w-6 mr-2" />
          <a href="mailto:clientes@neuquenpymes.com.ar">clientes@neuquenpymes.com.ar</a>
        </li>
        <li class="mb-2 flex items-center">
          <img src="@/assets/icons/whatsapp.svg" id="logo" alt="email" class="w-6 mr-2" />
          +54 9 299 409 2129
        </li>
      </ul>
    </div>
    <div id="calc">
      <div id="heading" class="heading font-bold mt-8 lg:mt-0 mb-8">Calculadora de descuentos</div>
      <div id="calc-form" class="mb-3 pb-1">
        <div class="mb-4 uppercase font-semibold tracking-wider">Datos</div>
        <div class="field flex flex-col mb-5">
          <label for="amount" class="font-light mb-2">Importe de cheque</label>
          <input type="number" v-model="amount" name="amount" placeholder="Ingrese el monto" id="amount" />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div class="field flex flex-col mb-5">
            <label for="date" class="font-light mb-2">Fecha de vencimiento</label>
            <date-picker v-model="discountDate" format="DD/MM/YYYY" :disabled-date="disabledDate" :clearable="false" name="date"></date-picker>
          </div>
          <div class="field flex flex-col mb-3">
            <label for="discountRate" class="font-light mb-2">Tasa de descuento</label>
            <select
              name="discountRate"
              id="discount-rate"
              v-model="discountRate"
              :style="{ 'background-image': 'url(' + require('@/assets/icons/select-arrow.svg') + ')' }"
            >
              <option v-for="i in 101" v-bind:value="i + 19" :key="i">{{ i + 19 }}%</option>
            </select>
          </div>
        </div>
        <div class="field flex flex-col mb-5">
          <label for="amount" class="font-light mb-2">Tipo de documento (CDP propio/tercero)</label>
          <select v-model="selectedCPD" name="DocumentType" id="document-type" :style="{ 'background-image': 'url(' + require('@/assets/icons/select-arrow.svg') + ')' }">
            <option v-for="(type, index) in this.cdpTypes" :key="index" :value="type.name">{{ type.name }}</option>
          </select>
        </div>
      </div>
      <div v-show="amount > 1500 && isValidDate(discountDate)">
        <div class="mb-6 uppercase font-semibold tracking-wider">Liquidación</div>
        <transition name="slide-fade" mode="out-in">
          <div :key="calcTotal">
            <div id="result" class="grid text-lg pb-4" v-show="amount > 1500 && isValidDate(discountDate)">
              <div class="grid grid-cols-2 mb-6 p-4 rounded-sm bg-secondary">
                <div class="text-white">Importe Neto</div>
                <div class="text-center hidden"></div>
                <div class="text-right text-white">{{ calcTotal | toMoney }}</div>
              </div>
              <div class="grid grid-cols-2 mb-5 border-b pb-1">
                <div class="text-gray-700">Interes</div>
                <div class="text-center hidden">{{ daysBetween }} días</div>
                <div class="text-right">{{ calcRate | toMoney }}</div>
              </div>
              <div class="grid grid-cols-2 mb-5 border-b pb-1">
                <div class="text-gray-700">Arancel ALyC</div>
                <div class="text-right">{{ calcTariff | toMoney }}</div>
              </div>
              <div class="grid grid-cols-2 mb-5 border-b pb-1">
                <div class="text-gray-700">Derecho de Mercado</div>
                <div class="text-right">{{ calcMarket | toMoney }}</div>
              </div>
              <div class="grid grid-cols-2 mb-5 border-b pb-1">
                <div class="text-gray-700">Arancel Caja de Valores</div>
                <div class="text-right">{{ calcCajaValores | toMoney }}</div>
              </div>
              <div class="grid grid-cols-2 mb-5 border-b pb-1">
                <div class="text-gray-700">Impuestos</div>
                <div class="text-right">{{ calcTaxes | toMoney }}</div>
              </div>
              <div class="grid grid-cols-2 mb-5 border-b pb-1">
                <div class="text-gray-700">Comisión SGR</div>
                <div class="text-right">{{ calcSGR | toMoney }}</div>
              </div>
              <div class="grid grid-cols-2 mb-5 border-b pb-1 pt-6">
                <div class="text-gray-700">TNA</div>
                <div class="text-right">{{ (discountRate / 100) | toPercent }}</div>
              </div>
              <div class="grid grid-cols-2 mb-5 border-b pb-1">
                <div class="text-gray-700">TEA</div>
                <div class="text-right">{{ calcTEA | toPercent }}</div>
              </div>
              <div class="grid grid-cols-2 mb-5 border-b pb-1">
                <div class="text-gray-700">CFT</div>
                <div class="text-right">{{ calcCFT | toPercent }}</div>
              </div>
              <div class="text-sm text-gray-600 mt-5">
                <b>Nota:</b> La información contenida en este simulador es de carácter meramente informativo, no genera a Neuquen Pymes SGR obligación de ningún tipo. La
                tasa de descuento es estimativa y dependerá de las condiciones del mercado al momento de concretar la operación”
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment/src/moment'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/locale/es'
import documentTypes from '../data/documentTypes.json'

export default {
  name: 'Home',
  components: {
    DatePicker,
  },
  data() {
    return {
      clearing: 2,
      cdpTypes: documentTypes,
      selectedCPD: String,
      amount: null,
      discountDate: moment()
        .add(35, 'days')
        .toDate(), //.toISOString().slice(0, 10),
      discountRate: '70',
      rateOptions: [],
      dateFrom: moment().startOf('day'),
      tariff: 0.015,
      market: 0.0006,
      taxes: 0.21,
      sgrMin: 0.03,
      sgrAnual: 0.05,
    }
  },
  mounted() {
    this.selectedCPD = this.cdpTypes[0].name
    var acc = document.getElementsByClassName('accordion')
    var i

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function() {
        console.log('lala')
        this.classList.toggle('active')
        var panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      })
    }
  },
  methods: {
    disabledDate(date) {
      return date < new Date()
    },
    isValidDate(d) {
      return d instanceof Date && !isNaN(d)
    },
  },
  computed: {
    daysBetween: function() {
      let time
      if (this.dateFrom != null && this.discountDate != null) {
        time = moment(this.discountDate).diff(this.dateFrom, 'days')
        time += this.clearing
      }
      return time
    },
    calcRate: function() {
      return this.amount - this.amount / (1 + (this.discountRate / 100 / 365) * this.daysBetween)
    },
    calcTariff: function() {
      return ((this.amount * this.tariff) / 365) * this.daysBetween
    },
    calcMarket: function() {
      let result
      if (this.daysBetween < 90) {
        result = (this.amount - this.calcRate) * (this.market / 90) * this.daysBetween
      } else {
        result = (this.amount - this.calcRate) * this.market
      }

      return result
    },
    calcCajaValores: function() {
      return (this.amount * 0.2) / 100
    },
    calcTaxes: function() {
      return (this.calcTariff + this.calcMarket + this.calcCajaValores) * 0.21
    },
    calcSGR: function() {
      let sgrComision = []
      this.cdpTypes.forEach((type, index) => {
        if (this.selectedCPD == type.name) {
          sgrComision.push(this.amount * this.cdpTypes[index].minimoPorcentaje)
          sgrComision.push((this.amount * this.cdpTypes[index].comision_anual) / 360) * (this.daysBetween * this.amount)
          sgrComision.push(this.cdpTypes[index].minimoPesos)
        }
      })
      return Math.max.apply(Math, sgrComision)
    },
    calcTotal: function() {
      return this.amount - this.calcRate - (this.calcTariff + this.calcMarket + this.calcTaxes + this.calcSGR + this.calcCajaValores)
    },
    calcTEA: function() {
      return Math.pow(1 + this.discountRate / 100 / (365 / this.daysBetween), 365 / this.daysBetween) - 1
    },
    calcCFT: function() {
      return 1 - this.calcTotal / this.amount
    },
  },
  filters: {
    toMoney: function(price) {
      let val = (price / 1).toFixed(2).replace('.', ',')
      return '$' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    toPercent: function(number) {
      return (number * 100).toFixed(2) + '%'
    },
  },
}
</script>

<style lang="scss" scoped>
#main-section {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'info' 'calc' 'requirements' 'contact';
  column-gap: 0;

  padding: 3.5rem 1rem 0;
}

#info {
  grid-area: info;
}

#calc {
  grid-area: calc;
}

#contact {
  grid-area: contact;
}

#requirements {
  grid-area: requirements;
}

@media (min-width: 1023px) {
  #main-section {
    grid-template-columns: auto auto;
    grid-template-areas: 'calc info' 'calc requirements' 'calc contact' 'calc empty';
    column-gap: 6rem;
  }
}

.accordion {
  background-color: #f0f0f0;
  color: #000;
  cursor: pointer;
  padding: 1rem;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  transition: 0.4s;
}

@media (hover: hover) {
  .accordion:hover {
    background-color: #ddd;
  }
}

.panel {
  padding: 0 18px;
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}

.accordion:after {
  content: '\02795'; /* Unicode character for "plus" sign (+) */
  font-size: 13px;
  color: #777;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: '\2796'; /* Unicode character for "minus" sign (-) */
}

@media (min-width: 380px) {
  .main-text {
    font-size: 5rem;
    line-height: 1.5;
  }
}
.slide-fade-enter-active {
  transition: all 0.5s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  opacity: 0;
}
</style>
