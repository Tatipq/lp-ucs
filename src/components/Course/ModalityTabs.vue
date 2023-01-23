<template>
  <section
    v-if="course && modalities"
    id="modalidade"
    class="modality-section"
  >
    <b-container>
      <header>
        <h2 class="section-title">
          <span>
            Escolha o seu jeito
          </span>
          <br />
            de estudar
        </h2>
      </header>
      <b-row>
        <b-col cols="12" md="12" lg="12">
          <b-card no-body>
            <b-tabs
              pills
              card
            >
              <b-tab
                v-for="(modalidade, index) in course.modalidades"
                :key="index"
                :title="modalidade"
                active
                @click="modalitySelected = modalidade"
              >
                <div class="modality-tab">
                  <h2 v-if="offer.length === 0" class="section-title">
                    Selecione a unidade e descubra a mensalidade do curso
                  </h2>
                  <div class="modality-card">
                    <div v-if="offer.length === 0" class="modality-header">
                      <v-select
                        v-model="campusSelected"
                        :options="campusOptions"
                        placeholder="Selecione a unidade"
                      ></v-select>
                      <v-select
                        v-model="turnSelected"
                        :options="turnOptions"
                        :disabled="form.campus===null" 
                        placeholder="Selecione o turno"
                      ></v-select>
                      <button class="btn btn-secondary btn-modality" title="Inscreva-se" @click="isHidden = !isHidden">
                        Selecionar
                      </button>
                    </div>
                    <div v-if="offer.length > 0" class="modality-content">
                      <div class="result-left">
                        <h3 class="title-default modality-title">
                          {{ modalityInfo[0]?.name }}
                        </h3>
                        <div class="modality-description">
                          <span class="paragraph-default">
                            {{ modalityInfo[0]?.description }}
                          </span>
                        </div>
                        <p class="paragraph-disclaimer modality-disclaimer">
                          {{ modalityInfo[0]?.disclaimer }}
                        </p>
                        <ul class="result-info">
                          <li class="certification-block">
                            <i class="ico ico-certificacao" />
                            <div>
                              <p>Certificação</p>
                              <h4>
                                <span class="certification-title">
                                  {{ course.nivel }}
                                </span>
                              </h4>
                            </div>
                          </li>
                          <li class="duration-block">
                            <i class="ico ico-duracao" />
                            <div>
                              <p>Duração</p>
                              <h4>
                                <span class="duration">
                                  {{ course.duracao }} Semestres
                                </span>
                              </h4>
                            </div>
                          </li>
                          <li>
                            <i class="ico ico-curso-mec" />
                            <div>
                              <p>Curso reconhecido</p>
                              <h4><span>pelo MEC</span></h4>
                            </div>
                          </li>
                          <li
                            v-if="course.info?.coordenador"
                            class="coordenator-block"
                          >
                            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M32.0152 3.52966L32.0151 3.52934H29.9261V1.49203C29.9261 1.17222 29.6689 0.92 29.3474 0.92C21.3305 0.92 18.0636 2.69771 16.995 3.48648C15.9268 2.68665 12.6591 0.92 4.64185 0.92C4.33084 0.92 4.07461 1.17339 4.07461 1.49203V3.52934H1.97421C1.3987 3.52934 0.92 3.975 0.92 4.57064V27.3578C0.92 27.9295 1.39747 28.3991 1.97421 28.3991H12.5521C12.5908 28.3991 12.624 28.3992 12.6564 28.4009L12.5198 29.2099L12.5198 29.2099L12.5194 29.2124C12.4927 29.409 12.5592 29.6091 12.7219 29.7428L12.7221 29.743L16.654 32.9476L16.6539 32.9476L16.6569 32.9498C16.7597 33.0261 16.892 33.08 17.0178 33.08C17.1531 33.08 17.2869 33.0273 17.3821 32.9472C17.3823 32.947 17.3825 32.9468 17.3827 32.9466L21.325 29.7431L21.3251 29.7431L21.328 29.7405C21.4733 29.6102 21.5564 29.4115 21.5155 29.2085L21.3787 28.4111C21.3955 28.4106 21.4143 28.4106 21.4364 28.4106H32.0255C32.6023 28.4106 33.0797 27.9409 33.0797 27.3692L33.08 4.57097L33.08 4.56924C33.0674 3.98774 32.5912 3.53023 32.0152 3.52966ZM5.20968 24.5318V8.81992C8.46689 12.9373 11.7038 14.2904 11.8496 14.3503L11.8495 14.3505L11.855 14.3523C11.9369 14.3793 12.0057 14.3793 12.0632 14.3793H12.0657C12.2395 14.3793 12.3884 14.3121 12.5074 14.1815L12.5075 14.1816L12.5093 14.1794L12.9811 13.6228L14.799 15.8214L13.1613 25.4495C11.3175 24.9583 8.76068 24.5708 5.20968 24.5318ZM28.7689 4.23818L28.7692 6.99949C26.0537 10.8694 23.1362 12.6115 22.1194 13.1236L18.1754 8.43603C19.9584 8.25848 21.9916 7.71603 23.8882 6.9629C25.7713 6.21518 27.5253 5.25761 28.7689 4.23818ZM12.5528 27.2664H12.5527L2.05488 27.2778V4.6507H4.06394V25.08C4.06394 25.3986 4.31988 25.652 4.63118 25.652C8.46135 25.652 11.137 26.0752 12.9603 26.5686L12.8352 27.2817C12.7489 27.2732 12.6545 27.2664 12.5528 27.2664ZM15.8512 15.302L15.8505 15.3013L13.7241 12.7433L16.9955 8.83854L20.3007 12.7436L18.1745 15.3013L18.1739 15.3021C18.0669 15.4341 18.0255 15.6062 18.0529 15.7555C18.053 15.7557 18.053 15.7559 18.053 15.756L20.33 29.0767L17.0182 31.7867L13.7066 29.0767L15.972 15.756C15.972 15.7558 15.9721 15.7556 15.9721 15.7554C15.9995 15.6061 15.9581 15.4341 15.8512 15.302ZM20.8522 25.4269L19.2257 15.8213L21.0436 13.6226L21.5143 14.1778C21.5144 14.1781 21.5146 14.1783 21.5148 14.1785C21.6244 14.3134 21.7874 14.3792 21.9477 14.3792L21.9536 14.3792C22.0188 14.3792 22.0901 14.3792 22.1622 14.3508C22.3275 14.2877 25.5271 12.9441 28.7573 8.87629V24.531C25.2395 24.5591 22.6949 24.9572 20.8522 25.4269ZM12.5378 12.3823L12.5377 12.3824L11.9175 13.1231C10.8966 12.5988 7.93906 10.8515 5.20925 6.92652L5.20949 4.26989C6.45942 5.26849 8.23036 6.22092 10.1238 6.96742C12.0296 7.7188 14.0652 8.26382 15.8269 8.43637L12.5378 12.3823ZM17.5737 4.4828C18.1933 3.97246 20.988 2.14464 28.7803 2.0655V2.69732C27.7493 3.80454 25.8742 4.91989 23.7817 5.78353C21.7076 6.63959 19.4316 7.24349 17.5737 7.34828V4.4828ZM5.20968 2.0655C13.007 2.14471 15.8039 3.99162 16.4163 4.48344V7.3598C14.5586 7.25517 12.2884 6.65685 10.2171 5.80918C8.12772 4.95412 6.25242 3.85011 5.20968 2.75405V2.0655ZM21.4257 27.2664C21.3345 27.2664 21.2566 27.2732 21.1775 27.2865L21.0528 26.5574C22.8864 26.0648 25.5393 25.6636 29.3359 25.6636C29.6445 25.6636 29.9145 25.4126 29.9145 25.0916V4.65117H31.9236L31.9352 27.2666L21.4257 27.2664Z" fill="#636466" stroke="#636466" stroke-width="0.16"></path>
                            </svg>
                            <div>
                              <p>Coordenador(a) do curso:</p>
                              <h4>
                                <span class="coordenator">
                                  {{ course.info?.coordenador }}
                                </span>
                              </h4>
                            </div>
                          </li>
                        </ul>
                        <div
                          v-if="course.info?.matriz"
                          class="result-buttons"
                        >
                          <a
                            class="button button--theme-outline transition curriculum-download"
                            :href="course.info?.matriz"
                            target="_blank"
                            download="download"
                          >
                            <i class="ico ico-matriz-curricular" />
                            <span>Matriz curricular</span>
                          </a>
                        </div>
                      </div>
                      <div class="result-right">
                        <div class="result-price">
                          <button class="select-another-unity" @click="clearOffer()">
                            <span>Mudar de unidade</span>
                            <i class="ico ico-alterna" />
                          </button>
                          <div class="discount-price">
                            <div>
                              <p class="discount-price__title">
                                Mensalidades <br>
                                a partir de:
                              </p>
                              <p class="discount-price__normal-value first-price">
                                {{ offer[0]?.de|currency }}
                              </p>
                            </div>
                            <p class="discount-price__discount">
                              Bolsa de <br />
                              <span class="price-discount">
                                {{ offer[0]?.desconto }}%
                              </span>
                            </p>
                          </div>
                          <p class="discount-price__discounted-value">
                            <money>
                              {{ offer[0]?.por|currency }}
                            </money>
                            <span>/mês</span>
                          </p>
                          <CTA
                            class="btn btn-primary"
                            :course="course"
                            :turn="form.turn"
                            :campus="form.campus"
                            :modality="form.modality"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </b-tab>
            </b-tabs>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    course: {
      type: Object,
      default () { return {} },
      required: true
    }
  },
  data() {
    return {
      modalitySelected: null,
      campusOptions: [],
      campusSelected: null,
      turnOptions: [],
      turnSelected: null,
      form: {
        modality: null,
        campus: null,
        turn: null
      },
      isHidden: false
    }
  },
  async fetch () {
    await this.$store.dispatch('modalities/getModalities')
    await this.$store.dispatch('institution/getInstitution')
    this.modalitySelected = this.course.modalidades[0]
  },
  computed: {
    ...mapGetters({
      modalities: 'modalities/getModalities',
      institution: 'institution/getInstitution'
    }),
    offer () {
      return this.course.ofertas.filter((oferta) => {
        return oferta.modalidade === this.form.modality && oferta.turno === this.form.turn && oferta.campus === this.form.campus
      })
    },
    modalityInfo () {
      return this.modalities.filter((modality) => {
        return modality.name === this.modalitySelected
      })
    }
  },
  
  watch: {
    modalitySelected (_newValue) {
      if (_newValue !== null) {
        this.form.modality = _newValue
        this.campusSelected = null
        this.form.campus = null
        this.turnSelected = null
        this.form.turn = null
        this.campusOptions = this.getCamposOptions()
      }
    },
    campusSelected (_newValue) {
      if (_newValue !== null) {
        this.form.campus = _newValue
        this.turnOptions = this.getTurnOptions()
      }
    },
    turnSelected (_newValue) {
      if (_newValue !== null) {
        this.form.turn = _newValue
      }
    }
  },
  methods: {
    clearOffer () {
      this.turnSelected = null
      this.campusSelected = null
      this.form.turn = null
      this.form.campus = null
    },
    getCamposOptions () {
      return [
        ...new Set(this.course.ofertas.filter(oferta => oferta.modalidade === this.form.modality).map(oferta => oferta.campus))
      ]
    },
    getTurnOptions () {
      return [
        ...new Set(this.course.ofertas
          .filter(oferta => oferta.modalidade === this.form.modality)
          .filter(oferta => oferta.campus === this.form.campus)
          .map(oferta => oferta.turno))
      ]
    }
  }
}
</script>