<template>
    <div>
        <section class="todoapp">
            <section class="main">
                <input class="toggle-all" type="checkbox" v-model="allDone">
                <h2>Hello world this is vue login page</h2>
                <p>{{otherData}}</p>
            </section>
        </section>
        <button>Share</button>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            title: ''
        }
    }
}
</script>