<template>
    <div>
        <h1>Another Counter...</h1>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>        
        <button class="btn btn-primary" @click="asyncDecrement">Async Decrement</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        methods: {
          ...mapActions([
              'increment',
              'decrement',
              'asyncDecrement'
          ])
        }
    }
</script>