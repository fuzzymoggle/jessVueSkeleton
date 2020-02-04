let app = new Vue({
    el: "#vueApp",
    data: {
        welcomeMessage: 'My To Do List',
        lists:[{id1: 'fhskda'}],
        newItem: '',

    },
    methods: {
        addItem: function(){
            let id = this.lists.length + 1
            for(let i = 0; i < this.list.length; i++){
                if (this.newItem !== ''){
                    const newList = {is:is,item:this.newItem}
                    this.list.push(newList)
                    this.newItem = ''
            }

            }
        }
    },
    mounted() {

    },
});
