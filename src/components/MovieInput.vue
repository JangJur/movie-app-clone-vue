<template>
    <div class="inputBox shadow">
        <input type="text" v-model="searchItem" placeholder="Type what you want to movie" v-on:keyup.enter="searchMovie">
        <span class="searchContainer" v-on:click="searchMovie">
            <i class="searchBtn fas fa-search" aria-hidden="true"></i>
        </span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchItem: ''
        }
    },
    methods: {
        searchMovie() {
            if (this.searchItem !== "") {
                var value = this.searchItem && this.searchItem.trim();
                localStorage.setItem(value, value);
                this.clearInput();
            }
        },
        clearInput() {
            this.searchItem = '';
        }
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        text-align: center;
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .searchContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .searchBtn {
        color: white;
        vertical-align: middle;
    }

</style>