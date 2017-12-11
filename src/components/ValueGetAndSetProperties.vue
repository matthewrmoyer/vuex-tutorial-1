<template>
    <div>
        <h1>Value</h1>
        <input type="text" v-model='value'>
        <p>{{ value }}</p>
    </div>
</template>

<script>
import{ mapActions } from 'vuex'
    export default {
        computed: {
            value: {
                get() {
                    return this.$store.getters['value/value']
                },
                set() {
                    this.$store.dispatch('value/updateValue', event.target.value)
                }
            }
        }
    }
</script>

<style scoped>

</style>