<template>
    <div>
        <p>This is an example of a new components in VueJs</p>

        <b-alert show dismissible> Hello {{ sample }} </b-alert>

        <b-list-group>
            <b-list-group-item href="http://apple.com">iPhone</b-list-group-item>
            <b-list-group-item>OnePlus 3T</b-list-group-item>
            <b-list-group-item>Samsung Galaxy 8</b-list-group-item>
        </b-list-group>
    </div>
</template>

<script>
    export default {

        name: "example",
        data() {
            return {
               sample: ""
            }
        },
        mounted: function() {
            this.sample = "test test"
        }

    }
</script>

<style scoped>

</style>