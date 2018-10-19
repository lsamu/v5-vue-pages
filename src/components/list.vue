<template>
    <div>
        <ul>
            <li v-for="(item,index) in items" :key="item.id">
                    {{item}}
            </li>
        </ul>
    </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class sdfasdfasd extends Vue {

    public items:any[] = [1,2,3,4,5,6,7,8,9,10];
}
</script>
