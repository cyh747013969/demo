<template>
    <div>
        <common-header bg='#DA752D'>
            <h3 slot='title'>BOOK</h3>
        </common-header>
        <router-view></router-view>
        <common-footer bg='#DA752D'></common-footer>
    </div>
</template>
<script>
    import CommonHeader from '../common/Header'
    import CommonFooter from '../common/Footer'
export default {
    components:{
        CommonHeader,
        CommonFooter
    }
}
</script>
<style scoped>

</style>
