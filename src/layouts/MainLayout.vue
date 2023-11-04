<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Workout App
        </q-toolbar-title>

      </q-toolbar>
    </q-header>
    <q-footer>
      <q-tabs v-model="tab" dense class="bg-indigo text-white">
        <q-route-tab icon="home" label="Início" :to="{ name: 'home' }">
        </q-route-tab>
        <q-route-tab icon="add" label="Novo Treino" :to="{ name: 'create-workout' }">
        </q-route-tab>
        <q-route-tab icon="home">
        </q-route-tab>
      </q-tabs>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup() {
    const router = useRouter()
    return {
      tab: ref('Início')
    }
  }
})
</script>
