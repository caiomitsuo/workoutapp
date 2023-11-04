<template>
  <q-page>
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
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'IndexPage',
  setup() {
    const router = useRouter()
  },
  methods: {
    goToCreateWorkout() {
      this.$router.push({ name: 'create-workout' })
    }
  }
})
</script>

<style scoped>
p {
  color: white;
}
</style>
