<template>
    <q-page>
        <h1>OLA PAGINA DE INICIAL</h1>
    </q-page>
</template>
  
<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
    name: 'navigate-home',
    setup() {
        const router = useRouter()
    }
})
</script>
  