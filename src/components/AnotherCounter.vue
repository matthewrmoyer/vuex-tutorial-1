<template>
    <div>
        <h1>Another Counter...</h1>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="asyncIncrementBy({by:100, duration: 2000})">Async Increment By</button>
        
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
              'asyncIncrementBy',
              'decrement',
              'asyncDecrement'
          ])
        }
    }
</script>