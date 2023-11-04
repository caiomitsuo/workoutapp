<template>
  <q-page>
    <div>
      <q-card class="q-mt-lg bg-indigo full-width" v-for="treino in treinosSimplificados" :key="treino.id">
        <q-card-section class="row items-center">
          <q-icon name="fitness_center" size="4rem" color="white"></q-icon>
          <div>
            <p class="text-h5 q-ml-md">{{ treino.nomeTreino }}</p>
          </div>
        </q-card-section>
      </q-card>
    </div>
    <q-card class="q-mt-lg bg-indigo full-width" @click="goToCreateWorkout">
      <q-card-section class="row items-center justify-between">
        <q-icon name="fitness_center" size="4rem" color="white"></q-icon>
        <div>
          <p class="text-h5">Cadastrar Treino</p>
          <p class="text-h7 q-mt-sm items-stretch">Bora se Exercitar!</p>
        </div>
        <div class="">
          <q-btn round icon="add" color="white" text-color="indigo" size="md"></q-btn>
        </div>
        <!-- <q-icon name=" add" color="white" size="md"></q-icon> -->
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import IndexedDB from '../utils/IndexedDB';
export default defineComponent({
  name: 'IndexPage',
  setup() {
    const router = useRouter()
    const treinosSimplificados = ref([]);
    const goToCreateWorkout = () => {
      router.push({ name: 'create-workout' })
    }
    const loadIndexedDBData = async () => {
      const data = await IndexedDB.getAllData();
      treinosSimplificados.value = data.map(item => {
        return {
          id: item.id,
          nomeTreino: item.nomeTreino,
        };

      });
      console.log(treinosSimplificados);
    }
    onMounted(() => {
      loadIndexedDBData();
    })
    return {
      goToCreateWorkout,
      loadIndexedDBData,
      treinosSimplificados,
    }
  },
})
</script>

<style scoped>
p {
  color: white;
}
</style>
