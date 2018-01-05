<template>
    <div>
        <common-header bg='#407434'>
            <h3 slot='title'>PHOTO</h3>
        </common-header>
        <router-view></router-view>
        <common-footer bg='#407434'></common-footer>
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

