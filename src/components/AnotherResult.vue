<template>
    <div>
        <h1>Another Result</h1>
        <p>Another counter is {{ doubleCounter }}</p>
        <p>{{ stringCounter }} </p>
        

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
    export default {
        computed: {
            ...mapGetters([
                'doubleCounter',
                'stringCounter'
            ])
        }
        
    }
</script>

<style scoped>

</style>