<template>
    <div>
        <common-header bg="#448A94">
            <h3 slot="title">MUSIC</h3>
        </common-header>
        <router-view></router-view>
        <common-footer bg="#448A94"></common-footer>
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