<template>
    <div id="hubspotForm" v-once></div>
</template>



<script>
import {  onBeforeMount, onMounted } from "vue";

export default {
    setup(){
        onBeforeMount(() => {
           if (window.hbspt) {
             window.hbspt.forms.create({
                region: "na1",
                portalId: "1839515",
                formId: "119d7b95-57c0-4857-9ca0-4639cc28e99b",
                target: "#hubspotForm"                
            });
           }
    });
        
    }
}
</script>