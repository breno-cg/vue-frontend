<template>
    <div>
        <h2>Deletar Contato</h2>
        <span>{{id}}</span>
    </div>
    

</template>
<script>
import ContatoService from '../services/ContatoService.js'
export default{
    data(){
        return{
            id:''
        };
    },
    created(){
        this.id = this.$route.params.id
        ContatoService.deleteContato(this.id).then(
            (response) => { this.$router.push('/contato')} 
        );
    }
}
</script>