<template>
  <q-page>
    <q-form @submit.prevent="saveFormData">
      <q-input outlined label="Nome do Treino" v-model="nomeTreino" />
      <q-select filled v-model="model" use-input hide-selected fill-input input-debounce="0" :options="options"
        @filter="filterFn">
        <template v-slot:no-option>
        </template>
      </q-select>
      <div v-for="n in selectedNumber" :key="n">
        <q-input outlined v-model="exercicio[n - 1]" :label="'Exercicio ' + n" />
        <div class="row justify-between">
          <q-input class="col" outlined v-model="serie[n - 1]" :label="'Serie ' + n" />
          <q-input class="col" outlined v-model="repeticoes[n - 1]" :label="'Repetições ' + n" />
        </div>
      </div>
      <q-btn label="Salvar" type="submit" />
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref, onMounted, computed } from 'vue'
import IndexedDB from '../utils/IndexedDB';
import useNotify from '../components/useNotify'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({
  name: 'WorkoutCreate',
  setup() {
    const options = ref([]);
    for (let i = 0; i <= 30; i++) {
      options.value.push(i);
    }
    const selectedNumber = computed(() => {
      return model.value ? Array.from({ length: model.value }, (_, i) => i + 1) : [];
    });
    const { notifyError, notifySuccess } = useNotify();
    const model = ref(null);
    const nomeTreino = ref('');
    const exercicio = ref(Array(30).fill(''));
    const serie = ref(Array(30).fill(''));
    const repeticoes = ref(Array(30).fill(''));

    // Método para carregar os dados do IndexedDB e preencher os campos
    const loadIndexedDBData = async () => {
      const data = await IndexedDB.getAllData();
      if (data.length > 0) {
        const firstData = data[0]; // Suponhamos que você deseja preencher com o primeiro conjunto de dados
        nomeTreino.value = firstData.nomeTreino;
        model.value = firstData.model;
        exercicio.value = JSON.parse(firstData.exercicio);
        serie.value = JSON.parse(firstData.serie);
        repeticoes.value = JSON.parse(firstData.repeticoes);
      }
    }

    const saveFormData = async () => {
      // Salvar os dados do formulário no IndexedDB
      const formData = {
        nomeTreino: nomeTreino.value,
        model: model.value,
        exercicio: JSON.stringify(exercicio.value),
        serie: JSON.stringify(serie.value),
        repeticoes: JSON.stringify(repeticoes.value)
      };
      await IndexedDB.addData(formData);
      notifySuccess('Dados salvos com sucesso!');
      router.push({ name: 'home' });
    }

    const filterFn = (val, update, abort) => {
      update(() => {
        const needle = val.toLocaleLowerCase()
      })
    }

    const router = useRouter();

    return {
      model,
      options,
      nomeTreino,
      exercicio,
      serie,
      repeticoes,
      loadIndexedDBData,
      saveFormData,
      filterFn,
      selectedNumber
    }
  }
})
</script>
